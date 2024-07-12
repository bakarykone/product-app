import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, updateProduct, createProduct } from '../actions/actions';
import { TextField, Button, Container } from '@mui/material';

const ProductForm = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
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

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (productId) {
      dispatch(updateProduct(productId, formData));
    } else {
      dispatch(createProduct(formData));
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="type"
          label="Type"
          value={formData.type}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="price"
          label="Price"
          value={formData.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="rating"
          label="Rating"
          value={formData.rating}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="warranty_years"
          label="Warranty Years"
          value={formData.warranty_years}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="available"
          label="Available"
          value={formData.available}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" color="primary" variant="contained">
          {productId ? 'Update' : 'Create'}
        </Button>
      </form>
    </Container>
  );
};

export default ProductForm;
