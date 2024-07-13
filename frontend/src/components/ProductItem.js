import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../actions/actions";
import { toast } from "react-toastify";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      await dispatch(deleteProduct(product._id));
      toast.success("Produit supprimé avec succès!");
    } catch (error) {
      toast.error("Impossible de supprimer le produit");
    }
  };

  return (
    <ListItem
      button
      component={Link}
      to={`/product/${product._id}`}
      sx={{
        mb: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#f7f7f7",
        borderRadius: 1,
        boxShadow: 7,
        p: 2,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: "background.paper",
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          {product.name}
        </Typography>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <ClearIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </Box>
      <ListItemText
        primary={`Type: ${product.type}`}
        secondary={
          <>
            <Typography component="span" sx={{ color: "text.primary" }}>
              Price: ${product.price.toFixed(2)}
            </Typography>
            <br />
            <Typography component="span" sx={{ color: "text.primary" }}>
              Rating: {product.rating}
            </Typography>
            <br />
            <Typography component="span" sx={{ color: "text.primary" }}>
              Warranty Years: {product.warranty_years}
            </Typography>
            <br />
            <Typography component="span" sx={{ color: "text.primary" }}>
              Available: {product.available ? "Yes" : "No"}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ProductItem;
