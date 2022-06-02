import { Grid, Typography, Card } from "@mui/material";

import { useCartContext } from "../CartContext.js";

import OrderItem from "./OrderItem.js";

export default function OrderDetails() {
	const { cart, total } = useCartContext();

	function OrderItemsList() {
		return cart?.map((item, i) => {
			return (
				<OrderItem item={item} key={`${item.name}-${item.colourId}-${i}`} />
			);
		});
	}

	return (
		<Card sx={{ pb: 3, mb: 3, boxShadow: 5 }}>
			<OrderItemsList />
			<Grid container sx={{ px: 5, mt: 3 }}>
				<Grid item xs={12} sm></Grid>
				<Grid item sm={4} sx={{ textAlign: { sm: "right" } }}>
					<Typography variant="h6">Total: S${total.toFixed(2)}</Typography>
				</Grid>
			</Grid>
		</Card>
	);
}
