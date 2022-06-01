import { useState, useEffect } from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
} from "@mui/material";

import Price from "../ProductDetails/Price.js";
import AvailableColourDisplay from "../ProductDetails/AvailableColourDisplay.js";
import AddToCartButton from "../ProductDetails/AddToCartButton.js";
import { Box } from "@mui/system";

const TRIHARD_CARD_IMAGE_URL = "/images/tri-hard/trihard_1.jpeg";
const MINIHANGBOARD_CARD_IMAGE_URL = "/images/mini-hangboard/mini_1.jpeg";
const TRIHARD = "Tri-hard";
const MINIHANGBOARD = "Mini-hangboard";

export default function ProductSummary({ productDetails }) {
	const [selectedColour, setSelectedColour] = useState(null);
	const [cardImage, setCardImage] = useState("");
	const { id, name } = productDetails;

	useEffect(() => {
		switch (name) {
			case TRIHARD:
				setCardImage(TRIHARD_CARD_IMAGE_URL);
				break;
			case MINIHANGBOARD:
				setCardImage(MINIHANGBOARD_CARD_IMAGE_URL);
				break;
			default:
				break;
		}
	}, []);

	return (
		<Grid item xs={10} md={6}>
			<Card sx={{ px: 2, py: 3, my: 1 }}>
				{cardImage && <CardMedia component="img" image={cardImage} />}
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
