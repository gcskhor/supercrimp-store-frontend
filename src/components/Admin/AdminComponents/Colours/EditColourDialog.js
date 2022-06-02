import React, { useContext, useState, useEffect } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	TextField,
	Checkbox,
	FormGroup,
	FormControlLabel,
} from "@mui/material";
import { ColourContext } from "./ColourContext.js";
import { useSnackbarContext } from "../../../SnackbarContext.js";
import axios from "axios";
import { reloadColours } from "../Colours.js";
import { BACKEND_URL } from "../../../../store.js";

export default function EditColourDialog() {
	const { openEditDialogContext, selectedColourContext, coloursContext } =
		useContext(ColourContext);
	const [openEditDialog, setOpenEditDialog] = openEditDialogContext;
	const [, setColours] = coloursContext;
	const [selectedColour, setSelectedColour] = selectedColourContext;
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [code, setCode] = useState("");
	const [available, setAvailable] = useState(false);

	const { enableSnackBar } = useSnackbarContext();

	useEffect(() => {
		setId(selectedColour.id);
		setName(selectedColour.name);
		setCode(selectedColour.code);
		setAvailable(selectedColour.available);

		// reload colours on the colours page on dialog close
		return () => {
			reloadColours(setColours, BACKEND_URL);
		};
	}, [selectedColour, setColours]);

	const dataToServer = {
		id: id,
		name: name,
		code: code,
		available: available,
	};

	const handleSubmit = () => {
		console.log("closing edit dialog");

		axios
			.post(
				`${BACKEND_URL}/admin/colour/${selectedColour.id}/edit`,
				dataToServer
			)
			.then((response) => {
				console.log(response.data);
				setOpenEditDialog(false);
				setSelectedColour(null);
				enableSnackBar("Colour updated")();
			})
			.catch((err) => {
				console.log(err);
				enableSnackBar(err.response.data)();
			});
	};

	const handleClose = () => {
		setOpenEditDialog(false);
		setSelectedColour(null);
	};

	return (
		<div>
			<Dialog
				open={openEditDialog}
				onClose={(event) => {
					handleClose();
				}}
			>
				<DialogTitle>Edit Colour</DialogTitle>
				<DialogContent>
					<TextField
						margin="dense"
						id="name"
						label="Name"
						type="text"
						fullWidth
						variant="standard"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
					<TextField
						margin="dense"
						id="code"
						label="Colour Code"
						type="text"
						fullWidth
						variant="standard"
						value={code}
						onChange={(event) => setCode(event.target.value)}
					/>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									label="Available"
									labelplacement="start"
									checked={available}
									onChange={(event) => setAvailable(event.target.checked)}
								/>
							}
							label="Available"
						/>
					</FormGroup>
				</DialogContent>
				<DialogActions>
					<Button variant="outlined" onClick={handleClose}>
						Close
					</Button>
					<Button variant="contained" onClick={handleSubmit}>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
