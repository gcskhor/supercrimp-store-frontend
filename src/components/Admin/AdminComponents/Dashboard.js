import React, { useState } from "react";

import { useOutlet } from "react-router-dom";

import { Box, CssBaseline, Toolbar } from "@mui/material";

import TopAppBar from "./Dashboard/TopAppBar.js";
import Drawers from "./Dashboard/Drawers.js";
import Orders from "./Orders.js";

const drawerWidth = 240;

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const outlet = useOutlet();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <TopAppBar handleDrawerToggle={handleDrawerToggle} />

      <Drawers
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
      />

      {/* CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>{outlet || <Orders />}</Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
