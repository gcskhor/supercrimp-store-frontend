import React, { useContext, useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { ColourContext } from "./ColourContext.js";
import axios from "axios";
import { BACKEND_URL } from "../../../../store.js";

export default function EditColourDialog() {
  const { openEditDialogContext, selectedColourContext } =
    useContext(ColourContext);
  const [openEditDialog, setOpenEditDialog] = openEditDialogContext;
  const [selectedColour, setSelectedColour] = selectedColourContext;
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    setName(selectedColour.name);
    setCode(selectedColour.code);
    setAvailable(selectedColour.available);
  }, [selectedColour]);

  const dataToServer = {
    name: name,
    code: code,
    available: available,
  };

  const handleSubmit = () => {
    axios
      .post(`${BACKEND_URL}/${selectedColour.id}/edit`, dataToServer)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setOpenEditDialog(false);
    setSelectedColour(null);
  };

  return (
    <div>
      <Dialog open={openEditDialog} onClose={handleClose}>
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
            value={selectedColour.name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="code"
            label="Colour Code"
            type="text"
            fullWidth
            variant="standard"
            value={selectedColour.code}
            onChange={(event) => setCode(event.target.value)}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  label="Available"
                  labelplacement="start"
                  checked={selectedColour.available}
                  onChange={(event) => setAvailable(event.target.checked)}
                />
              }
              label="Available"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
