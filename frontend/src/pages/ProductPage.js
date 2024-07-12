import React from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const ProductPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Product {id}</h1>
      <ProductForm productId={id} />
    </div>
  );
};

export default ProductPage;
