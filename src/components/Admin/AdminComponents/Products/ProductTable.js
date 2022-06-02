import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Box, Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function ProductTable({
	products,
	setOpenDeleteProductDialog,
	setSelectedProduct,
}) {
	const handleClickDelete = (event, cellValues) => {
		setOpenDeleteProductDialog(true);
		setSelectedProduct(cellValues.row);
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 75 },
		{ field: "name", headerName: "Name", width: 150 },
		{
			field: "currentPrice",
			headerName: "Current Price",
			type: "number",
			width: 130,
		},
		{
			field: "usualPrice",
			headerName: "Usual Price",
			type: "number",
			width: 130,
		},
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
							component={Link}
							to={`/admin/product/${cellValues.row.id}/edit`}
						>
							<EditIcon />
						</IconButton>
						<IconButton
							aria-label="delete"
							color="error"
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
		</div>
	);
}
