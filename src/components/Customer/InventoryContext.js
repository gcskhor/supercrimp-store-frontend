import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../../store.js";
import { useSnackbarContext } from "../../components/SnackbarContext.js";

axios.defaults.withCredentials = true;

const InventoryContext = React.createContext();

export function useInventoryContext() {
	return useContext(InventoryContext);
}

export function InventoryContextProvider({ children }) {
	const [products, setProducts] = useState([]);
	const [availableColours, setAvailableColours] = useState([]);
	const { enableSnackBar } = useSnackbarContext();

	useEffect(() => {
		axios
			.get(`${BACKEND_URL}/products`)
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.log(error.message);
				enableSnackBar(error.response.data)();
			});

		axios
			.get(`${BACKEND_URL}/colours`)
			.then((response) => {
				setAvailableColours(response.data);
			})
			.catch((error) => {
				console.log(error.message);
				enableSnackBar(error.response.data)();
			});
	}, []);

	return (
		<InventoryContext.Provider value={{ products, availableColours }}>
			{children}
		</InventoryContext.Provider>
	);
}
