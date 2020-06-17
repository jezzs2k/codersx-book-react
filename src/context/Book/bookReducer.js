import { BOOKS, ERROR, LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case BOOKS:
      return {
        ...state,
        books: action.payload.books,
        loading: false,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        books: null,
        loading: false,
        error: action.payload.message,
      };

    case LOADING:
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
