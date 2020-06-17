import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, Badge } from 'antd';

import PropTypes from 'prop-types';

import homeImg from '../icon/home.svg';
import bookImg from '../icon/book.svg';
import cartImg from '../icon/cart.svg';
import './Navbar.css';

import AuthContext from '../../context/Auth/authContext';
import CartContext from '../../context/cart/cartContext';

const Navbar = ({ history }) => {
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);

  const { isAuthenticated, logout, user, loadUser, token } = authContext;
  const { carts, getCarts } = cartContext;

  let amountCart = 0;

  useEffect(() => {
    if (token) {
      loadUser();
    }
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (isAuthenticated) {
      getCarts();
    }
    // eslint-disable-next-line
  }, [isAuthenticated, carts]);

  if (carts.length > 0) {
    carts.forEach((item) => {
      amountCart = amountCart + item.amount;
    });
  }

  const handleLogout = () => {
    logout();
  };

  const guestLink = (
    <Fragment>
      <li className='h-navbar-item h-login'>
        <Link to='/login' className='h-nav-link'>
          <span className='link-text'>Login</span>
        </Link>
      </li>
      <li className='h-navbar-item h-signup'>
        <Link to='/register' className='h-nav-link '>
          <span className='link-text'>SignUp</span>
        </Link>
      </li>
    </Fragment>
  );
  const AuthLink = (
    <Fragment>
      <li className='h-navbar-item h-user'>
        <Link to='/profile' className='h-nav-link'>
          <div className='nav-icon'>
            <img src={user && user.avatar} className='link-icon' alt='user' />
            <span className='link-text'>{user && user.username}</span>
          </div>
        </Link>
      </li>
      <li className='h-navbar-item h-logout'>
        <a href='#logout' className='h-nav-link ' onClick={handleLogout}>
          <span className='link-text'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className='h-navbar'>
        <ul className='h-navbar-nav'>
          <li className='h-navbar-item'>
            <Link to='/' className='h-nav-link'>
              <div className='nav-icon'>
                <img src={homeImg} className='link-icon' alt='home' />
              </div>
              <span className='link-text'>Home</span>
            </Link>
          </li>
          <li className='h-navbar-item'>
            <a href='#Top' className='h-nav-link'>
              <div className='nav-icon'>
                <img src={bookImg} className='link-icon' alt='book' />
              </div>
              <span className='link-text'>Transaction</span>
            </a>
          </li>
          <Tooltip placement='right' title='GO TO THE CART'>
            <li className='h-navbar-item'>
              <a href='#Top' className='h-nav-link'>
                <Badge count={amountCart}>
                  <div className='nav-icon'>
                    <img src={cartImg} className='link-icon' alt='cart' />
                  </div>
                </Badge>
                <span className='link-text'>Cart</span>
              </a>
            </li>
          </Tooltip>

          {isAuthenticated ? AuthLink : guestLink}
        </ul>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  amountCart: PropTypes.number,
  isAuthenticated: PropTypes.bool,
};

export default Navbar;
