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

export default function LeftDrawer() {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Home", "Products", "Colours"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <CategoryIcon />}
                {index === 2 && <ColorLensIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
}
