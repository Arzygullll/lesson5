import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!name || !lastName || !img) {
      alert("Заполните данные!");
      return;
    }
    let newProduct = {
      name: name,
      lastName: lastName,
      img: img,
    };
    addProduct(newProduct);
    setName("");
    setLastName("");
    setImg("");
    navigate("/");
  };

  return (
    <div>
      <TextField
        onChange={(e) => setName(e.target.value)}
        value={name}
        id="outlined-basic"
        label="name"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        id="outlined-basic"
        label="lastName"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        value={img}
        id="outlined-basic"
        label="img"
        variant="outlined"
      />
      <Button onClick={handleClick} variant="contained">
        Add Product
      </Button>
    </div>
  );
};

export default AddProduct;
