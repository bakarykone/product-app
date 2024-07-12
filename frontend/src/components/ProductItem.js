import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <ListItem button component={Link} to={`/product/${product._id}`}>
      <ListItemText primary={product.name} secondary={`Price: $${product.price}`} />
    </ListItem>
  );
};

export default ProductItem;
