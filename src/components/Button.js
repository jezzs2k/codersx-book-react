import React from 'react';

import './Button.css';

const Button = () => {
  return (
    <div className='button'>
      <button className={`btn btn-primary`}>BUTTON</button>
      <button className={`btn btn-login danger`}>BUTTON</button>
      <button className={`btn btn-login default`}>BUTTON DEFAULT</button>
    </div>
  );
};

export default Button;
