import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../actions/actions";
import { CircularProgress, Container, Typography, Box } from "@mui/material";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProduct(id));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, id]);

  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4" component="h1">
          {product ? product.name : 'Product'}
        </Typography>
      </Box>
      <ProductForm productId={id} />
    </Container>
  );
};

export default ProductPage;
