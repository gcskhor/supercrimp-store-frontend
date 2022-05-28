import "./App.css";
import { Outlet } from "react-router-dom";

import { InventoryContextProvider } from "./components/Customer/InventoryContext";
import { CartContextProvider } from "./components/Customer/CartContext.js";
import Navbar from "./components/Customer/Navbar/Navbar.js";

function App() {
	return (
		<InventoryContextProvider>
			<CartContextProvider>
				<Navbar />
				<Outlet />
			</CartContextProvider>
		</InventoryContextProvider>
	);
}

export default App;
