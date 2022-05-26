import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { BACKEND_URL } from "../../../store.js";
import ProductTable from "./Products/ProductTable.js";
import AddProductButton from "./Products/AddProductButton.js";
import EditProductModal from "./Products/EditProductModal.js";
import DeleteProductModal from "./Products/DeleteProductModal.js";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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
      <ProductTable
        products={products}
        setOpenEditModal={setOpenEditModal}
        setOpenDeleteModal={setOpenDeleteModal}
        setSelectedProduct={setSelectedProduct}
      />
      <AddProductButton />
      {openEditModal && (
        <EditProductModal
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
        />
      )}
      {openDeleteModal && (
        <DeleteProductModal
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      )}
    </Box>
  );
}
