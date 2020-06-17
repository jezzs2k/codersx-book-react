import React, { useState, useContext } from 'react';
import { Alert } from 'antd';

import AuthContext from '../../context/Auth/authContext';

import './Register.css';

const Register = () => {
  const authContext = useContext(AuthContext);

  const { processAccept, register } = authContext;

  const [state, setState] = useState({
    email: '',
    password: '',
    username: '',
  });

  const [hoverDiv, setHover] = useState('');

  const { email, password, username, age } = state;

  const handleRegister = () => {
    register({ email, password, username, age });
  };

  const handleHover = (e) => {
    setHover(e.target.name);
  };

  const handleInputParams = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  if (processAccept) {
    return (
      <div className='alert'>
        <Alert
          message='Register successfully'
          description='please check your mail and complete.'
          type='success'
          showIcon
        />
      </div>
    );
  }

  return (
    <div className='form-register-h'>
      <h2 className='title'>REGISTER</h2>
      <div className='form-group-h'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          id='username'
          className={`form-control-h ${hoverDiv === 'username' ? 'hover' : ''}`}
          placeholder='Username...'
          value={username}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>
      <div className='form-group-h'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          className={`form-control-h ${hoverDiv === 'email' ? 'hover' : ''}`}
          placeholder='Email...'
          value={email}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>
      <div className='form-group-h'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          className={`form-control-h ${hoverDiv === 'password' ? 'hover' : ''}`}
          placeholder='Password...'
          value={password}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>
      <button
        onMouseMove={handleHover}
        onMouseLeave={handleHover}
        onClick={handleRegister}
        className={`btn btn-register ${hoverDiv === '' ? 'hover' : ''}`}>
        Register
      </button>
    </div>
  );
};

export default Register;
