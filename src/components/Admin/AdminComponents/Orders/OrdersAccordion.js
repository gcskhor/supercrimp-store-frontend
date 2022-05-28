import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OrdersTable from "./OrdersTable.js";

export default function OrdersAccordion() {
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Pending Orders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Pending orders table goes here</Typography>
          {/* <OrdersTable type="pending" /> */}
          {/* UNCOMMENT ONCE COLUMN AND ROW DATA IS READY */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Completed Orders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>completed orders table goes here</Typography>
          {/* <OrdersTable type="completed" /> */}
          {/* UNCOMMENT ONCE COLUMN AND ROW DATA IS READY */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
