import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { BACKEND_URL } from "../../../store.js";
import ProductSummary from "./ProductSummary.js";

export default function ProductListing() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get(`${BACKEND_URL}/products`).then((response) => {
			setProducts(response.data);
		});
	}, []);

	function ProductSummaryList() {
		return products.map((product) => (
			<ProductSummary productDetails={product} key={`${product.id}`} />
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
				<ProductSummaryList />
			</Grid>
		</Container>
	);
}
