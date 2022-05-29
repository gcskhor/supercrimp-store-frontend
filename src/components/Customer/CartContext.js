import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
// import { BACKEND_URL } from "../../store.js";

axios.defaults.withCredentials = true;

const ACTIONS = {
	RETRIEVE: "retrieve cart",
	ADD: "add item to cart",
	EDIT: "edit item in cart",
	REMOVE: "remove item from cart",
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.RETRIEVE:
			return action.payload.cart;
		case ACTIONS.ADD:
			// TODO: increase quantity instead of adding same item
			return state ? [...state, action.payload] : [action.payload];
		// case ACTIONS.EDIT:
		// return { ...state, end: action.payload.endDate };
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
	const subtotalCost = product.currentPrice * quantity;
	const item = { productId: product.id, colourId, quantity, subtotalCost };

	const cart = JSON.parse(localStorage.getItem("cart"));

	if (!cart) {
		localStorage.setItem("cart", JSON.stringify([item]));
	} else {
		cart.push(item);
		localStorage.setItem("cart", JSON.stringify(cart));
	}

	return {
		type: ACTIONS.ADD,
		payload: item,
	};
};

// const editItemInCart = () => {
// 	return {
// 		type: ACTIONS.EDIT,
// 		payload: {  },
// 	};
// };

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
	const [cart, cartDispatch] = useReducer(cartReducer, []);
	const [total, setTotal] = useState(0);

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
				dispatchHelpers: [retrieveCart, addItemToCart],
				total,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
