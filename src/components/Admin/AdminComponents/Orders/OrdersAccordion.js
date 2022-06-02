import React from "react";
import {
	Stack,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OrdersTable from "./OrdersTable.js";

export default function OrdersAccordion() {
	return (
		<Stack spacing={3}>
			<Accordion defaultExpanded={true} sx={{ boxShadow: 3 }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h5">Pending Orders</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<OrdersTable type="pending" />
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ boxShadow: 3 }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h5">Completed Orders</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<OrdersTable type="completed" />
				</AccordionDetails>
			</Accordion>
		</Stack>
	);
}
