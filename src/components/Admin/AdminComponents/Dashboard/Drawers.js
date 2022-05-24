import React from "react";
import DrawerPerm from "./Drawers/DrawerPerm";
import DrawerTemp from "./Drawers/DrawerTemp";

import { Box } from "@mui/material";

export default function Drawers({
  drawerWidth,
  handleDrawerToggle,
  mobileOpen,
}) {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {/* DRAWER TEMP */}
      <DrawerTemp
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
      />

      {/* DRAWER PERMANENT */}
      <DrawerPerm drawerWidth={drawerWidth} />
    </Box>
  );
}
