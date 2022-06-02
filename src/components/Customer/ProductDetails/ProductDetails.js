import { Box, Typography, Stack } from "@mui/material";

import Price from "./Price.js";
import AvailableColourDisplay from "./AvailableColourDisplay.js";
import AddToCartButton from "./AddToCartButton.js";

export default function ProductDetails({
	product,
	selectedColour,
	setSelectedColour,
}) {
	const DESCRIPTION = product.description;
	const FEATURES = product.features;
	const OUTER_DIMENSIONS = product.outerDimensions;
	const MOUNTING = product.mounting;
	const MATERIALS = product.materials;

	const isBlank = (info) => info === "";
	const isTotallyEmpty =
		isBlank(DESCRIPTION) &&
		isBlank(FEATURES) &&
		isBlank(OUTER_DIMENSIONS) &&
		isBlank(MOUNTING) &&
		isBlank(MATERIALS);

	function Header({ title }) {
		return (
			<Typography variant="button" fontWeight="bold" color="primary.light">
				{title}
			</Typography>
		);
	}

	function Text({ info }) {
		return (
			<Typography variant="body1" gutterbottom="true">
				{info}
			</Typography>
		);
	}

	function ProductInfo() {
		return (
			<Stack spacing={3} py={1}>
				{!isBlank(DESCRIPTION) && (
					<Box>
						<Text info={DESCRIPTION} />
					</Box>
				)}
				{!isBlank(FEATURES) && (
					<Box>
						<Header title="Features" />
						<Text info={FEATURES} />
					</Box>
				)}
				{!isBlank(OUTER_DIMENSIONS) && (
					<Box>
						<Header title="Outer Dimensions" />
						<Text info={OUTER_DIMENSIONS} />
					</Box>
				)}
				{!isBlank(MOUNTING) && (
					<Box>
						<Header title="Mounting" />
						<Text info={MOUNTING} />
					</Box>
				)}
				{!isBlank(MATERIALS) && (
					<Box>
						<Header title="Materials" />
						<Text info={MATERIALS} />
					</Box>
				)}
			</Stack>
		);
	}

	const styles = { p: { xs: 0.5, sm: 1, md: 2 }, m: { xs: 0.5, sm: 1, md: 2 } };

	return (
		<Stack spacing={3} sx={styles}>
			<Typography variant="h3" color="primary">
				{product.name}
			</Typography>
			<Price product={product} />
			{!isTotallyEmpty && <ProductInfo />}
			<hr style={{ border: 0, height: 1, backgroundColor: "#cacaca" }} />
			<AvailableColourDisplay
				productDetails={product}
				selectedColour={selectedColour}
				setSelectedColour={setSelectedColour}
			/>
			<AddToCartButton
				productDetails={product}
				selectedColour={selectedColour}
				setSelectedColour={setSelectedColour}
			/>
		</Stack>
	);
}
