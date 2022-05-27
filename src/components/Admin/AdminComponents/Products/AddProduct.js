import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
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
  const [features, setFeatures] = useState("");
  const [outerDimensions, setOuterDimensions] = useState("");
  const [mounting, setMounting] = useState("");
  const [materials, setMaterials] = useState("");
  const [usualPrice, setUsualPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [available, setAvailable] = useState(false);
  const [colours, setColours] = useState([]);
  const [allColours, setAllColours] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/admin/colours`)
      .then((response) => {
        console.log(response.data);
        setAllColours(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dataToServer = {
    name: name,
    description: description,
    features: features,
    outerDimensions: outerDimensions,
    mounting: mounting,
    materials: materials,
    usualPrice: usualPrice,
    currentPrice: currentPrice,
    available: available,
    colours: colours,
  };

  const handleAdd = () => {
    console.log(dataToServer);
    axios
      .post(`${BACKEND_URL}/admin/product/add`, dataToServer)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleColourOnChange = (event, actionableColour) => {
    if (event.target.checked) {
      setColours((colours) => [...colours, actionableColour]);
    } else {
      const coloursCopy = [...colours];
      setColours(
        coloursCopy.filter((colour) => colour.id !== actionableColour.id)
      );
    }
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
        label="Features"
        placeholder="Features"
        variant="filled"
        multiline
        rows={2}
        fullWidth
        onChange={(event) => {
          setFeatures(event.target.value);
        }}
        value={features}
      />
      <TextField
        label="Outer Dimensions"
        placeholder="Outer Dimensions"
        variant="filled"
        multiline
        rows={1}
        fullWidth
        onChange={(event) => {
          setOuterDimensions(event.target.value);
        }}
        value={outerDimensions}
      />
      <TextField
        label="Mounting"
        placeholder="Mounting"
        variant="filled"
        multiline
        rows={4}
        fullWidth
        onChange={(event) => {
          setMounting(event.target.value);
        }}
        value={mounting}
      />
      <TextField
        label="Materials"
        placeholder="Materials"
        variant="filled"
        multiline
        rows={4}
        fullWidth
        onChange={(event) => {
          setMaterials(event.target.value);
        }}
        value={materials}
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
      <Box>
        <Box>Colours</Box>
        {allColours.map((colour) => {
          return (
            <FormGroup key={colour.name}>
              <FormControlLabel
                control={
                  <Checkbox
                    label={colour.name}
                    labelplacement="start"
                    onChange={(event) => {
                      handleColourOnChange(event, colour);
                    }}
                  />
                }
                label={colour.name}
              />
            </FormGroup>
          );
        })}
      </Box>

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
