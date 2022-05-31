import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { InventoryContextProvider } from "./InventoryContext.js";
import { CartContextProvider } from "./CartContext.js";
import Navbar from "./Navbar/Navbar.js";

function Customer() {
	return (
		<InventoryContextProvider>
			<CartContextProvider>
				<Navbar />
				<Box mt={5}>
					<Outlet />
				</Box>
			</CartContextProvider>
		</InventoryContextProvider>
	);
}

export default Customer;
