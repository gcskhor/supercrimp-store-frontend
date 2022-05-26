import "./App.css";
import { Outlet } from "react-router-dom";

import { CartContextProvider } from "./components/Customer/CartContext.js";
import Navbar from "./components/Customer/Navbar/Navbar.js";

function App() {
	return (
		<CartContextProvider>
			<Navbar />
			<Outlet />
		</CartContextProvider>
	);
}

export default App;
