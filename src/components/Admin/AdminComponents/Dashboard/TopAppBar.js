import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";

const drawerWidth = 240;

export default function TopAppBar({ handleDrawerToggle }) {
  useEffect(() => {
    console.log("opening");
  });
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => {
            handleDrawerToggle();
          }}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          SUPERCRIMP ADMIN
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
