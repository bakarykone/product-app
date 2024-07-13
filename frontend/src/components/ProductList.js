import React from 'react';
import ProductItem from './ProductItem';
import { List } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {products.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
    </List>
  );
};

export default ProductList;
