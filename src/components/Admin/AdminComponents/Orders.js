import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import OrdersAccordion from "./Orders/OrdersAccordion.js";
import { OrdersContext } from "./Orders/OrdersContext.js";
import { BACKEND_URL } from "../../../store.js";

export const loadOrders = async (type, setter) => {
	return axios
		.get(`${BACKEND_URL}/admin/orders/${type}`)
		.then((response) => {
			setter(response.data);
		})
		.catch((err) => {
			console.log(err.response);
			if (err.response.status === 401) {
				window.location.href = "/admin/login";
			}
		});
};

export default function Orders() {
	const [pendingOrders, setPendingOrders] = useState([]);
	const [completedOrders, setCompletedOrders] = useState([]);

	useEffect(() => {
		Promise.all([
			loadOrders("pending", setPendingOrders),
			loadOrders("completed", setCompletedOrders),
		]);
	}, []);

	return (
		<Container maxWidth="lg">
			<OrdersContext.Provider
				value={{
					pendingOrdersContext: [pendingOrders, setPendingOrders],
					completedOrdersContext: [completedOrders, setCompletedOrders],
					orderTypesContext: [setPendingOrders, setCompletedOrders],
				}}
			>
				<OrdersAccordion />
			</OrdersContext.Provider>
		</Container>
	);
}
