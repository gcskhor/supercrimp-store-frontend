import React, { useState } from "react";
import axios from "axios";
import {
	Toolbar,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import { Link } from "react-router-dom";

import { BACKEND_URL } from "../../../../../store.js";

import LogoutDialog from "../../Logout/LogoutDialog.js";

export default function LeftDrawerContents() {
	const [showLogoutDialog, setShowLogoutDialog] = useState(false);

	const handleLogout = () => {
		// axios
		// 	.post(`${BACKEND_URL}/admin/logout`)
		// 	.then((response) => {
		// 		console.log(response);
		// 		console.log("cleared cookies");
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
		setShowLogoutDialog(true);
	};

	return (
		<div>
			<Toolbar />
			<Divider />
			<List>
				<ListItem
					key="admin-home-leftdrawer"
					component={Link}
					to="/admin"
					sx={{ color: "black" }}
					disablePadding
				>
					<ListItemButton>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItemButton>
				</ListItem>

				<ListItem
					key="admin-products-leftdrawer"
					component={Link}
					to="/admin/products"
					sx={{ color: "black" }}
					disablePadding
				>
					<ListItemButton>
						<ListItemIcon>
							<CategoryIcon />
						</ListItemIcon>
						<ListItemText primary="Products" />
					</ListItemButton>
				</ListItem>

				<ListItem
					key="admin-colours-leftdrawer"
					component={Link}
					to="/admin/colours"
					sx={{ color: "black" }}
					disablePadding
				>
					<ListItemButton>
						<ListItemIcon>
							<ColorLensIcon />
						</ListItemIcon>
						<ListItemText primary="Colours" />
					</ListItemButton>
				</ListItem>

				<Divider />

				<ListItem
					key="admin-logout-leftdrawer"
					// component={Link}
					// to="/admin/login"
					sx={{ color: "black" }}
					disablePadding
					onClick={handleLogout}
				>
					<ListItemButton>
						<ListItemIcon>
							<MeetingRoomIcon />
						</ListItemIcon>
						<ListItemText primary="Log Out" />
					</ListItemButton>
				</ListItem>
			</List>
			{showLogoutDialog && (
				<LogoutDialog
					setShowLogoutDialog={setShowLogoutDialog}
					showLogoutDialog={showLogoutDialog}
				/>
			)}
		</div>
	);
}
