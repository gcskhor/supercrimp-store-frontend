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
			main: "#F5CC00", // yellow
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
	typography: {
		fontFamily: "Poppins",
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightBold: 700,
		button: {
			fontWeight: 600,
			letterSpacing: "0.05rem",
		},
	},
});

// ***********************************
//      CUSTOM TYPOGRAPHY STYLES
// ***********************************

// Banner Carousel (on home page)

theme.typography.bannerTitle = {
	fontWeight: 700,
	fontSize: "1.6rem",
	[theme.breakpoints.up("sm")]: {
		fontSize: "2.8rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "3.1rem",
	},
};

theme.typography.bannerSubtitle = {
	fontWeight: 500,
	fontSize: "1.2rem",
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.5rem",
	},
};

// ----------------------------------

// Product Card (on home page)

theme.typography.productCardName = {
	fontSize: "2rem",
	fontWeight: 500,
	"&:hover": {
		color: theme.palette.primary.light,
	},
};

// ----------------------------------

// Product Price
// (used in Product Card and Product Details)

theme.typography.currentPrice = {
	fontSize: "1.4rem",
	fontWeight: 600,
	display: "block",
};

theme.typography.usualPrice = {
	fontSize: "1rem",
	fontWeight: 400,
	display: "block",
};

// ----------------------------------

// Available Colours Title
// (used in Available Colours Display)

theme.typography.availableColoursTitle = {
	fontSize: "0.8rem",
	fontWeight: 400,
	letterSpacing: 0.5,
	textTransform: "uppercase",
	display: "block",
};

// ----------------------------------

// Cart Items

theme.typography.cartItemColour = {
	fontWeight: 400,
	textTransform: "capitalize",
};

theme.typography.cartItemQty = {
	fontSize: "0.95rem",
	lineHeight: 1.75,
};

theme.typography.cartItemEditQtyBtn = {
	color: "primary",
};

const ThemeContext = React.createContext();

export function useThemeContext() {
	return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
