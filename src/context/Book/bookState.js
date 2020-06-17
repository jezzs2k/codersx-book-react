import React, { useReducer } from 'react';
import axios from 'axios';

import BookReducer from './bookReducer';
import BookContext from './bookContext';

import { BOOKS, ERROR, LOADING } from '../types';

const BookState = (props) => {
  const initiation = {
    books: [],
    loading: null,
    error: null,
  };

  const [state, dispatch] = useReducer(BookReducer, initiation);

  const getBooks = async () => {
    try {
      setLoading();
      const res = await axios.get(
        'https://mulberry-full-brontomerus.glitch.me/api/books'
      );

      dispatch({
        type: BOOKS,
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
    <BookContext.Provider
      value={{
        books: state.books,
        loading: state.loading,
        error: state.error,
        getBooks,
      }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
