import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, CardMedia } from "@mui/material";

import CartButton from "./CartButton.js";

export default function Navbar() {
	const HomeRouterLink = forwardRef((props, ref) => (
		<RouterLink ref={ref} to="/" {...props} />
	));

	return (
		<Box
			sx={{
				backgroundColor: "secondary.main",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				px: { xs: 2, sm: 5 },
			}}
		>
			<Button component={HomeRouterLink}>
				<CardMedia
					component="img"
					image="/images/logos/SUPERCRIMP-logo-black.png"
					alt=""
					sx={{ my: 1, height: { xs: 70, sm: 90 } }}
				/>
			</Button>
			<CartButton />
		</Box>
	);
}
