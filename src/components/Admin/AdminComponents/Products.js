import React, { useState, useEffect } from 'react';
import { Container } from '@mui/system';
import { BackendCall } from '../../../store.js';
import ProductTable from './Products/ProductTable.js';
import AddProductButton from './Products/AddProductButton.js';
import DeleteProductDialog from './Products/DeleteProductDialog.js';
import { Typography } from '@mui/material';

export function reloadProducts(setProducts) {
  return BackendCall.get(`/admin/products`)
    .then((response) => {
      setProducts(response.data);
    })
    .catch((err) => {
      console.log(err.response);
      if (err.response.status === 401) {
        window.location.href = '/admin/login';
      }
    });
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [openDeleteProductDialog, setOpenDeleteProductDialog] = useState(false);

  useEffect(() => {
    reloadProducts(setProducts);
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" fontWeight="bold" pb={3}>
        Products
      </Typography>
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
    </Container>
  );
}
