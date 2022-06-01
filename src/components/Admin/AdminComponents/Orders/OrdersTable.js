import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { Box, List, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { OrdersContext } from "./OrdersContext";
import OrdersProductCell from "./OrdersProductCell";
import OrderDialog from "./OrderDialog";
import axios from "axios";
import { BACKEND_URL } from "../../../../store.js";

export default function OrdersTable({ type }) {
  const { pendingOrdersContext, completedOrdersContext } =
    useContext(OrdersContext);
  let orderContext;
  const [selectedOrder, setSelectedOrder] = useState();

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

  const [orders, setOrders] = orderContext;
  const [ordersRows, setOrdersRows] = useState([]);
  let ordersGist;

  useEffect(() => {
    if (orders.length > 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ordersGist = orders.map((order) => {
        return {
          id: order.id,
          complete: order.complete,
          createdAt: moment(order.createdAt).fromNow(),
          user: order.user.name,
          products: order.products,
        };
      });
      setOrdersRows(ordersGist);
    }
  }, [orders]);

  const handleOnCellClick = (params) => {
    setSelectedOrder(params);
    console.log(params);
  };

  const handleCompletedClick = (event, cellData) => {
    console.log("completing");
    console.log(cellData);
    axios
      .post(`${BACKEND_URL}/admin/order/completed`, cellData)
      .then((response) => {
        window.location.reload(); // replace when solution is found
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePendingClick = (event, cellData) => {
    console.log("to pending");
    console.log(cellData);
    axios
      .post(`${BACKEND_URL}/admin/order/to_pending`, cellData)
      .then((response) => {
        window.location.reload(); // replace when solution is found
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 75 },
    {
      field: "products",
      headerName: "Products",
      width: 300,
      renderCell: (params) => (
        <div>
          <List>
            {params.row.products.map((purchase, index) => {
              return <OrdersProductCell purchase={purchase} key={index} />;
            })}
          </List>
        </div>
      ),
    },
    {
      field: "user",
      headerName: "Customer Name",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "complete",
      headerName: "Complete",
      align: "center",
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <Box>
            {type === "pending" && (
              <IconButton
                aria-label="edit"
                variant="contained"
                color="primary"
                onClick={(event) => {
                  handleCompletedClick(event, cellValues.row);
                }}
              >
                <DoneIcon />
              </IconButton>
            )}
            {type === "completed" && (
              <IconButton
                aria-label="edit"
                variant="contained"
                color="primary"
                onClick={(event) => {
                  handlePendingClick(event, cellValues.row);
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Box>
        );
      },
    },
  ];

  return ordersRows.length > 0 ? (
    <Box style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={ordersRows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        rowHeight={100}
        autoPageSize
        pagination
        onCellClick={handleOnCellClick}
        initialState={{
          sorting: {
            sortModel: [{ field: "id", sort: "asc" }],
          },
        }}
      />
      {selectedOrder && (
        <OrderDialog
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      )}
    </Box>
  ) : (
    <Box>No orders available.</Box>
  );
}
