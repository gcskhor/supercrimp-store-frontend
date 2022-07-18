import React, { useState } from 'react';
import { Button, CardMedia, TextField, Stack } from '@mui/material';
import { BackendCall } from '../../../store';
import { useSnackbarContext } from '../../SnackbarContext.js';
import { Container } from '@mui/system';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { enableSnackBar } = useSnackbarContext();

  const handleLogin = () => {
    // process.env.NODE_ENV === 'production'
    //   ? axios
    //       .post(`/api/admin/login`, {
    //         email: email,
    //         password: password,
    //       })
    //       .then((response) => {
    //         // login success
    //         enableSnackBar('Successful login')();
    //         window.location.href = '/admin';
    //       })
    //       .catch((err) => {
    //         console.log(err.response);
    //         enableSnackBar('Login failed')();
    //       })
    //   :
    BackendCall.post(`/admin/login`, {
      email: email,
      password: password,
    })
      .then((response) => {
        // login success
        enableSnackBar('Successful login')();
        window.location.href = '/admin';
      })
      .catch((err) => {
        console.log(err.response);
        enableSnackBar('Login failed')();
      });
  };

  return (
    <Container maxWidth="xs">
      <Stack spacing={2} sx={{ height: '100vh', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          image="/images/logos/SUPERCRIMP-logo-black.png"
          alt=""
        />
        <TextField
          label="Email Address"
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
      </Stack>
    </Container>
  );
}
