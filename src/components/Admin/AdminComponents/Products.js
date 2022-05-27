import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { BACKEND_URL } from "../../../store.js";
import ProductTable from "./Products/ProductTable.js";
import AddProductButton from "./Products/AddProductButton.js";
import DeleteProductDialog from "./Products/DeleteProductDialog.js";

export function reloadProducts(setProducts, BACKEND_URL) {
  return axios
    .get(`${BACKEND_URL}/admin/products`)
    .then((response) => {
      setProducts(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [openDeleteProductDialog, setOpenDeleteProductDialog] = useState(false);

  useEffect(() => {
    reloadProducts(setProducts, BACKEND_URL);
  }, []);

  return (
    <Box>
      <h2>Products</h2>
      <ProductTable
        products={products}
        setSelectedProduct={setSelectedProduct}
        setOpenDeleteProductDialog={setOpenDeleteProductDialog}
      />
      <AddProductButton />
      {openDeleteProductDialog && selectedProduct && (
        <DeleteProductDialog
          openDeleteProductDialog={openDeleteProductDialog}
          setOpenDeleteProductDialog={setOpenDeleteProductDialog}
          selectedProduct={selectedProduct}
          setProducts={setProducts}
        />
      )}
    </Box>
  );
}
