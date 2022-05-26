import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Customer/Home.js";
import Product from "./components/Customer/Product.js";

import Admin from "./components/Admin/Admin.js";
import Products from "./components/Admin/AdminComponents/Products.js";
import Colours from "./components/Admin/AdminComponents/Colours.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="product/:productId" element={<Product />} />
				{/* <Route
					path="cart"
					element={<INSERT-CART-COMPONENT-HERE />}
				/> */}
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
				{/* <Route
					path="product"
					element={<INSERT-ADMIN-PRODUCTS-COMPONENT-HERE />}
				>
					<Route
						path="add"
						element={<INSERT-ADMIN-ADD-PRODUCT-COMPONENT-HERE />}
					/>
					<Route
						path=":productId/edit"
						element={<INSERT-ADMIN-EDIT-PRODUCT-COMPONENT-HERE />}
					/>
				</Route> */}
				<Route path="colours" element={<Colours />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
