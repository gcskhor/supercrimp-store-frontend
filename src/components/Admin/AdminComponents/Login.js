import React, { useState } from "react";
import { Button, Box, CardMedia, TextField } from "@mui/material";
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
      <Box component="form" sx={{ width: "400px", height: "1000px", m: 5 }}>
        <CardMedia
          component="img"
          image="/images/logos/SUPERCRIMP-logo-black.png"
          alt=""
        />
        <h2>Admin Login</h2>
        <TextField
          label="Email Address"
          placeholder="admin@supercrimp.com"
          variant="filled"
          fullWidth
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="*********"
          variant="filled"
          fullWidth
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />

        <Button
          fullWidth
          variant="contained"
          // component={Link}
          // to={`/admin`}
          onClick={() => {
            handleLogin();
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
}
