import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, CardMedia } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useCartContext } from "../CartContext";

export default function Navbar() {
	const { numItems } = useCartContext();
	const CartRouterLink = forwardRef((props, ref) => (
		<RouterLink ref={ref} to="/cart" {...props} />
	));
	const HomeRouterLink = forwardRef((props, ref) => (
		<RouterLink ref={ref} to="/" {...props} />
	));

	return (
		<Box
			style={{
				backgroundColor: "#0288d1",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Button component={HomeRouterLink}>
				<CardMedia
					component="img"
					image="/images/logos/SUPERCRIMP-logo.png"
					alt=""
					sx={{ my: 1, height: { xs: 70, sm: 90 } }}
				/>
			</Button>
			<Button
				component={CartRouterLink}
				startIcon={<ShoppingCartOutlined />}
				size="large"
				sx={{
					py: 2,
					px: 3,
					mx: { xs: 3, sm: 5 },
					borderRadius: 50,
					color: "white",
					fontWeight: "bold",
					"&:hover": {
						backgroundColor: "#29b6f6",
					},
				}}
			>
				Cart {numItems > 0 && `(${numItems})`}
			</Button>
		</Box>
	);
}
