import React, { useReducer } from 'react';
import axios from 'axios';

import AuthReducer from './authReducer';
import AuthContext from './authContext';

import setToken from '../../utils/setToken';

import {
  LOGOUT,
  LOADING,
  LOGIN,
  ERROR_AUTH,
  REGISTER,
  LOAD_USER,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: null,
    error: null,
    processAccept: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = async () => {
    try {
      setLoading();

      setToken(localStorage.token);

      const res = await axios.get(
        'https://mulberry-full-brontomerus.glitch.me/api/users/profile'
      );

      dispatch({
        type: LOAD_USER,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_AUTH,
        payload: { error },
      });
    }
  };

  const login = async (data) => {
    try {
      setLoading();
      const config = {
        Headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post(
        'https://mulberry-full-brontomerus.glitch.me/api/auth/login',
        data,
        config
      );

      setToken(localStorage.token);
      dispatch({
        type: LOGIN,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_AUTH,
        payload: { error },
      });
    }
  };

  const register = async (data) => {
    try {
      setLoading();
      const config = {
        Headers: {
          'Content-Type': 'application/json',
        },
      };

      await axios.post(
        'https://mulberry-full-brontomerus.glitch.me/api/auth/register',
        data,
        config
      );

      dispatch({
        type: REGISTER,
      });
    } catch (error) {
      dispatch({
        type: ERROR_AUTH,
        payload: { error },
      });
    }
  };

  const updateUser = async (data, idDocument) => {
    try {
      setLoading();

      loadUser();
    } catch (error) {
      dispatch({
        type: ERROR_AUTH,
        payload: { error },
      });
    }
  };

  const logout = () => {
    setLoading();
    dispatch({
      type: LOGOUT,
    });
  };

  const setLoading = () => {
    dispatch({
      type: LOADING,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        processAccept: state.processAccept,
        setLoading,
        logout,
        login,
        register,
        loadUser,
        updateUser,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
