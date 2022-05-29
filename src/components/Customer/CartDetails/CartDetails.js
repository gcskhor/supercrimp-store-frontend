import { Grid, Typography, Card } from "@mui/material";

import { useInventoryContext } from "../InventoryContext.js";
import { useCartContext } from "../CartContext.js";

import CartItem from "./CartItem.js";

export default function CartDetails() {
	const { products, availableColours } = useInventoryContext();
	const { cart, total } = useCartContext();

	const getProductDetails = (item, type) => {
		const result = products.find((product) => product.id === item.productId);
		switch (type) {
			case "name":
				return result && result.name;
			case "usual price":
				return result && Number(result.usualPrice).toFixed(2);
			case "current price":
				return result && Number(result.currentPrice).toFixed(2);
			default:
				return null;
		}
	};

	const getColourName = (colourId) => {
		const result = availableColours.find((colour) => colour.id === colourId);
		return result && result.name;
	};

	const formatItemDetails = (item) => {
		return {
			name: getProductDetails(item, "name"),
			colour: getColourName(item.colourId),
			usualPrice: getProductDetails(item, "usual price"),
			currentPrice: getProductDetails(item, "current price"),
			quantity: item.quantity,
			subtotalCost: Number(item.subtotalCost).toFixed(2),
		};
	};

	const cartItems = cart.map((item) => formatItemDetails(item));

	function CartItemsList() {
		return cartItems.map((item, i) => (
			<CartItem item={item} key={`${item.name}-${item.colour}-${i}`} />
		));
	}

	return (
		<Card sx={{ pb: 3, mb: 3 }}>
			<CartItemsList />
			<Grid container sx={{ px: 5, mt: 3 }}>
				<Grid item xs={12} sm></Grid>
				<Grid item sm={4} sx={{ textAlign: { sm: "right" } }}>
					<Typography variant="h6">Total: S${total.toFixed(2)}</Typography>
				</Grid>
			</Grid>
		</Card>
	);
}
