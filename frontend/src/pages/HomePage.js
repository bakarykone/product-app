import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts, createProduct } from "../actions/actions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Container,
  Box,
  TextField,
} from "@mui/material";

import { toast } from "react-toastify";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = async (formData) => {
    try {
      await dispatch(createProduct(formData));
      toast.success("Produit ajouté avec succès!");
      handleClose();
    } catch (error) {
      toast.error("échec lors de la création du produit");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Liste de Produits</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Ajouter un Produit
        </Button>
      </Box>
      <TextField
        fullWidth
        label="Rechercher un produit par son nom"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 2 }}
      />
      <ProductList products={filteredProducts} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajouter un Produit</DialogTitle>
        <DialogContent>
          <ProductForm onSubmit={handleFormSubmit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
export default HomePage;
