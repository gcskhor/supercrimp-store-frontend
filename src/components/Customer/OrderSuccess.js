import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
	Container,
	Box,
	Typography,
	Grid,
	Card,
	Stack,
	Button,
} from "@mui/material";

import OrderItem from "./OrderDetails/OrderItem.js";
import { BACKEND_URL } from "../../store.js";

export default function CheckoutSuccess() {
	const [orderDetails, setOrderDetails] = useState(null);
	const [total, setTotal] = useState(Number(0));
	const { orderId } = useParams();

	const orderSubmitted = document.cookie
		.split("; ")
		.find((c) => c.startsWith("orderSubmitted"))
		?.split("=")[1];

	useEffect(() => {
		localStorage.removeItem("cart");
		localStorage.removeItem("userDetails");
		axios
			.post(`${BACKEND_URL}/checkout/complete`, { orderSubmitted, orderId })
			.then((response) => {
				const { order } = response.data;
				setOrderDetails(order);
			})
			.catch((error) => {
				setOrderDetails(null);
			});
	}, []);

	useEffect(() => {
		orderDetails?.products.forEach((item) => {
			const subtotal = item.quantity * Number(item.product.currentPrice);
			setTotal((prevTotal) => prevTotal + subtotal);
		});
	}, [orderDetails]);

	function OrderItemsList() {
		const formatItemDetails = (item) => {
			const subtotalCost = item.quantity * Number(item.product.currentPrice);
			return {
				name: item.product.name,
				colour: item.colour.name,
				usualPrice: item.product.usualPrice,
				currentPrice: item.product.currentPrice,
				quantity: item.quantity,
				subtotalCost: subtotalCost.toFixed(2),
			};
		};

		const orderItems = orderDetails?.products.map((item) =>
			formatItemDetails(item)
		);

		return orderItems.map((item, i) => (
			<OrderItem item={item} key={`${item.name}-${item.colour}-${i}`} />
		));
	}

	function UserDetails() {
		return (
			<Grid container spacing={2} mt={1} mb={4}>
				<Grid item sm={2}>
					<Typography variant="button">Name:</Typography>
				</Grid>
				<Grid item sm={10}>
					{orderDetails.user.name}
				</Grid>
				<Grid item sm={2}>
					<Typography variant="button">Email:</Typography>
				</Grid>
				<Grid item sm={10}>
					{orderDetails.user.email}
				</Grid>
				<Grid item sm={2}>
					<Typography variant="button">Phone:</Typography>
				</Grid>
				<Grid item sm={10}>
					{orderDetails.user.phone}
				</Grid>
				<Grid item sm={2}>
					<Typography variant="button">Address:</Typography>
				</Grid>
				<Grid item sm={10}>
					{orderDetails.user.addressLine1}
				</Grid>
				<Grid item sm={2}></Grid>
				<Grid item sm={10}>
					{orderDetails.user.addressLine2}
				</Grid>
				<Grid item sm={2}></Grid>
				<Grid item sm={10}>
					Singapore {orderDetails.user.postalCode}
				</Grid>
			</Grid>
		);
	}

	return (
		<Container maxWidth="md">
			{orderDetails && (
				<Box>
					<Typography py={3} variant="h3">
						Checkout Success!
					</Typography>
					<Typography variant="h5" display="block" mb={3} px={1}>
						Order Details
					</Typography>
					<Typography variant="body1" px={1}>
						Below are your order details.
					</Typography>
					<Card sx={{ my: 5, py: 2, px: 2 }}>
						<Typography
							variant="button"
							fontSize="large"
							fontWeight="bold"
							display="block"
						>
							Order ID: {orderDetails.id}
						</Typography>
						<UserDetails />
						<OrderItemsList />
						<Grid container sx={{ px: 5, mt: 3 }}>
							<Grid item xs={12} sm></Grid>
							<Grid item sm={4} sx={{ textAlign: { sm: "right" } }}>
								<Typography variant="h6">
									Total: S${total.toFixed(2)}
								</Typography>
							</Grid>
						</Grid>
					</Card>
				</Box>
			)}
			{!orderDetails && (
				<Typography textAlign="center" variant="h6" py={5}>
					Something went wrong.
				</Typography>
			)}

			<Stack
				direction={{ xs: "column", sm: "row" }}
				justifyContent="space-between"
				spacing={2}
				sx={{ mb: 5 }}
			>
				<Button variant="contained" size="small" href="/">
					Back to home
				</Button>
			</Stack>
		</Container>
	);
}
