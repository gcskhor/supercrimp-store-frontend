import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home.js";
import Admin from "./components/Admin/Admin.js";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {/* <Route
					path="product/:productId"
					element={<INSERT-PRODUCT-PAGE-COMPONENT-HERE />}
				/> */}
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
        {/* <Route
					path="products"
					element={<INSERT-ADMIN-PRODUCTS-COMPONENT-HERE />}
				/> */}
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
        {/* <Route
					path="colours"
					element={<INSERT-ADMIN-COLOURS-COMPONENT-HERE />}
				/> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
