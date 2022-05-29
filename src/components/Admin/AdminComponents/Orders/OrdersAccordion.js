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
          <OrdersTable type="pending" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Completed Orders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <OrdersTable type="completed" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
