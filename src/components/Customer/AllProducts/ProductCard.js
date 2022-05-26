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

import { useCartContext } from "../CartContext.js";

import Price from "../ProductDetails/Price.js";
import AvailableColourDisplay from "../ProductDetails/AvailableColourDisplay.js";

export default function ProductSummary({ productDetails }) {
	const {
		cartDispatch,
		dispatchHelpers: [, addItemToCart],
	} = useCartContext();
	const [selectedColour, setSelectedColour] = useState(null);
	const { id, name } = productDetails;

	const addToCart = () => {
		// TODO: add error msg for when no colour is selected
		cartDispatch(addItemToCart(productDetails, selectedColour.id, 1));
		setSelectedColour(null);
	};

	return (
		<Grid item xs={6}>
			<Card sx={{ px: 2, pt: 3, pb: 5 }}>
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
					<Button size="small" href={`/product/${id}`} sx={{ mb: 2 }}>
						View details
					</Button>
					<Button size="small" variant="contained" onClick={addToCart}>
						Add to Cart
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
