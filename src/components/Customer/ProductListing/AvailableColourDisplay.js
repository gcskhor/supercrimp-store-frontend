import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Typography, Checkbox, Tooltip } from "@mui/material";
import { SquareRounded } from "@mui/icons-material";
import { BACKEND_URL } from "../../../store.js";

export default function AvailableColourDisplay({
	productId,
	productColours,
	selectedColour,
	setSelectedColour,
}) {
	// retrieves all available colours & compares product colours vs available colours
	// eg if red, black and yellow are available, but this product only has red and black, should show all 3 colours but with yellow disabled

	const [availableColours, setAvailableColours] = useState([]);

	useEffect(() => {
		axios.get(`${BACKEND_URL}/colours`).then((response) => {
			setAvailableColours(response.data);
		});
	}, []);

	const updateSelectedColour = (e) => {
		const clickedColour = e.target.value;
		clickedColour === selectedColour
			? setSelectedColour(null) // unselect colour
			: setSelectedColour(clickedColour); // set as selected colour
	};

	function AvailableColours() {
		return availableColours.map((colour) => {
			return (
				<Tooltip title={colour.name} key={`${productId}-${colour.name}`}>
					<span>
						<Checkbox
							value={colour.name}
							checked={colour.name === selectedColour}
							onChange={updateSelectedColour}
							icon={<SquareRounded />}
							disabled={!productColours.includes(colour.id)}
							sx={{
								px: 1,
								color: colour.code,
								"&.Mui-checked": {
									color: colour.code,
								},
							}}
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
					? `Available colours (selected: ${selectedColour})`
					: "Available colours (click to select)"}
			</Typography>
			<AvailableColours />
		</Box>
	);
}
