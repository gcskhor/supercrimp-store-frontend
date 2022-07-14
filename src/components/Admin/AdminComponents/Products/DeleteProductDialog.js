import React, { useState, useEffect } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
} from "@mui/material";
import { BACKEND_URL } from "../../../../store.js";
import axios from "axios";
import { reloadProducts } from "../Products.js";
import { useSnackbarContext } from "../../../SnackbarContext.js";

export default function DeleteProductDialog({
	openDeleteProductDialog,
	setOpenDeleteProductDialog,
	selectedProduct,
	setProducts,
}) {
	const [id, setId] = useState("");
	const [name, setName] = useState("");

	const { enableSnackBar } = useSnackbarContext();

	useEffect(() => {
		setId(selectedProduct.id);
		setName(selectedProduct.name);
		return () => {
			reloadProducts(setProducts, BACKEND_URL);
		};
	}, []);

	const dataToServer = {
		id: id,
	};

	const handleClose = () => {
		console.log("closing");
		setOpenDeleteProductDialog(false);
	};

	const handleDelete = () => {
		console.log("deleting");
		axios
			.post(`${BACKEND_URL}/admin/product/delete`, dataToServer)
			.then((response) => {
				console.log(response.data);
				handleClose();
				enableSnackBar("Product deleted")();
			})
			.catch((err) => {
				console.log(err);
				enableSnackBar(err.response.data)();
			});
	};

	return (
		<div>
			<Dialog open={openDeleteProductDialog} onClose={handleClose}>
				<DialogTitle>Delete Product</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Are you sure you would like to delete{" "}
						<strong>
							<em>{name}</em>
						</strong>
						?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant="outlined" onClick={handleClose}>
						Back
					</Button>
					<Button variant="contained" color="error" onClick={handleDelete}>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
