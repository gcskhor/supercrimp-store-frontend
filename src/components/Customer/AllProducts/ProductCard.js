import { useState, useEffect } from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Link,
	Button,
	Stack,
} from "@mui/material";

import Price from "../ProductDetails/Price.js";
import AvailableColourDisplay from "../ProductDetails/AvailableColourDisplay.js";
import AddToCartButton from "../ProductDetails/AddToCartButton.js";

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
	}, [name]);

	return (
		<Grid item xs={10} md={6}>
			<Card sx={{ px: 2, py: 3, my: 1, boxShadow: 3 }}>
				{cardImage && (
					<a href={`/product/${id}`}>
						<CardMedia component="img" image={cardImage} />
					</a>
				)}
				<CardContent>
					<Link
						variant="productCardName"
						href={`/product/${id}`}
						underline="none"
					>
						{name}
					</Link>
					<Price product={productDetails} />
					<AvailableColourDisplay
						productDetails={productDetails}
						selectedColour={selectedColour}
						setSelectedColour={setSelectedColour}
					/>
				</CardContent>
				<CardActions>
					<Stack
						direction={{ xs: "column", sm: "row" }}
						alignItems="center"
						spacing={2}
					>
						<Button variant="outlined" href={`/product/${id}`}>
							View details
						</Button>
						<AddToCartButton
							productDetails={productDetails}
							selectedColour={selectedColour}
							setSelectedColour={setSelectedColour}
						/>
					</Stack>
				</CardActions>
			</Card>
		</Grid>
	);
}
