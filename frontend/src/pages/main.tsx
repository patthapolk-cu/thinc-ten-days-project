import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.tsx";
import Home from "./home.tsx";
import ProductList from "./productlist.tsx";
import Profile from "./profile.tsx";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./favorite.tsx";
import Cart from "./cart.tsx";
import Payment from "./payment.tsx";
import ProductDetail from "./productDetail.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product/*" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
