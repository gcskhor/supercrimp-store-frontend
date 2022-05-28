import { Container, Grid } from "@mui/material";

import { useInventoryContext } from "../InventoryContext.js";
import ProductCard from "./ProductCard.js";

export default function AllProducts() {
	const { products } = useInventoryContext();

	function ProductsList() {
		return products.map((product) => (
			<ProductCard productDetails={product} key={`${product.id}`} />
		));
	}

	return (
		<Container maxWidth="md">
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				justifyContent="center"
				alignItems="flex-start"
			>
				<ProductsList />
			</Grid>
		</Container>
	);
}
