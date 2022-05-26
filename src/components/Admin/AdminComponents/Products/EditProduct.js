import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../../../../store.js";
import { Box, TextField } from "@mui/material";

export default function EditProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/product/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <Box component="form">
      <TextField
        label="Product Name"
        placeholder="Product Name"
        variant="filled"
        fullWidth
        value={product.name}
      />
      <TextField
        label="Product Description"
        placeholder="Product Description"
        variant="filled"
        multiline
        rows={7}
        fullWidth
        value={product.description}
      />
      <TextField
        label="Usual Price (SGD)"
        placeholder="Usual Price (SGD)"
        variant="filled"
        fullWidth
        value={product.usualPrice}
      />
      <TextField
        label="Current Price (SGD)"
        placeholder="Current Price (SGD)"
        variant="filled"
        fullWidth
        value={product.currentPrice}
      />
    </Box>
  );
}
