import { Container, Typography, Button, Stack } from "@mui/material";

import CartDetails from "./CartDetails/CartDetails.js";

export default function Cart() {
	return (
		<Container maxWidth="md">
			<Typography py={3} variant="h3">
				Cart
			</Typography>
			<CartDetails />
			<Stack
				direction={{ xs: "column", sm: "row" }}
				justifyContent="space-between"
				spacing={2}
				sx={{ mb: 5 }}
			>
				<Button variant="outlined" size="small" href="/">
					Continue shopping
				</Button>
				<Button variant="contained" href="/checkout">
					Proceed to Checkout
				</Button>
			</Stack>
		</Container>
	);
}
