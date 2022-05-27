import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { BACKEND_URL } from "../../../../store.js";
import axios from "axios";
import { reloadProducts } from "../Products.js";

export default function DeleteProductDialog({
  openDeleteProductDialog,
  setOpenDeleteProductDialog,
  selectedProduct,
  setProducts,
}) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setId(selectedProduct.id);
    setName(selectedProduct.name);
    return () => {
      reloadProducts(setProducts, BACKEND_URL);
    };
  }, []);

  const dataToServer = {
    id: id,
  };

  const handleClose = () => {
    console.log("closing");
    setOpenDeleteProductDialog(false);
  };

  const handleDelete = () => {
    console.log("deleting");
    axios
      .post(`${BACKEND_URL}/admin/product/delete`, dataToServer)
      .then((response) => {
        console.log(response.data);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Dialog open={openDeleteProductDialog} onClose={handleClose}>
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you would like to delete{" "}
            <strong>
              <em>{name}</em>
            </strong>
            ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleClose}>Back</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
