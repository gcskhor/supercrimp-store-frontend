import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import { BACKEND_URL } from "../../store.js";
import ProductDetails from "./ProductDetails/ProductDetails.js";
import ProductCarousel from "./ProductDetails/ProductCarousel.js";

export default function Product() {
	const emptyProduct = {
		id: null,
		name: "",
		description: "",
		usualPrice: "",
		currentPrice: "",
		available: false,
		colours: [],
	};

	const [product, setProduct] = useState(emptyProduct);
	const [selectedColour, setSelectedColour] = useState(null);
	const [quantity, setQuantity] = useState(1);

	const { productId } = useParams();

	useEffect(() => {
		axios.get(`${BACKEND_URL}/product/${productId}`).then((response) => {
			setProduct(response.data);
		});
	}, [productId]);

	return (
		<Container maxWidth="lg">
			<Grid container spacing={2} mt={3} mb={5}>
				<Grid item xs={12} md={6}>
					{product.id && <ProductCarousel product={product} />}
				</Grid>
				<Grid item xs={12} md={6}>
					<ProductDetails
						product={product}
						selectedColour={selectedColour}
						setSelectedColour={setSelectedColour}
						quantity={quantity}
						setQuantity={setQuantity}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}
