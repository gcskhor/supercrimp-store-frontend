import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DataTable({ products }) {
  const handleClickEdit = (event, cellValues) => {
    console.log(cellValues.row);
  };

  const handleClickDelete = (event, cellValues) => {
    console.log(cellValues.row);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "currentPrice", headerName: "Current Price", width: 130 },
    {
      field: "usualPrice",
      headerName: "Usual Price",
      type: "number",
      width: 130,
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
                handleClickEdit(event, cellValues);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClickDelete(event, cellValues);
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
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
