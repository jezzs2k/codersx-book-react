import {
  LOGIN,
  REGISTER,
  LOADING,
  LOGOUT,
  ERROR_AUTH,
  LOAD_USER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case REGISTER:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: null,
        processAccept: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false,
        error: null,
        user: null,
      };
    case ERROR_AUTH:
      console.log(action.payload);
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: null,
        loading: false,
        user: null,
        error: action.payload.error,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return { ...state };
  }
};
