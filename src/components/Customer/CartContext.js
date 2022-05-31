import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
// import { BACKEND_URL } from "../../store.js";

axios.defaults.withCredentials = true;

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

		// case ACTIONS.REMOVE:
		// return { start: "", end: "" };
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

const editItemColour = (productId, colourId, newColour) => {
	const cart = JSON.parse(localStorage.getItem("cart"));
	const itemIndex = cart.findIndex(
		(item) => item.productId === productId && item.colourId === colourId
	);

	const item = cart[itemIndex];
	item.colourId = newColour.id;

	localStorage.setItem("cart", JSON.stringify(cart));
	return {
		type: ACTIONS.EDIT_COLOUR,
		payload: { cart },
	};
};

// const removeItemFromCart = () => {
// 	return {
// 		type: ACTIONS.REMOVE,
// 	};
// };

const CartContext = React.createContext();

export function useCartContext() {
	return useContext(CartContext);
}

export function CartContextProvider({ children }) {
	const [cart, cartDispatch] = useReducer(cartReducer, null);
	const [total, setTotal] = useState(0);
	console.log("cart", cart);

	const updateTotal = () => {
		let totalTally = 0;
		cart?.forEach((item) => {
			totalTally += Number(item.subtotalCost);
		});
		setTotal(totalTally);
	};

	useEffect(() => {
		cartDispatch(retrieveCart());
	}, []);

	useEffect(() => updateTotal(), [cart]);

	return (
		<CartContext.Provider
			value={{
				cart,
				cartDispatch,
				dispatchHelpers: [retrieveCart, addItemToCart, editItemColour],
				total,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
