import React, { useState } from "react";

import { Box, CssBaseline, Toolbar } from "@mui/material";

import TopAppBar from "./Dashboard/TopAppBar.js";
import Drawers from "./Dashboard/Drawers.js";

const drawerWidth = 240;

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const content = <Box>content goes in here</Box>;

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
        <Box>{content}</Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
