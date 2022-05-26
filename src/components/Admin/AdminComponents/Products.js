import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { BACKEND_URL } from "../../../store.js";
import ProductTable from "./Products/ProductTable.js";
import AddProductButton from "./Products/AddProductButton.js";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/admin/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box>
      <h2>Products</h2>
      <ProductTable products={products} />
      <AddProductButton />
    </Box>
  );
}
