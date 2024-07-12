import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from '../actions/actions';

const products = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case CREATE_PRODUCT:
      return [...state, action.payload];
    case UPDATE_PRODUCT:
      return state.map(product =>
        product._id === action.payload._id ? action.payload : product
      );
    case DELETE_PRODUCT:
      return state.filter(product => product._id !== action.payload);
    default:
      return state;
  }
};

const product = (state = null, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  products,
  product
});
