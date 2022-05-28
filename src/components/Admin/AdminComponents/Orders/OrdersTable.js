import React, { useContext } from "react";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { OrdersContext } from "./OrdersContext";

export default function OrdersTable({ type }) {
  const { pendingOrdersContext, completedOrdersContext } =
    useContext(OrdersContext);

  let orderContext;
  switch (type) {
    case "pending": {
      orderContext = pendingOrdersContext;
      break;
    }
    case "completed": {
      orderContext = completedOrdersContext;
      break;
    }
    default:
      break;
  }

  const [order, setOrder] = orderContext;

  return (
    <Box style={{ height: 400, width: "100%" }}>
      <DataGrid
        // rows={colours}
        // columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        autoPageSize
        pagination
        initialState={{
          sorting: {
            sortModel: [{ field: "id", sort: "asc" }],
          },
        }}
      />
    </Box>
  );
}
