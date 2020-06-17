import React, { useState, useContext } from 'react';
import { Tooltip } from 'antd';

import './BookItem.css';
import cartImg from '../icon/cart.svg';
import heartImg from '../icon/heart.svg';
import menuImg from '../icon/menu.svg';

import CartContext from '../../context/cart/cartContext';

const BookItem = ({ book, history }) => {
  const cartContext = useContext(CartContext);

  const { addToCart } = cartContext;
  const { image, title, des } = book;

  const [hoverDiv, setHover] = useState('');

  const handleHover = (e) => {
    setHover(e.target.alt);
  };

  const handleLeaveHover = (e) => {
    setHover('');
  };

  const handleCart = () => {
    if (!localStorage.token) {
      history.push('/login');
    } else {
      addToCart(book._id);
    }
  };

  return (
    <div className='h-card'>
      <div className='h-card-content'>
        <img src={image} className='h-card-img' alt='book card' />
        <div className='h-card-body'>
          <h3 className='h-card-title'>{title}</h3>
          <p className='h-card-text'>{des.slice(0, 90)}</p>
        </div>
        <div className='action'>
          <Tooltip placement='topLeft' title='add to cart'>
            <button className='btn btn-cart' onClick={handleCart}>
              <img
                src={cartImg}
                className={`btn-img ${hoverDiv === 'cart' ? 'fill' : ''}`}
                onMouseMove={handleHover}
                onMouseLeave={handleLeaveHover}
                alt='cart'
              />
            </button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Love Product'>
            <button className='btn btn-love'>
              <img
                src={heartImg}
                className={`btn-img ${hoverDiv === 'heart' ? 'fill' : ''}`}
                onMouseMove={handleHover}
                onMouseLeave={handleLeaveHover}
                alt='heart'
              />
            </button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Action'>
            <button className='btn btn-save'>
              <img
                src={menuImg}
                className={`btn-img ${hoverDiv === 'saveCart' ? 'fill' : ''}`}
                onMouseMove={handleHover}
                onMouseLeave={handleLeaveHover}
                alt='saveCart'
              />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
