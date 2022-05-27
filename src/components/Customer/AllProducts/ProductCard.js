import { useState } from "react";
import {
	Grid,
	Card,
	// CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
} from "@mui/material";

import Price from "../ProductDetails/Price.js";
import AvailableColourDisplay from "../ProductDetails/AvailableColourDisplay.js";
import AddToCartButton from "../ProductDetails/AddToCartButton.js";

export default function ProductSummary({ productDetails }) {
	const [selectedColour, setSelectedColour] = useState(null);
	const { id, name } = productDetails;

	return (
		<Grid item xs={10} md={6}>
			<Card sx={{ px: 2, py: 3 }}>
				{/* <CardMedia component="img" image={image} /> */}
				<CardContent>
					<Typography variant="h4" gutterBottom>
						{name}
					</Typography>
					<Price product={productDetails} />
					<AvailableColourDisplay
						productDetails={productDetails}
						selectedColour={selectedColour}
						setSelectedColour={setSelectedColour}
					/>
				</CardContent>
				<CardActions
					sx={{
						flexDirection: "column",
						alignItems: "flex-start",
						px: 2,
					}}
				>
					<Button size="small" href={`/product/${id}`}>
						View details
					</Button>

					<AddToCartButton
						productDetails={productDetails}
						selectedColour={selectedColour}
						setSelectedColour={setSelectedColour}
					/>
				</CardActions>
			</Card>
		</Grid>
	);
}
