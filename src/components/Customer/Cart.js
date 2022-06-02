import { Container, Typography, Button, Stack } from "@mui/material";

import { useCartContext } from "./CartContext.js";
import CartDetails from "./CartDetails/CartDetails.js";

export default function Cart() {
	const { cart } = useCartContext();

	return (
		<Container maxWidth="md">
			<Typography py={3} variant="h3">
				Cart
			</Typography>
			{!cart && (
				<>
					<Typography variant="h6" mb={3}>
						You haven't added anything yet!
					</Typography>
					<Button variant="contained" size="small" href="/">
						Start shopping
					</Button>
				</>
			)}
			{cart && (
				<>
					<CartDetails />
					<Stack
						direction={{ xs: "column", sm: "row" }}
						justifyContent="space-between"
						spacing={2}
						sx={{ mt: 5, mb: 5 }}
					>
						<Button variant="outlined" size="small" href="/">
							Continue shopping
						</Button>
						<Button variant="contained" href="/checkout">
							Proceed to Checkout
						</Button>
					</Stack>
				</>
			)}
		</Container>
	);
}
