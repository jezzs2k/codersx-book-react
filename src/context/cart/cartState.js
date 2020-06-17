import React, { useReducer } from 'react';
import axios from 'axios';

import CartReducer from './cartReducer';
import CartContext from './cartContext';

import setToken from '../../utils/setToken';

import { CARTS, ERROR, LOADING } from '../types';

const CartState = (props) => {
  const initiation = {
    carts: [],
    loading: null,
    error: null,
  };

  const [state, dispatch] = useReducer(CartReducer, initiation);

  const getCarts = async () => {
    try {
      setLoading();
      setToken(localStorage.token);
      const res = await axios.get(
        'https://mulberry-full-brontomerus.glitch.me/api/carts'
      );

      dispatch({
        type: CARTS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };

  const addToCart = async (bookId) => {
    try {
      setLoading();
      const res = await axios.put(
        `https://mulberry-full-brontomerus.glitch.me//api/carts/${bookId}`
      );

      dispatch({
        type: CARTS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };

  const setLoading = () => {
    dispatch({
      type: LOADING,
    });
  };

  return (
    <CartContext.Provider
      value={{
        carts: state.carts,
        loading: state.loading,
        error: state.error,
        getCarts,
        addToCart,
      }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
