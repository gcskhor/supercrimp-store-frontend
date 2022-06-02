import React, { useContext } from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
//F9F0E2
const theme = createTheme({
	palette: {
		primary: {
			main: "#18378C", // dark blue
		},
		secondary: {
			main: "#C46308", // dark orange
		},
		error: {
			main: "#BC1010", // dark red
		},
		warning: {
			main: "#F5B841", // yellow-orange
		},
		info: {
			main: "#0E3F4D", // dark teal
		},
		success: {
			main: "#548C76", // dull green
		},
	},
});

const ThemeContext = React.createContext();

export function useThemeContext() {
	return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
