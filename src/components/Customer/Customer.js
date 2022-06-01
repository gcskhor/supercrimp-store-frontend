import { Outlet } from "react-router-dom";

import { InventoryContextProvider } from "./InventoryContext.js";
import { CartContextProvider } from "./CartContext.js";
import Navbar from "./Navbar/Navbar.js";

function Customer() {
	return (
		<InventoryContextProvider>
			<CartContextProvider>
				<Navbar />
				<Outlet />
			</CartContextProvider>
		</InventoryContextProvider>
	);
}

export default Customer;
