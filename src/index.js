import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Customer/Home.js";
import Product from "./components/Customer/Product.js";
import Cart from "./components/Customer/Cart.js";

import Admin from "./components/Admin/Admin.js";
import Products from "./components/Admin/AdminComponents/Products.js";
import AddProduct from "./components/Admin/AdminComponents/Products/AddProduct.js";
import EditProduct from "./components/Admin/AdminComponents/Products/EditProduct.js";
import Colours from "./components/Admin/AdminComponents/Colours.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="product/:productId" element={<Product />} />
				<Route path="cart" element={<Cart />} />
				{/* <Route
					path="checkout"
					element={<INSERT-CHECKOUT-COMPONENT-HERE />}
				/> */}
				{/* <Route
					path="profile"
					element={<INSERT-PROFILE-COMPONENT-HERE />}
				/> */}
				<Route
					path="*" // TODO: create 404 component to handle this
					element={
						<main>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Route>
			<Route path="/admin" element={<Admin />}>
				{/* <Route path="login" element={<INSERT-ADMIN-LOGIN-COMPONENT-HERE />} /> */}
				<Route path="products" element={<Products />} />
				<Route path="product">
					<Route path="add" element={<AddProduct />} />
					<Route path=":productId/edit" element={<EditProduct />} />
				</Route>
				<Route path="colours" element={<Colours />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
