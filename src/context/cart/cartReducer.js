import { CARTS, ERROR, LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case CARTS:
      return {
        ...state,
        carts: action.payload.carts,
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
