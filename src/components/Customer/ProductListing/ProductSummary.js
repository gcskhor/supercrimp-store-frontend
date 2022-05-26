import { useState } from 'react';
import {
	Grid,
	Card,
	// CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
} from '@mui/material';

import AvailableColourDisplay from './AvailableColourDisplay.js';

export default function ProductSummary({ productDetails }) {
	const [selectedColour, setSelectedColour] = useState(null);

	const { id, name, usualPrice, currentPrice, colours } = productDetails;
	const colourIds = colours.map((colour) => colour.id);

	function UsualPrice() {
		return (
			<Typography variant="subtitle1" color="text.secondary">
				(Usual price: S${usualPrice})
			</Typography>
		);
	}

	return (
		<Grid item xs={5}>
			<Card sx={{ px: 2, pt: 3, pb: 5 }}>
				{/* <CardMedia component="img" image={image} /> */}
				<CardContent>
					<Typography gutterBottom variant="h5">
						{name}
					</Typography>
					<Typography variant="h6">S${currentPrice}</Typography>
					{usualPrice !== currentPrice && <UsualPrice />}
					<AvailableColourDisplay
						productId={id}
						productColours={colourIds}
						selectedColour={selectedColour}
						setSelectedColour={setSelectedColour}
					/>
				</CardContent>
				<CardActions
					sx={{
						flexDirection: 'column',
						alignItems: 'flex-start',
						px: 2,
					}}
				>
					<Button size="small" href={`/product/${id}`} sx={{ mb: 2 }}>
						View details
					</Button>
					<Button size="small" variant="contained">
						Add to Cart
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
