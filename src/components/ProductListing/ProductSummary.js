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
	const { id, name, usualPrice, currentPrice, colours } = productDetails;

	return (
		<Grid item xs={5}>
			<Card>
				{/* <CardMedia component="img" image={image} /> */}
				<CardContent>
					<Typography gutterBottom variant="h5">
						{name}
					</Typography>
					<Typography variant="h6" color="text.secondary">
						S${currentPrice}
					</Typography>
					<Typography variant="subtitle1" color="text.secondary">
						(Usual price: S${usualPrice})
					</Typography>
					<AvailableColourDisplay productId={id} colours={colours} />
				</CardContent>
				<CardActions>
					<Button size="small" href={`/product/${id}`}>
						View details
					</Button>
					<Button size="small">Add to Cart</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
