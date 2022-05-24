import React from "react";
import { Drawer } from "@mui/material";
import LeftDrawerContents from "./LeftDrawerContents.js";

export default function DrawerPerm({ drawerWidth }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      open
    >
      <LeftDrawerContents />
    </Drawer>
  );
}
