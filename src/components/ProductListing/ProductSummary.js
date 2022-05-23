import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
} from '@mui/material';
import styles from './ProductListing.module.css';

import AvailableColourDisplay from './AvailableColourDisplay.js';

export default function ProductSummary({ productDetails }) {
	const { id, image, name, price, colours } = productDetails;

	return (
		<Card className={styles.productCard}>
			<CardMedia component="img" image={image} />
			<CardContent>
				<Typography gutterBottom variant="h5">
					{name}
				</Typography>
				<Typography variant="h6" color="text.secondary">
					S${price}
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
	);
}
