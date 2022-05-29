import validator from "email-validator";
import {
	Card,
	Grid,
	TextField,
	Select,
	FormControl,
	InputLabel,
	FormLabel,
} from "@mui/material";
import { useState } from "react";

export default function UserDetailsForm({
	userDetails,
	setUserDetails,
	inputError,
	setInputError,
}) {
	const handleChange = (e) => {
		validateField(e);
		const { id, value } = e.target;
		setUserDetails({ ...userDetails, [id]: value });
	};

	const validateField = (e) => {
		const { id, value } = e.target;
		switch (id) {
			case "name":
				if (value.length >= 3) {
					setInputError({ ...inputError, [id]: false });
				} else {
					setInputError({ ...inputError, [id]: true });
				}
				break;
			case "email":
				if (validator.validate(value)) {
					setInputError({ ...inputError, [id]: false });
				} else {
					setInputError({ ...inputError, [id]: true });
				}
				break;
			case "phone":
				const num = Number(value);
				if (8000000 < num && num < 100000000) {
					setInputError({ ...inputError, [id]: false });
				} else {
					setInputError({ ...inputError, [id]: true });
				}
				break;
			case "addressLine1":
				if (value.length >= 9) {
					setInputError({ ...inputError, [id]: false });
				} else {
					setInputError({ ...inputError, [id]: true });
				}
				break;
			case "postalCode":
				const postcode = Number(value);
				if (0 < postcode && postcode < 900000) {
					setInputError({ ...inputError, [id]: false });
				} else {
					setInputError({ ...inputError, [id]: true });
				}
				break;
			default:
				break;
		}
	};

	return (
		<Card sx={{ px: 5, pt: 3, pb: 5, mb: 5 }}>
			<Grid container spacing={2}>
				<Grid item container alignItems="center" spacing={2}>
					<Grid item xs={12} sm={4}>
						<FormLabel htmlFor="name">Name</FormLabel>
					</Grid>
					<Grid item xs={12} sm={6} md={5}>
						<TextField
							id="name"
							label="Name"
							value={userDetails.name}
							onChange={handleChange}
							onBlur={validateField}
							error={inputError.name}
							helperText={
								inputError.name && "Please enter your name (min. 3 characters)."
							}
							fullWidth
							required
						/>
					</Grid>
				</Grid>
				<Grid item container alignItems="center" spacing={2}>
					<Grid item xs={12} sm={4}>
						<FormLabel htmlFor="email">Email</FormLabel>
					</Grid>
					<Grid item xs={12} sm={6} md={5}>
						<TextField
							id="email"
							label="Email"
							value={userDetails.email}
							onChange={handleChange}
							onBlur={validateField}
							error={inputError.email}
							helperText={
								inputError.email && "Please enter a valid email address."
							}
							type="email"
							fullWidth
							required
						/>
					</Grid>
				</Grid>
				<Grid item container alignItems="center" spacing={2}>
					<Grid item xs={12} sm={4}>
						<FormLabel htmlFor="password">
							Password (if you would like to create an account)
						</FormLabel>
					</Grid>
					<Grid item xs={12} sm={6} md={5}>
						<TextField
							id="password"
							label="Password"
							onChange={handleChange}
							value={userDetails.password}
							type="password"
							fullWidth
						/>
					</Grid>
				</Grid>
				<Grid item container alignItems="center" spacing={2}>
					<Grid item xs={12} sm={4}>
						<FormLabel htmlFor="repeatPassword">Confirm Password</FormLabel>
					</Grid>
					<Grid item xs={12} sm={6} md={5}>
						<TextField
							id="repeatPassword"
							label="Repeat password"
							onChange={handleChange}
							value={userDetails.repeatPassword}
							type="password"
							fullWidth
						/>
					</Grid>
				</Grid>
				<Grid item container alignItems="center" spacing={2}>
					<Grid item xs={12} sm={4}>
						<FormLabel htmlFor="phone">Mobile Number</FormLabel>
					</Grid>
					<Grid item xs={12} sm={6} md={5}>
						<TextField
							id="phone"
							label="Mobile Number"
							value={userDetails.phone}
							onChange={handleChange}
							onBlur={validateField}
							error={inputError.phone}
							helperText={
								inputError.phone &&
								"Please enter a valid Singapore mobile number."
							}
							type="number"
							fullWidth
							required
						/>
					</Grid>
				</Grid>
				<Grid
					item
					container
					alignItems="base"
					justifyContent="flex-end"
					spacing={2}
				>
					<Grid item xs={12} sm={4} alignSelf="center">
						<FormLabel htmlFor="addressLine1">
							Shipping Address (Currently only within Singapore)
						</FormLabel>
					</Grid>
					<Grid item xs={12} sm={8}>
						<TextField
							id="addressLine1"
							label="Address Line 1"
							value={userDetails.addressLine1}
							onChange={handleChange}
							onBlur={validateField}
							error={inputError.addressLine1}
							helperText={
								inputError.addressLine1 && "Please enter your address."
							}
							fullWidth
							required
						/>
					</Grid>
					<Grid item xs={12} sm={8}>
						<TextField
							id="addressLine2"
							label="Address Line 2"
							onChange={handleChange}
							value={userDetails.addressLine2}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={5}>
						<FormControl fullWidth>
							<InputLabel htmlFor="country">Singapore</InputLabel>
							<Select id="country" value="" disabled></Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField
							id="postalCode"
							label="Postal Code"
							value={userDetails.postalCode}
							onChange={handleChange}
							onBlur={validateField}
							error={inputError.postalCode}
							helperText={
								inputError.postalCode && "Please enter your postal code."
							}
							fullWidth
							required
						/>
					</Grid>
				</Grid>
			</Grid>
		</Card>
	);
}
