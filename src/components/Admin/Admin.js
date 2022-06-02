import Dashboard from "./AdminComponents/Dashboard.js";
import { Outlet } from "react-router-dom";
import { SnackbarContextProvider } from "../SnackbarContext.js";
import Snackbars from "../Snackbars.js";

export default function Admin() {
	return (
		<div>
			<SnackbarContextProvider>
				<Dashboard Outlet={Outlet} />
				<Snackbars />
			</SnackbarContextProvider>
		</div>
	);
}
