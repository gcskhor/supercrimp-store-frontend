import React from "react";
import { Box, Typography } from "@mui/material";

export default function OrdersProductCell({ purchase, index }) {
  return (
    <Box key={index}>
      <Typography
        sx={{ display: "inline" }}
        component="span"
        variant="body2"
        color="text.primary"
        paddingX={2}
      >
        {purchase.product.name}
      </Typography>
      |
      <Typography
        sx={{ display: "inline" }}
        component="span"
        variant="body2"
        color={purchase.colour.code}
        paddingX={2}
      >
        {purchase.colour.name}
      </Typography>
      |
      <Typography
        sx={{ display: "inline" }}
        component="span"
        variant="body2"
        color="text.primary"
        paddingX={2}
      >
        Qty: {purchase.quantity}
      </Typography>
    </Box>
  );
}
