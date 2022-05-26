import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../../../store.js";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [usualPrice, setUsualPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [available, setAvailable] = useState(false);
  const [colours, setColours] = useState([]);

  const dataToServer = {
    name: name,
    description: description,
    usualPrice: usualPrice,
    currentPrice: currentPrice,
    available: available,
  };

  const handleAdd = () => {
    axios
      .post(`${BACKEND_URL}/admin/product/add`, dataToServer)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box component="form">
      <TextField
        label="Product Name"
        placeholder="Product Name"
        variant="filled"
        fullWidth
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
      />
      <TextField
        label="Product Description"
        placeholder="Product Description"
        variant="filled"
        multiline
        rows={7}
        fullWidth
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        value={description}
      />
      <TextField
        label="Usual Price (SGD)"
        placeholder="Usual Price (SGD)"
        variant="filled"
        fullWidth
        onChange={(event) => {
          setUsualPrice(event.target.value);
        }}
        value={usualPrice}
      />
      <TextField
        label="Current Price (SGD)"
        placeholder="Current Price (SGD)"
        variant="filled"
        fullWidth
        onChange={(event) => {
          setCurrentPrice(event.target.value);
        }}
        value={currentPrice}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              label="Available"
              labelplacement="start"
              checked={available}
              onChange={(event) => setAvailable(event.target.checked)}
            />
          }
          label="Available"
        />
      </FormGroup>
      <Box>Colours</Box>

      <Button
        fullWidth
        variant="contained"
        component={Link}
        to={`/admin/products`}
        onClick={handleAdd}
      >
        Add Product
      </Button>
      <Button
        fullWidth
        variant="contained"
        component={Link}
        to={`/admin/products`}
      >
        Back
      </Button>
    </Box>
  );
}
