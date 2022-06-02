import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Box, Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ColourContext } from "./ColourContext.js";

export default function ColoursTable() {
	const {
		coloursContext,
		openEditDialogContext,
		selectedColourContext,
		openDeleteDialogContext,
	} = useContext(ColourContext);
	const [colours] = coloursContext;
	const [, setSelectedColour] = selectedColourContext;
	const [, setOpenEditDialog] = openEditDialogContext;
	const [, setOpenDeleteDialog] = openDeleteDialogContext;

	const handleClickEdit = (event, colour) => {
		console.log(colour);
		setOpenEditDialog(true);
		setSelectedColour(colour);
	};

	const handleClickDelete = (event, colour) => {
		setOpenDeleteDialog(true);
		setSelectedColour(colour);
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 75 },
		{ field: "name", headerName: "Name", width: 150 },
		{ field: "code", headerName: "Colour Code", width: 150 },
		{
			field: "available",
			headerName: "Available",
			headerAlign: "center",
			align: "center",
			renderCell: (cellValues) => (
				<Checkbox disabled checked={cellValues.row.available} />
			),
		},
		{
			field: "buttons",
			headerName: "Actions",
			headerAlign: "center",
			align: "center",
			renderCell: (cellValues) => {
				return (
					<Box>
						<IconButton
							aria-label="edit"
							color="primary"
							onClick={(event) => {
								handleClickEdit(event, cellValues.row);
							}}
						>
							<EditIcon />
						</IconButton>
						<IconButton
							aria-label="delete"
							color="error"
							onClick={(event) => {
								handleClickDelete(event, cellValues.row);
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
				rowsPerPageOptions={[10]}
				autoPageSize
				pagination
				initialState={{
					sorting: {
						sortModel: [{ field: "id", sort: "asc" }],
					},
				}}
			/>
		</Box>
	);
}
