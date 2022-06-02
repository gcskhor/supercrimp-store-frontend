import React, { useState } from "react";
import { Button, Box, CardMedia, Grid, TextField } from "@mui/material";
import { BACKEND_URL } from "../../../store";
import axios from "axios";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		axios
			.post(`${BACKEND_URL}/admin/login`, { email: email, password: password })
			.then((response) => {
				// login success
				window.location.href = "/admin";
			})
			.catch((err) => {
				console.log(err.response);
				// display toast
			});
	};

	return (
		<Box>
			<Grid container justifyContent="center">
				<Grid
					item
					xs={10}
					sm={5}
					md={3}
					m={2}
					pt={5}
					justifyContent="center"
					alignItems="flex-start"
				>
					<CardMedia
						component="img"
						image="/images/logos/SUPERCRIMP-logo-black.png"
						alt=""
						xs={12}
					/>
					<Box justifyContent="center"></Box>
					<TextField
						label="Email Address"
						placeholder="admin@supercrimp.com"
						variant="filled"
						onChange={(event) => {
							setEmail(event.target.value);
						}}
						value={email}
						fullWidth
					/>
					<TextField
						label="Password"
						type="password"
						placeholder="*********"
						variant="filled"
						onChange={(event) => {
							setPassword(event.target.value);
						}}
						value={password}
						fullWidth
					/>
					<Button
						variant="contained"
						onClick={() => {
							handleLogin();
						}}
						fullWidth
					>
						Log In
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}
