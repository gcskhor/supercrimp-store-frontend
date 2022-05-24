import React from "react";
import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ColorLensIcon from "@mui/icons-material/ColorLens";

import { Link } from "react-router-dom";

export default function LeftDrawerContents() {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem
          key="home"
          component={Link}
          to="/admin"
          sx={{ color: "black" }}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem
          key="products"
          component={Link}
          to="/admin/products"
          sx={{ color: "black" }}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </ListItem>

        <ListItem
          key="colours"
          component={Link}
          to="/admin/colours"
          sx={{ color: "black" }}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <ColorLensIcon />
            </ListItemIcon>
            <ListItemText primary="Colours" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}
