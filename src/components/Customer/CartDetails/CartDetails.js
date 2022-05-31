import { Grid, Typography, Card } from "@mui/material";

import { useCartContext } from "../CartContext.js";

import CartItem from "./CartItem.js";

export default function CartDetails() {
  const { cart, total } = useCartContext();

  function CartItemsList() {
    return cart.map((item, i) => {
      return (
        <CartItem item={item} key={`${item.name}-${item.colourId}-${i}`} />
      );
    });
  }

  return (
    <Card sx={{ pb: 3, mb: 3 }}>
      {cart && <CartItemsList />}
      <Grid container sx={{ px: 5, mt: 3 }}>
        <Grid item xs={12} sm></Grid>
        <Grid item sm={4} sx={{ textAlign: { sm: "right" } }}>
          <Typography variant="h6">Total: S${total.toFixed(2)}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
