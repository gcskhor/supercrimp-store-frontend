import React, { useState, useContext, useEffect } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
} from "@mui/material";
import { ColourContext } from "./ColourContext.js";
import { useSnackbarContext } from "../../../SnackbarContext.js";
import { reloadColours } from "../Colours.js";
import { BACKEND_URL } from "../../../../store.js";
import axios from "axios";

export default function DeleteColourDialog() {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const { openDeleteDialogContext, coloursContext, selectedColourContext } =
		useContext(ColourContext);
	const [selectedColour] = selectedColourContext;
	const [openDeleteDialog, setOpenDeleteDialog] = openDeleteDialogContext;
	const [, setColours] = coloursContext;
	const { enableSnackBar } = useSnackbarContext();

	useEffect(() => {
		setId(selectedColour.id);
		setName(selectedColour.name);
		return () => {
			reloadColours(setColours, BACKEND_URL);
		};
	}, [selectedColour.id, selectedColour.name, setColours]);

	const dataToServer = {
		id: id,
	};

	const handleClose = () => {
		console.log("closing");
		setOpenDeleteDialog(false);
	};

	const handleDelete = () => {
		axios
			.post(`${BACKEND_URL}/admin/colour/delete`, dataToServer)
			.then((response) => {
				console.log(response.data);
				handleClose();
				enableSnackBar("Colour deleted")();
			})
			.catch((err) => {
				console.log(err);
				enableSnackBar(err.response.data)();
			});
	};

	return (
		<div>
			<Dialog open={openDeleteDialog} onClose={handleClose}>
				<DialogTitle>Delete Colour</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Are you sure you would like to delete <em>{name}</em>?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleDelete}>Delete</Button>
					<Button onClick={handleClose}>Back</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
