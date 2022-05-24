import React from "react";
import { Drawer } from "@mui/material";
import LeftDrawerContents from "./LeftDrawerContents.js";

export default function DrawerTemp({
  mobileOpen,
  handleDrawerToggle,
  drawerWidth,
}) {
  return (
    <Drawer
      // container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <LeftDrawerContents />
    </Drawer>
  );
}
