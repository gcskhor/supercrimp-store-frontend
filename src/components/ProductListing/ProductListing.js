import { Container } from '@mui/material';
import ProductSummary from './ProductSummary.js';
import styles from './ProductListing.module.css';

export default function ProductListing() {
	const colours = [
		{ name: 'red', code: 'red', available: true },
		{ name: 'black', code: '#000000', available: true },
		{ name: 'yellow', code: 'rgb(240,240,0)', available: true },
	];
	const products = [
		{
			id: 1,
			image: '',
			name: 'Tri-hard',
			price: '20',
			colours,
		},
	]; // make axios call to backend to fetch products

	function ProductSummaryList() {
		return products.map((product) => (
			<ProductSummary productDetails={product} key={`${product.id}`} />
		));
	}

	return (
		<Container className={styles.productContainer} maxWidth="md">
			<ProductSummaryList />
		</Container>
	);
}
