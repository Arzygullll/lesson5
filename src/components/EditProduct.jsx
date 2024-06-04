import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../context/ProductContextProvider";

const EditProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editProduct } = useContext(productContext);
  const [name, setName] = useState(oneProduct.name);
  const [lastName, setLastName] = useState(oneProduct.lastName);
  const [img, setImg] = useState(oneProduct.img);
  console.log(id);
  useEffect(() => {
    getOneProduct(id);
  }, [id]);
  console.log(oneProduct);
  useEffect(() => {
    setName(oneProduct.name);
    setLastName(oneProduct.lastName);
    setImg(oneProduct.img);
  }, [oneProduct]);

  console.log(oneProduct);

  const navigate = useNavigate();

  const handleClick = () => {
    if (!name || !lastName || !img) {
      alert("Заполните данные!");
      return;
    }
    let editedProduct = {
      name: name,
      lastName: lastName,
      img: img,
    };
    navigate("/");
    editProduct(id, editedProduct);
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
        Save
      </Button>
    </div>
  );
};

export default EditProduct;
