import { Container, Typography, Button, Stack } from "@mui/material";
import { useState } from "react";

import CartDetails from "./CartDetails/CartDetails.js";
import CheckoutDetails from "./UserDetailsForm/UserDetailsForm.js";

export default function Checkout() {
	const emptyUserDetails = {
		name: "",
		email: "",
		password: "",
		repeatPassword: "",
		phone: "",
		addressLine1: "",
		addressLine2: "",
		postalCode: "",
	};

	const noInputErrors = {
		name: false,
		email: false,
		password: false,
		requiredPassword: false,
		phone: false,
		addressLine1: false,
		postalCode: false,
	};

	const [userDetails, setUserDetails] = useState(emptyUserDetails);
	const [inputError, setInputError] = useState(noInputErrors);

	const isFormValid = () => {
		return !(
			userDetails.name === "" &&
			userDetails.email === "" &&
			userDetails.phone === "" &&
			userDetails.addressLine1 === "" &&
			userDetails.postalCode === ""
		);
	};

	const handleCheckout = () => {
		if (isFormValid()) {
			console.log("valid form");
			localStorage.setItem("userDetails", JSON.stringify(userDetails));
			console.log(localStorage);
		}
	};

	return (
		<Container maxWidth="md">
			<Typography py={3} variant="h3">
				Checkout
			</Typography>
			<Typography
				variant="button"
				fontSize="large"
				fontWeight="bold"
				display="block"
				mb={3}
				px={1}
				id="user-details"
			>
				User Details
			</Typography>
			<CheckoutDetails
				userDetails={userDetails}
				setUserDetails={setUserDetails}
				inputError={inputError}
				setInputError={setInputError}
			/>
			<Typography
				variant="button"
				fontSize="large"
				fontWeight="bold"
				display="block"
				mb={3}
				px={1}
			>
				Review your cart
			</Typography>
			<CartDetails />
			<Stack
				direction={{ xs: "column", sm: "row" }}
				justifyContent="space-between"
				spacing={2}
				sx={{ mb: 5 }}
			>
				<Button variant="outlined" size="small" href="/cart">
					Back to cart
				</Button>
				<Button variant="contained" onClick={handleCheckout}>
					Proceed to payment gateway
				</Button>
			</Stack>
		</Container>
	);
}
