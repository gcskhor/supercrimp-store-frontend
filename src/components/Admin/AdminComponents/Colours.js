import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { BACKEND_URL } from "../../../store";
import { ColourContext } from "./Colours/ColourContext.js";
import ColoursTable from "./Colours/ColoursTable.js";
import EditColourDialog from "./Colours/EditColourDialog.js";
import AddColourDialog from "./Colours/AddColourDialog.js";

export function reloadColours(setColours, BACKEND_URL) {
  return axios
    .get(`${BACKEND_URL}/admin/colours`)
    .then((response) => {
      setColours(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function Colours() {
  const [colours, setColours] = useState([]);
  const [selectedColour, setSelectedColour] = useState(null);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    // axios
    //   .get(`${BACKEND_URL}/admin/colours`)
    //   .then((response) => {
    //     setColours(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    reloadColours(setColours, BACKEND_URL);
  }, []);
  return (
    <Box>
      <ColourContext.Provider
        value={{
          coloursContext: [colours, setColours],
          selectedColourContext: [selectedColour, setSelectedColour],
          openAddDialogContext: [openAddDialog, setOpenAddDialog],
          openEditDialogContext: [openEditDialog, setOpenEditDialog],
          openDeleteDialogContext: [openDeleteDialog, setOpenDeleteDialog],
        }}
      >
        <ColoursTable />
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            setOpenAddDialog(true);
          }}
        >
          Add Colour
        </Button>
        {openAddDialog && <AddColourDialog />}
        {openEditDialog && selectedColour && <EditColourDialog />}
      </ColourContext.Provider>
    </Box>
  );
}
