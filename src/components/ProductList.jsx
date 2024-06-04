import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useContext(productContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="productList">
      {products.map((elem) => (
        <ProductCard key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default ProductList;
