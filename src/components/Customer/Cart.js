import { Container, Grid, Typography } from "@mui/material";
import { useCartContext } from "./CartContext.js";

export default function Cart() {
	const { cart } = useCartContext();

	console.log("cart page - cart:", cart);

	function CartItems() {
		return cart.map((item) => {
			return Object.entries(item).map(([key, value]) => (
				<p>
					{key}: {value}
				</p>
			));
		});
	}

	return (
		<Container maxWidth="lg">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography mt={3} mb={5} variant="h3">
						Cart
					</Typography>
				</Grid>
				<Grid item>
					<CartItems />
				</Grid>
			</Grid>
		</Container>
	);
}
