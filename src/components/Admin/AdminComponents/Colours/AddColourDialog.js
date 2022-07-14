import React, { useState, useContext, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import { ColourContext } from './ColourContext.js';
import { reloadColours } from '../Colours.js';
import BackendCall from '../../../../store.js';

export default function AddColourDialog() {
  const [id] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [available, setAvailable] = useState(false);
  const { openAddDialogContext, coloursContext } = useContext(ColourContext);
  const [openAddDialog, setOpenAddDialog] = openAddDialogContext;
  const [, setColours] = coloursContext;

  useEffect(() => {
    // reload colours on the colours page on dialog close
    return () => {
      reloadColours(setColours);
    };
  }, []);

  const dataToServer = {
    id: id,
    name: name,
    code: code,
    available: available,
  };

  const handleClose = () => {
    console.log('closing');
    setOpenAddDialog(false);
  };

  const handleSubmit = () => {
    BackendCall.post(`/admin/colour/add`, dataToServer)
      .then((response) => {
        console.log(response.data);
        handleClose();
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          window.location.href = '/admin/login';
        }
      });
  };

  return (
    <div>
      <Dialog open={openAddDialog} onClose={handleClose}>
        <DialogTitle>Edit Colour</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            margin="dense"
            id="code"
            label="Colour Code"
            type="text"
            fullWidth
            variant="standard"
            value={code}
            onChange={(event) => setCode(event.target.value)}
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
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
