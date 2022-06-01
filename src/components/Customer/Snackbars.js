import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbarContext } from "./SnackbarContext.js";

export default function Snackbars() {
	const {
		snackPackContext,
		snackPackOpenContext,
		snackPackMessageInfoContext,
		enableSnackBar,
	} = useSnackbarContext();

	const [snackPack, setSnackPack] = snackPackContext;
	const [snackPackOpen, setSnackPackOpen] = snackPackOpenContext;
	const [snackPackMessageInfo, setSnackPackMessageInfo] =
		snackPackMessageInfoContext;

	useEffect(() => {
		if (snackPack.length && !snackPackMessageInfo) {
			// Set a new snack when we don't have an active one
			setSnackPackMessageInfo({ ...snackPack[0] });
			setSnackPack((prev) => prev.slice(1));
			setSnackPackOpen(true);
		} else if (snackPack.length && snackPackMessageInfo && snackPackOpen) {
			// Close an active snack when a new one is added
			setSnackPackOpen(false);
		}
	}, [snackPack, snackPackMessageInfo, snackPackOpen]);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setSnackPackOpen(false);
	};

	const handleExited = () => {
		setSnackPackMessageInfo(undefined);
	};

	return (
		<div>
			<Snackbar
				key={snackPackMessageInfo ? snackPackMessageInfo.key : undefined}
				open={snackPackOpen}
				autoHideDuration={3000}
				onClose={handleClose}
				TransitionProps={{ onExited: handleExited }}
				message={
					snackPackMessageInfo ? snackPackMessageInfo.message : undefined
				}
				action={
					<>
						<IconButton
							aria-label="close"
							color="inherit"
							sx={{ p: 0.5 }}
							onClick={handleClose}
						>
							<CloseIcon />
						</IconButton>
					</>
				}
			/>
		</div>
	);
}
