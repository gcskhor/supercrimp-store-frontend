import { Container, Typography, Grid, Box } from "@mui/material";

import { useInventoryContext } from "./InventoryContext.js";
import { useCartContext } from "./CartContext.js";

export default function Cart() {
	const { products, availableColours } = useInventoryContext();
	const { cart } = useCartContext();

	let totalCost = 0;

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
		totalCost += Number(item.subtotalCost);
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
		return cartItems.map((item) => {
			return (
				<Box
					sx={{
						px: 5,
						py: 3,
						borderBottom: "1px dotted #cacaca",
					}}
				>
					<Typography variant="h6" mb={1}>
						{item.name}
					</Typography>
					<Grid container>
						<Grid
							item
							xs={12}
							sm={3}
							sx={{
								px: { xs: 1, sm: 0 },
							}}
						>
							<Typography variant="button">{item.colour}</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							sm={3}
							sx={{
								px: { xs: 1, sm: 2 },
								textAlign: { sm: "center" },
								borderLeft: { sm: "1px dotted #cacaca" },
								borderRight: { sm: "1px dotted #cacaca" },
							}}
						>
							{item.currentPrice === item.usualPrice ? (
								<Typography variant="button">S${item.currentPrice}</Typography>
							) : (
								<>
									<Typography
										variant="button"
										sx={{ textDecoration: "line-through" }}
									>
										S${item.usualPrice}
									</Typography>{" "}
									<Typography variant="button" color="red">
										S${item.currentPrice}
									</Typography>
								</>
							)}
						</Grid>
						<Grid
							item
							xs={12}
							sm={2}
							sx={{
								px: { xs: 1, sm: 2 },
								textAlign: { sm: "center" },
								borderRight: { sm: "1px dotted #cacaca" },
							}}
						>
							<Typography variant="button">Qty: {item.quantity}</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							sm={4}
							sx={{
								px: { xs: 1, sm: 0 },
								textAlign: { sm: "right" },
							}}
						>
							<Typography variant="button">
								Subtotal: S${item.subtotalCost}
							</Typography>
						</Grid>
					</Grid>
				</Box>
			);
		});
	}

	return (
		<Container maxWidth="lg">
			<Typography p={5} pb={3} variant="h3">
				Cart
			</Typography>
			<CartItemsList />
			<Grid container p={5}>
				<Grid item xs={12} sm></Grid>
				<Grid item sm={4} sx={{ textAlign: { sm: "right" } }}>
					<Typography variant="h6">Total: S${totalCost.toFixed(2)}</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}
