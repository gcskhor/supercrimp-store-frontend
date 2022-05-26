import { Box, Typography, Button } from "@mui/material";

import AvailableColourDisplay from "../ProductListing/AvailableColourDisplay.js";

export default function ProductDetails({
	product,
	selectedColour,
	setSelectedColour,
}) {
	const colourIds = product.colours.map((colour) => colour.id);

	function UsualPrice() {
		return (
			<Typography variant="h6" color="text.secondary">
				(Usual price: S${product.usualPrice})
			</Typography>
		);
	}

	return (
		<Box sx={{ p: { xs: 0.5, sm: 1, md: 2 }, m: { xs: 0.5, sm: 1, md: 2 } }}>
			<Typography variant="h3">{product.name}</Typography>
			<Typography variant="h5">S${product.currentPrice}</Typography>
			{product.usualPrice !== product.currentPrice && <UsualPrice />}
			<Typography
				variant="body1"
				my={2}
				pb={2}
				borderBottom="1px solid #cacaca"
			>
				{product.description}
			</Typography>
			<AvailableColourDisplay
				productId={product.id}
				productColours={colourIds}
				selectedColour={selectedColour}
				setSelectedColour={setSelectedColour}
			/>
			<Button size="small" variant="contained" sx={{ my: 4 }}>
				Add to Cart
			</Button>
		</Box>
	);
}
