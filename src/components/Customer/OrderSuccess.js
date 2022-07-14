import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  Stack,
  Button,
} from '@mui/material';

import OrderItem from './OrderDetails/OrderItem.js';
import BackendCall from '../../store.js';
import { useSnackbarContext } from '../SnackbarContext.js';

export default function CheckoutSuccess() {
  const [orderDetails, setOrderDetails] = useState(null);
  const { orderId } = useParams();
  const { enableSnackBar } = useSnackbarContext();

  const orderSubmitted = document.cookie
    .split('; ')
    .find((c) => c.startsWith('orderSubmitted'))
    ?.split('=')[1];

  useEffect(() => {
    localStorage.removeItem('cart');
    localStorage.removeItem('userDetails');
    BackendCall.post(`/checkout/complete`, {
      orderSubmitted,
      orderId,
    })
      .then((response) => {
        const { order } = response.data;
        setOrderDetails(order);
      })
      .catch((error) => {
        setOrderDetails(null);
        console.log(error.message);
        enableSnackBar(error.response.data)();
      });
  }, []);

  function OrderItemsList() {
    const formatItemDetails = (item) => {
      const subtotalCost = item.quantity * Number(item.product.currentPrice);
      return {
        name: item.product.name,
        colour: item.colour.name,
        usualPrice: item.product.usualPrice,
        currentPrice: item.product.currentPrice,
        quantity: item.quantity,
        subtotalCost: subtotalCost.toFixed(2),
      };
    };

    const orderItems = orderDetails?.products.map((item) =>
      formatItemDetails(item)
    );

    return orderItems.map((item, i) => (
      <OrderItem item={item} key={`${item.name}-${item.colour}-${i}`} />
    ));
  }

  function UserDetails() {
    return (
      <Grid container spacing={1} mt={1} mb={4} px={3}>
        <Grid item sm={2}>
          <Typography variant="button" fontWeight="bold">
            Name:
          </Typography>
        </Grid>
        <Grid item sm={10}>
          {orderDetails.user.name}
        </Grid>
        <Grid item sm={2}>
          <Typography variant="button" fontWeight="bold">
            Email:
          </Typography>
        </Grid>
        <Grid item sm={10}>
          {orderDetails.user.email}
        </Grid>
        <Grid item sm={2}>
          <Typography variant="button" fontWeight="bold">
            Phone:
          </Typography>
        </Grid>
        <Grid item sm={10}>
          {orderDetails.user.phone}
        </Grid>
        <Grid item sm={2}>
          <Typography variant="button" fontWeight="bold">
            Address:
          </Typography>
        </Grid>
        <Grid item sm={10}>
          {orderDetails.user.addressLine1}
        </Grid>
        <Grid item sm={2}></Grid>
        <Grid item sm={10}>
          {orderDetails.user.addressLine2}
        </Grid>
        <Grid item sm={2}></Grid>
        <Grid item sm={10}>
          Singapore {orderDetails.user.postalCode}
        </Grid>
      </Grid>
    );
  }

  return (
    <Container maxWidth="md">
      {orderDetails && (
        <Box>
          <Typography py={3} variant="h3">
            Checkout Success!
          </Typography>
          <Typography
            variant="button"
            fontSize="large"
            fontWeight="bold"
            color="primary"
            display="block"
            mb={2}
            px={1}
          >
            Order Details
          </Typography>
          <Typography variant="body1" px={1}>
            Your order details have been sent to your email.
          </Typography>
          <Card sx={{ my: 5, py: 3, px: 2, boxShadow: 3 }}>
            <Typography
              variant="button"
              fontSize="large"
              fontWeight="bold"
              display="block"
              color="primary"
              px={2}
            >
              Order ID: {orderDetails.id}
            </Typography>
            <UserDetails />
            <OrderItemsList />
            <Grid container sx={{ px: 5, mt: 3 }}>
              <Grid item xs={12} sm></Grid>
              <Grid item sm={4} sx={{ textAlign: { sm: 'right' } }}>
                <Typography variant="h6">
                  Total: S${Number(orderDetails.totalCost).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
      )}
      {!orderDetails && (
        <Typography textAlign="center" variant="h6" py={5}>
          Something went wrong.
        </Typography>
      )}

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        spacing={2}
        sx={{ mt: 5, mb: 5 }}
      >
        <Button variant="contained" size="small" href="/">
          Back to home
        </Button>
      </Stack>
    </Container>
  );
}
