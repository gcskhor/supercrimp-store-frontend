import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Customer from "./components/Customer/Customer.js";
import Home from "./components/Customer/Home.js";
import Product from "./components/Customer/Product.js";
import Cart from "./components/Customer/Cart.js";

import Admin from "./components/Admin/Admin.js";
import Products from "./components/Admin/AdminComponents/Products.js";
import AddProduct from "./components/Admin/AdminComponents/Products/AddProduct.js";
import EditProduct from "./components/Admin/AdminComponents/Products/EditProduct.js";
import Colours from "./components/Admin/AdminComponents/Colours.js";
import Checkout from "./components/Customer/Checkout.js";
import OrderSuccess from "./components/Customer/OrderSuccess.js";
import Login from "./components/Admin/AdminComponents/Login.js";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Customer />}>
					<Route index element={<Home />} />
					<Route path="product/:productId" element={<Product />} />
					<Route path="cart" element={<Cart />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="order/:orderId" element={<OrderSuccess />} />
					<Route
						path="*"
						element={
							<main>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
				<Route path="/admin/login" element={<Login />} />
				<Route path="/admin" element={<Admin />}>
					<Route path="products" element={<Products />} />
					<Route path="product">
						<Route path="add" element={<AddProduct />} />
						<Route path=":productId/edit" element={<EditProduct />} />
					</Route>
					<Route path="colours" element={<Colours />} />
					<Route
						path="*"
						element={
							<main>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
