import { SnackbarContextProvider } from "../../SnackbarContext.js";
import Snackbars from "../../Snackbars.js";
import Login from "./Login.js";

export default function LoginPage() {
	return (
		<SnackbarContextProvider>
			<Login />
			<Snackbars />
		</SnackbarContextProvider>
	);
}
