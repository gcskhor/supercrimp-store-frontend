import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

import BackendCall from '../../store.js';
import ProductDetails from './ProductDetails/ProductDetails.js';
import ProductCarousel from './ProductDetails/ProductCarousel.js';
import { useSnackbarContext } from '../SnackbarContext.js';

export default function Product() {
  const emptyProduct = {
    id: null,
    name: '',
    description: '',
    usualPrice: '',
    currentPrice: '',
    available: false,
    colours: [],
  };

  const [product, setProduct] = useState(emptyProduct);
  const [selectedColour, setSelectedColour] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { productId } = useParams();
  const { enableSnackBar } = useSnackbarContext();

  useEffect(() => {
    BackendCall.get(`/product/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        enableSnackBar(error.response.data)();
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
