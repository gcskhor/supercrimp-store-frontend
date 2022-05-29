import axios from "axios";
import React, { useEffect, useState } from "react";
import OrdersAccordion from "./Orders/OrdersAccordion.js";
import { OrdersContext } from "./Orders/OrdersContext.js";
import { BACKEND_URL } from "../../../store.js";

export const loadOrders = async (type, setter) => {
  return axios
    .get(`${BACKEND_URL}/admin/orders/${type}`)
    .then((response) => {
      setter(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function Orders() {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    Promise.all([
      loadOrders("pending", setPendingOrders),
      loadOrders("completed", setCompletedOrders),
    ]);
  }, []);

  return (
    <div>
      <OrdersContext.Provider
        value={{
          pendingOrdersContext: [pendingOrders, setPendingOrders],
          completedOrdersContext: [completedOrders, setCompletedOrders],
          orderTypesContext: [setPendingOrders, setCompletedOrders],
        }}
      >
        <OrdersAccordion />
      </OrdersContext.Provider>
    </div>
  );
}
