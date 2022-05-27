import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Box, Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ColourContext } from "./ColourContext.js";

export default function ColoursTable() {
  const { coloursContext, openEditDialogContext, selectedColourContext } =
    useContext(ColourContext);
  const [colours, setColours] = coloursContext;
  const [selectedColour, setSelectedColour] = selectedColourContext;

  const [openEditDialog, setOpenEditDialog] = openEditDialogContext;

  const handleClickEdit = (event, colour) => {
    console.log(colour);
    setOpenEditDialog(true);
    setSelectedColour(colour);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "code", headerName: "Colour Code", width: 150 },
    {
      field: "available",
      headerName: "Available",
      renderCell: (cellValues) => {
        return (
          <Box>
            <Checkbox disabled checked={cellValues.row.available} />
          </Box>
        );
      },
    },
    {
      field: "buttons",
      headerName: "Actions",
      renderCell: (cellValues) => {
        return (
          <Box>
            <IconButton
              aria-label="edit"
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClickEdit(event, cellValues.row);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              variant="contained"
              color="primary"
              onClick={(event) => {
                // handleClickDelete(event, cellValues);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
      width: 160,
    },
  ];
  return (
    <Box style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={colours}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[7]}
      />
    </Box>
  );
}
