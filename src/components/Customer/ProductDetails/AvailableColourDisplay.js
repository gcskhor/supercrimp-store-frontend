import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Typography, Checkbox, Tooltip } from "@mui/material";
import { SquareRounded, DisabledByDefaultRounded } from "@mui/icons-material";
import { BACKEND_URL } from "../../../store.js";

export default function AvailableColourDisplay({
	productDetails,
	selectedColour,
	setSelectedColour,
}) {
	// retrieves all available colours & compares product colours vs available colours
	// eg if red, black and yellow are available, but this product only has red and black, should show all 3 colours but with yellow disabled

	const [availableColours, setAvailableColours] = useState([]);
	const { id: productId, colours } = productDetails;
	const productColours = colours.map((colour) => colour.id);

	useEffect(() => {
		axios.get(`${BACKEND_URL}/colours`).then((response) => {
			setAvailableColours(response.data);
		});
	}, []);

	const updateSelectedColour = (e) => {
		const clickedColourName = e.target.value;
		const clickedColour = availableColours.filter(
			(colour) => colour.name === clickedColourName
		)[0];
		clickedColour === selectedColour
			? setSelectedColour(null) // unselect colour
			: setSelectedColour(clickedColour); // set as selected colour
	};

	function AvailableColours() {
		return availableColours.map((colour) => {
			const key = `${productId}-${colour.name}`;
			const checkboxStyle = {
				px: 1,
				color: colour.code,
				"&.Mui-checked": { color: colour.code },
			};
			const isAvailable = productColours.includes(colour.id);

			// note: dont remove <span>
			// without it, tooltip won't show when checkbox is disabled
			return (
				<Tooltip title={colour.name} key={key}>
					<span>
						<Checkbox
							icon={
								isAvailable ? <SquareRounded /> : <DisabledByDefaultRounded />
							}
							sx={checkboxStyle}
							value={colour.name}
							checked={colour.name === selectedColour?.name}
							onChange={updateSelectedColour}
							disabled={!isAvailable}
						/>
					</span>
				</Tooltip>
			);
		});
	}

	return (
		<Box mt={2}>
			<Typography variant="body1" color="text.secondary">
				{selectedColour
					? `Available colours (selected: ${selectedColour.name})`
					: "Available colours (click to select)"}
			</Typography>
			<AvailableColours />
		</Box>
	);
}
