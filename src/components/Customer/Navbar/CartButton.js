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
				py: { xs: 2, sm: 2 },
				pl: { xs: 1.5, sm: 3 },
				pr: { xs: 1, sm: 3 },
				borderRadius: 30,
				color: "black",
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
