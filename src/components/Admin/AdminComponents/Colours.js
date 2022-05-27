import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { BACKEND_URL } from "../../../store";
import ColoursTable from "./Colours/ColoursTable.js";
import EditColourDialog from "./Colours/EditColourDialog.js";
import { ColourContext } from "./Colours/ColourContext.js";

export default function Colours() {
  const [colours, setColours] = useState([]);
  const [selectedColour, setSelectedColour] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/admin/colours`)
      .then((response) => {
        setColours(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box>
      <ColourContext.Provider
        value={{
          coloursContext: [colours, setColours],
          selectedColourContext: [selectedColour, setSelectedColour],
          openEditDialogContext: [openEditDialog, setOpenEditDialog],
          openDeleteDialogContext: [openDeleteDialog, setOpenDeleteDialog],
        }}
      >
        <ColoursTable />
        {openEditDialog && selectedColour && <EditColourDialog />}
      </ColourContext.Provider>
    </Box>
  );
}
