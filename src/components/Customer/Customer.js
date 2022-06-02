import { Outlet } from "react-router-dom";

import { InventoryContextProvider } from "./InventoryContext.js";
import { CartContextProvider } from "./CartContext.js";
import { SnackbarContextProvider } from "../SnackbarContext.js";
import Navbar from "./Navbar/Navbar.js";
import Snackbars from "../Snackbars.js";

function Customer() {
	return (
		<InventoryContextProvider>
			<CartContextProvider>
				<SnackbarContextProvider>
					<Navbar />
					<Outlet />
					<Snackbars />
				</SnackbarContextProvider>
			</CartContextProvider>
		</InventoryContextProvider>
	);
}

export default Customer;
