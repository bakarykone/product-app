import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, updateProduct } from "../actions/actions";
import { TextField, Button, Container, Box, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductForm = ({ productId, onSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: 0,
    rating: 0,
    warranty_years: 0,
    available: false,
  });

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "available" ? value === "true" : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (productId) {
      await dispatch(updateProduct(productId, formData));
      toast.success(`Le produit a bien été modifié`);
      navigate("/");
    } else {
      await onSubmit(formData);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="type"
          label="Type"
          value={formData.type}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="price"
          label="Price"
          value={formData.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          type="number"
          inputProps={{ step: "0.01" }}
        />
        <TextField
          name="rating"
          label="Rating"
          value={formData.rating}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          type="number"
          inputProps={{ min: "0", max: "5", step: "0.1" }}
        />
        <TextField
          name="warranty_years"
          label="Warranty Years"
          value={formData.warranty_years}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          type="number"
        />
        <TextField
          name="available"
          label="Available"
          value={formData.available}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          select
        >
          <MenuItem value={true}>Oui</MenuItem>
          <MenuItem value={false}>Non</MenuItem>
        </TextField>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button type="submit" color="primary" variant="contained">
            {productId ? "Modifier" : "Ajouter"}
          </Button>
          <Button color="secondary" variant="contained" onClick={handleCancel}>
            Annuler
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductForm;
