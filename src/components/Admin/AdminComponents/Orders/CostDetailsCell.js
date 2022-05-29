import React from "react";
import { Typography } from "@mui/material";

export default function CostDetailsCell({ totalCost, deliveryFee }) {
  return (
    <div>
      <Typography sx={{ display: "block" }} variant="body2" paddingX={2}>
        Total Order Cost: ${totalCost}
      </Typography>
      <Typography sx={{ display: "block" }} variant="body2" paddingX={2}>
        Delivery Fee: ${deliveryFee}
      </Typography>
    </div>
  );
}
