import React, { useContext, useEffect, useReducer, useState } from "react";

const ACTIONS = {
	RETRIEVE: "retrieve cart",
	ADD: "add item to cart",
	EDIT_COLOUR: "edit colour of item in cart",
	EDIT_QTY: "edit quantity of item in cart",
	REMOVE: "remove item from cart",
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.RETRIEVE:
			return action.payload.cart;

		case ACTIONS.ADD:
			return action.payload;

		case ACTIONS.EDIT_COLOUR:
			return action.payload.cart;

		case ACTIONS.EDIT_QTY:
			return action.payload.cart;

		case ACTIONS.REMOVE:
			const { newCart } = action.payload;
			return newCart.length < 1 ? null : action.payload.newCart;

		default:
			throw new Error();
	}
};

const retrieveCart = () => {
	const cart = JSON.parse(localStorage.getItem("cart"));
	return {
		type: ACTIONS.RETRIEVE,
		payload: { cart },
	};
};

const addItemToCart = (product, colourId, quantity) => {
	const cart = JSON.parse(localStorage.getItem("cart"));
	const newCart = cart ?? [];

	const newItem = {
		productId: product.id,
		colourId,
		quantity,
		subtotalCost: product.currentPrice * quantity,
	};

	const existingItemIndex = newCart.findIndex(
		(item) =>
			item.productId === newItem.productId && item.colourId === newItem.colourId
	);

	if (existingItemIndex < 0) {
		newCart.push(newItem);
	} else {
		const existingItem = cart[existingItemIndex];
		existingItem.quantity += 1;
		existingItem.subtotalCost += Number(product.currentPrice);
	}

	localStorage.setItem("cart", JSON.stringify(newCart));

	return {
		type: ACTIONS.ADD,
		payload: newCart,
	};
};

const editItemColour = (productId, colourId, currentPrice, newColour) => {
	const cart = JSON.parse(localStorage.getItem("cart"));

	// update current item
	const currentItemIndex = cart.findIndex(
		(item) => item.productId === productId && item.colourId === colourId
	);
	const currentItem = cart[currentItemIndex];
	currentItem.colourId = newColour.id;

	// if item (product + colour combination) already exists,
	// combine both and update quantity
	const existingItemIndex = cart.findIndex(
		(item) => item.productId === productId && item.colourId === newColour.id
	);

	if (existingItemIndex >= 0) {
		const existingItem = cart[existingItemIndex];
		existingItem.quantity += currentItem.quantity;
		existingItem.subtotalCost += currentItem.quantity * currentPrice;
		cart.splice(currentItemIndex, 1);
	}

	localStorage.setItem("cart", JSON.stringify(cart));
	return {
		type: ACTIONS.EDIT_COLOUR,
		payload: { cart },
	};
};

const editItemQuantity = (productId, colourId, currentPrice, quantity) => {
	const cart = JSON.parse(localStorage.getItem("cart"));
	const itemIndex = cart.findIndex(
		(item) => item.productId === productId && item.colourId === colourId
	);

	const item = cart[itemIndex];
	item.quantity = quantity;
	item.subtotalCost = currentPrice * quantity;

	localStorage.setItem("cart", JSON.stringify(cart));
	return {
		type: ACTIONS.EDIT_QTY,
		payload: { cart },
	};
};

const removeItemFromCart = (productId, colourId) => {
	const cart = JSON.parse(localStorage.getItem("cart"));
	const newCart = cart.filter(
		(item) => !(item.productId === productId && item.colourId === colourId)
	);

	if (newCart.length < 1) {
		localStorage.removeItem("cart");
	} else {
		localStorage.setItem("cart", JSON.stringify(newCart));
	}

	return {
		type: ACTIONS.REMOVE,
		payload: { newCart },
	};
};

const CartContext = React.createContext();

export function useCartContext() {
	return useContext(CartContext);
}

export function CartContextProvider({ children }) {
	const [cart, cartDispatch] = useReducer(cartReducer, null);
	const [total, setTotal] = useState(0);
	const [numItems, setNumItems] = useState(0);

	const updateTotal = () => {
		let totalTally = 0;
		cart?.forEach((item) => {
			totalTally += Number(item.subtotalCost);
		});
		setTotal(totalTally);
	};

	const updateNumItems = () => {
		let num = 0;
		cart?.forEach((item) => {
			num += item.quantity;
		});
		setNumItems(num);
	};

	useEffect(() => {
		cartDispatch(retrieveCart());
	}, []);

	useEffect(() => {
		updateTotal();
		updateNumItems();
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				cart,
				cartDispatch,
				dispatchHelpers: [
					retrieveCart,
					addItemToCart,
					editItemColour,
					editItemQuantity,
					removeItemFromCart,
				],
				total,
				numItems,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
