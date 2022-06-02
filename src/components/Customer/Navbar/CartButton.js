import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useCartContext } from "../CartContext";

export default function Navbar() {
	const { numItems } = useCartContext();
	const CartRouterLink = forwardRef((props, ref) => (
		<RouterLink ref={ref} to="/cart" {...props} />
	));

	return (
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
					backgroundColor: "secondary.light",
				},
			}}
		>
			Cart {numItems > 0 && `(${numItems})`}
		</Button>
	);
}
