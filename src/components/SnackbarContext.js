import React, { useContext, useState, createContext } from "react";

const SnackbarContext = createContext();

export function useSnackbarContext() {
	return useContext(SnackbarContext);
}

export function SnackbarContextProvider({ children }) {
	const [snackPack, setSnackPack] = useState([]);
	const [snackPackOpen, setSnackPackOpen] = useState(false);
	const [snackPackMessageInfo, setSnackPackMessageInfo] = useState(undefined);

	const enableSnackBar = (message) => () => {
		console.log("enabling snackbar:  " + message);
		setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
	};

	return (
		<SnackbarContext.Provider
			value={{
				snackPackContext: [snackPack, setSnackPack],
				snackPackOpenContext: [snackPackOpen, setSnackPackOpen],
				snackPackMessageInfoContext: [
					snackPackMessageInfo,
					setSnackPackMessageInfo,
				],
				enableSnackBar,
			}}
		>
			{children}
		</SnackbarContext.Provider>
	);
}
