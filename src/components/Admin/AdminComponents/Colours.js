import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import BackendCall from '../../../store';
import { ColourContext } from './Colours/ColourContext.js';
import ColoursTable from './Colours/ColoursTable.js';
import EditColourDialog from './Colours/EditColourDialog.js';
import AddColourDialog from './Colours/AddColourDialog.js';
import DeleteColourDialog from './Colours/DeleteColourDialog';

export function reloadColours(setColours) {
  return BackendCall.get('/admin/colours')
    .then((response) => {
      setColours(response.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
}

export default function Colours() {
  const [colours, setColours] = useState([]);
  const [selectedColour, setSelectedColour] = useState(null);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    reloadColours(setColours);
  }, []);
  return (
    <Container maxWidth="lg">
      <ColourContext.Provider
        value={{
          coloursContext: [colours, setColours],
          selectedColourContext: [selectedColour, setSelectedColour],
          openAddDialogContext: [openAddDialog, setOpenAddDialog],
          openEditDialogContext: [openEditDialog, setOpenEditDialog],
          openDeleteDialogContext: [openDeleteDialog, setOpenDeleteDialog],
        }}
      >
        <Typography variant="h4" fontWeight="bold" pb={3}>
          Colours
        </Typography>{' '}
        <ColoursTable />
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            setOpenAddDialog(true);
          }}
          sx={{ mt: 3 }}
        >
          Add Colour
        </Button>
        {openAddDialog && <AddColourDialog />}
        {openEditDialog && selectedColour && <EditColourDialog />}
        {openDeleteDialog && selectedColour && <DeleteColourDialog />}
      </ColourContext.Provider>
    </Container>
  );
}
