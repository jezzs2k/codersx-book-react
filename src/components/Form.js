import React, { useState } from 'react';

import './Form.css';

const Form = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    text: '',
    number: 0,
  });

  const [hoverDiv, setHover] = useState('');

  const { email, password, text, number } = state;

  const handleHover = (e) => {
    setHover(e.target.name);
  };

  const handleInputParams = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className='form'>
      <h2 className='title'>FORM</h2>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          className={`form-control ${hoverDiv === 'email' ? 'hover' : ''}`}
          placeholder='Email...'
          value={email}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          className={`form-control ${hoverDiv === 'password' ? 'hover' : ''}`}
          placeholder='Password...'
          value={password}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='text'>Text</label>
        <input
          type='text'
          name='text'
          id='text'
          className={`form-control ${hoverDiv === 'text' ? 'hover' : ''}`}
          placeholder='Text...'
          value={text}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='number'>Number</label>
        <input
          type='number'
          name='number'
          id='number'
          min='0'
          max='100'
          className={`form-control ${hoverDiv === 'number' ? 'hover' : ''}`}
          value={number < 0 ? 18 : number}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='radio'>Radio</label>
        <input
          type='radio'
          name='radio'
          id='radio'
          className={`form-control ${hoverDiv === 'radio' ? 'hover' : ''}`}
          value={number < 0 ? 18 : number}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
        <input
          type='radio'
          name='radio'
          id='radio'
          className={`form-control ${hoverDiv === 'radio' ? 'hover' : ''}`}
          value={number < 0 ? 18 : number}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='cars'>Cars:</label>
        <select id='cars' name='cars' className='select-form'>
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='fiat'>Fiat</option>
          <option value='audi'>Audi</option>
        </select>
      </div>
      <button
        onMouseMove={handleHover}
        onMouseLeave={handleHover}
        className={`btn btn-login ${hoverDiv === '' ? 'hover' : ''}`}>
        BUTTON
      </button>
      <button
        onMouseMove={handleHover}
        onMouseLeave={handleHover}
        className={`btn btn-login danger ${hoverDiv === '' ? 'hover' : ''}`}>
        BUTTON
      </button>
      <button
        onMouseMove={handleHover}
        onMouseLeave={handleHover}
        className={`btn btn-login default ${hoverDiv === '' ? 'hover' : ''}`}>
        BUTTON DEFAULT
      </button>
    </div>
  );
};

export default Form;
