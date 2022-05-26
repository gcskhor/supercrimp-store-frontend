import { Box, Typography, Button, Stack } from "@mui/material";

import Price from "./Price.js";
import AvailableColourDisplay from "./AvailableColourDisplay.js";

export default function ProductDetails({
	product,
	selectedColour,
	setSelectedColour,
}) {
	// component returns: product description, features, outer dimensions, mounting and materials
	function ProductInfo() {
		return (
			<Stack spacing={3} my={3} pb={3} borderBottom="1px solid #cacaca">
				<Box>
					<Typography variant="body1" gutterbottom>
						{product.description}
					</Typography>
				</Box>
				<Box>
					<Typography variant="button" fontWeight="bold">
						Features
					</Typography>
					<Typography variant="body1" gutterbottom>
						{product.features}
					</Typography>
				</Box>
				<Box>
					<Typography variant="button" fontWeight="bold">
						Outer Dimensions
					</Typography>
					<Typography variant="body1" gutterbottom>
						{product.outerDimensions}
					</Typography>
				</Box>
				<Box>
					<Typography variant="button" fontWeight="bold">
						Mounting
					</Typography>
					<Typography variant="body1" gutterbottom>
						{product.mounting}
					</Typography>
				</Box>
				<Box>
					<Typography variant="button" fontWeight="bold">
						Materials
					</Typography>
					<Typography variant="body1" gutterbottom>
						{product.materials}
					</Typography>
				</Box>
			</Stack>
		);
	}

	return (
		<Box sx={{ p: { xs: 0.5, sm: 1, md: 2 }, m: { xs: 0.5, sm: 1, md: 2 } }}>
			<Typography variant="h3">{product.name}</Typography>
			<Price product={product} />
			<ProductInfo />
			<AvailableColourDisplay
				productDetails={product}
				selectedColour={selectedColour}
				setSelectedColour={setSelectedColour}
			/>
			<Button size="small" variant="contained" sx={{ my: 4 }}>
				Add to Cart
			</Button>
		</Box>
	);
}
