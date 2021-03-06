import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { BackendCall } from '../../../../store';

export default function LogoutDialog({
  showLogoutDialog,
  setShowLogoutDialog,
}) {
  const handleLogout = () => {
    BackendCall.post(`/admin/logout`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setShowLogoutDialog(false);
  };

  return (
    <div>
      <Dialog
        open={showLogoutDialog}
        onClose={(event) => {
          handleClose();
        }}
      >
        <DialogTitle>Log Out</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="outlined" onClick={handleClose}>
            Back
          </Button>
          <Button
            color="secondary"
            variant="contained"
            component={Link}
            to="/admin/login"
            onClick={handleLogout}
            sx={{ ml: 1 }}
          >
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
