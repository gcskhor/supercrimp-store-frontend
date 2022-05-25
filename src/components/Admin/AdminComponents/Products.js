import axios from "axios";
import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../../../store.js";
import ProductTable from "./Products/ProductTable.js";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/admin/products`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ProductTable products={products} />
    </div>
  );
}
