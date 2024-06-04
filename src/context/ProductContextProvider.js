import axios from "axios";
import React, { createContext, useState } from "react";
import { API } from "../helpers/const";

export const productContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [oneProduct, setOneProduct] = useState({});
  const [products, setProducts] = useState([]);
  // ! CREATE
  const addProduct = async (product) => {
    await axios.post(API, product);
  };
  //   ! GET
  const getProducts = async () => {
    const { data } = await axios(API);
    setProducts(data);
  };
  // ! DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  // ! GetOneProduct
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
  };
  // ! EDIT
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`);
  };
  const values = {
    addProduct,
    products,
    getProducts,
    deleteProduct,
    getOneProduct,
    oneProduct,
    editProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
