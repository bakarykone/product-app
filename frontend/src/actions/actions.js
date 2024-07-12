import {
    fetchProducts as fetchProductsAPI,
    fetchProduct as fetchProductAPI,
    createProduct as createProductAPI,
    updateProduct as updateProductAPI,
    deleteProduct as deleteProductAPI
  } from '../api/api';
  
  export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
  export const FETCH_PRODUCT = 'FETCH_PRODUCT';
  export const CREATE_PRODUCT = 'CREATE_PRODUCT';
  export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
  export const DELETE_PRODUCT = 'DELETE_PRODUCT';
  
  export const fetchProducts = () => async dispatch => {
    const response = await fetchProductsAPI();
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  };
  
  export const fetchProduct = id => async dispatch => {
    const response = await fetchProductAPI(id);
    dispatch({ type: FETCH_PRODUCT, payload: response.data });
  };
  
  export const createProduct = product => async dispatch => {
    const response = await createProductAPI(product);
    dispatch({ type: CREATE_PRODUCT, payload: response.data });
  };
  
  export const updateProduct = (id, product) => async dispatch => {
    const response = await updateProductAPI(id, product);
    dispatch({ type: UPDATE_PRODUCT, payload: response.data });
  };
  
  export const deleteProduct = id => async dispatch => {
    await deleteProductAPI(id);
    dispatch({ type: DELETE_PRODUCT, payload: id });
  };
  