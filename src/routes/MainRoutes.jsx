import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import HomePage from "../components/HomePage";
import EditProduct from "../components/EditProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddProduct />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default MainRoutes;
