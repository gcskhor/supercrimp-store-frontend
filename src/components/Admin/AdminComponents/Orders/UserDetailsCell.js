import React from "react";
import { Typography } from "@mui/material";

export default function UserDetailsCell({ user }) {
  return (
    <div>
      <Typography sx={{ display: "block" }} variant="body2" paddingX={2}>
        {user.name}
      </Typography>
      <Typography sx={{ display: "block" }} variant="body2" paddingX={2}>
        {user.email}
      </Typography>
      <Typography sx={{ display: "block" }} variant="body2" paddingX={2}>
        {user.phone}
      </Typography>
      <Typography sx={{ display: "block" }} variant="body2" paddingX={2}>
        {user.addressLine1}
      </Typography>
      <Typography sx={{ display: "block" }} variant="body2" paddingX={2}>
        {user.addressLine2}
      </Typography>
      <Typography sx={{ display: "block" }} variant="body2" paddingX={2}>
        {user.postalCode}
      </Typography>
    </div>
  );
}
