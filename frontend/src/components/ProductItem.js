import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Box,
  Typography,
  Rating,
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
      component={Link}
      to={`/product/${product._id}`}
      sx={{
        mb: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={handleDelete}
            sx={{
              right: 100,
              zIndex: 2,
            }}
          >
            <ClearIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </Box>
      <ListItemText
        primary={`Type: ${product.type}`}
        secondary={
          <>
            <Typography component="span" sx={{ color: "text.primary" }}>
              Prix: ${product.price.toFixed(2)}
            </Typography>
            <br />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.primary",
              }}
            >
            <br />
              <Typography component="span" sx={{ color: "text.primary" }}>
                Note: {product.rating}
              </Typography>
              <Rating
                name="read-only"
                value={product.rating}
                precision={0.1}
                readOnly
                sx={{ ml: 1 }}
              />
            </Box>
            <br />
            <Typography component="span" sx={{ color: "text.primary" }}>
              Nombres d'Années de garantie: {product.warranty_years}
            </Typography>
            <br />
            <Typography component="span" sx={{ color: "text.primary" }}>
              Disponible: {product.available ? "Oui" : "Non"}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ProductItem;
