import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BackendCall } from '../../../../store.js';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Stack,
  Container,
  Typography,
} from '@mui/material';
import { useSnackbarContext } from '../../../SnackbarContext.js';

export default function EditProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [outerDimensions, setOuterDimensions] = useState('');
  const [mounting, setMounting] = useState('');
  const [materials, setMaterials] = useState('');
  const [usualPrice, setUsualPrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [available, setAvailable] = useState();
  const [colours, setColours] = useState([]);
  const [allColours, setAllColours] = useState([]);

  const { enableSnackBar } = useSnackbarContext();

  const dataToServer = {
    id: id,
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

  useEffect(() => {
    BackendCall.get(`/product/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        const {
          id,
          name,
          description,
          features,
          outerDimensions,
          mounting,
          materials,
          usualPrice,
          currentPrice,
          available,
          colours,
        } = response.data;
        setId(id);
        setName(name);
        setDescription(description);
        setFeatures(features);
        setOuterDimensions(outerDimensions);
        setMounting(mounting);
        setMaterials(materials);
        setUsualPrice(usualPrice);
        setCurrentPrice(currentPrice);
        setAvailable(available);
        setColours(colours);
      })
      .catch((err) => {
        console.log(err);
        enableSnackBar(err.response.data)();
      });

    BackendCall.get(`/admin/colours`)
      .then((response) => {
        console.log(response.data);
        setAllColours(response.data);
      })
      .catch((err) => {
        console.log(err);
        enableSnackBar(err.response.data)();
      });
  }, [productId]);

  const handleUpdate = () => {
    BackendCall.post(`/admin/product/${productId}/edit`, dataToServer)
      .then((response) => {
        console.log(response);
        enableSnackBar('Item updated')();
      })
      .catch((err) => {
        console.log(err);
        enableSnackBar(err.response.data)();
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

  const isChecked = (colour) => {
    return colours.filter((col) => col.id === colour.id).length > 0;
  };

  return (
    product && (
      <Container>
        <Stack component="form" spacing={3}>
          <TextField
            label="Product Name"
            variant="filled"
            fullWidth
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
          <TextField
            label="Description"
            variant="filled"
            multiline
            rows={4}
            fullWidth
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
          />
          <TextField
            label="Features"
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
            variant="filled"
            fullWidth
            onChange={(event) => {
              setUsualPrice(event.target.value);
            }}
            value={usualPrice}
          />
          <TextField
            label="Current Price (SGD)"
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
            <Typography variant="button">Colours</Typography>
            {allColours.map((colour) => {
              return (
                <FormGroup key={colour.name}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        label={colour.name}
                        labelplacement="start"
                        checked={isChecked(colour)}
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
            onClick={handleUpdate}
          >
            Update Product
          </Button>
          <Button
            fullWidth
            variant="outlined"
            component={Link}
            to={`/admin/products`}
          >
            Back
          </Button>
        </Stack>
      </Container>
    )
  );
}
