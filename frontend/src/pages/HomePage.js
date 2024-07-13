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
} from "@mui/material";

import { toast } from "react-toastify";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <Typography variant="h4">Liste de produits</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Ajouter un Produit
        </Button>
      </Box>
      <ProductList products={products} />

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
