import { useState } from "react";
import { List, ListItem, ListItemText, Menu, MenuItem } from "@mui/material";
import { useInventoryContext } from "../InventoryContext.js";
import { useCartContext } from "../CartContext.js";

export default function EditItemColour({
	item,
	selectedColour,
	setSelectedColour,
}) {
	const { availableColours } = useInventoryContext();
	const {
		cartDispatch,
		dispatchHelpers: [, , editItemColour],
	} = useCartContext();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClickListItem = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (event, colour) => {
		setSelectedColour(colour);
		cartDispatch(editItemColour(item.productId, item.colourId, colour));
		setAnchorEl(null);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<List>
				<ListItem button onClick={handleClickListItem} sx={{ p: 0 }}>
					<ListItemText
						primary={selectedColour?.name}
						primaryTypographyProps={{ variant: "button" }}
						secondary="Click to change colour"
					/>
				</ListItem>
			</List>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				{availableColours.map((colour) => (
					<MenuItem
						key={`${item.productId}-${colour.name}`}
						selected={colour.id === selectedColour.id}
						onClick={(event) => handleMenuItemClick(event, colour)}
					>
						{colour.name}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}