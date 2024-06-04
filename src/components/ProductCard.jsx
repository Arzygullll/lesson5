import { Button } from "@mui/material";
import React, { useContext } from "react";
import { productContext } from "../context/ProductContextProvider";
import { Link } from "react-router-dom";

const ProductCard = ({ name, lastName, img, id }) => {
  const { deleteProduct } = useContext(productContext);
  return (
    <div>
      <img src={img} width={"200px"} />
      <h3>{name}</h3>
      <h4>{lastName}</h4>
      <Button
        onClick={() => deleteProduct(id)}
        variant="contained"
        color="error"
      >
        Delete
      </Button>
      <Link to={`/edit/${id}`}>
        <Button variant="contained">Edit</Button>
      </Link>
    </div>
  );
};

export default ProductCard;
