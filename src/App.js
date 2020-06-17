import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import AuthState from './context/Auth/authState';
import BookState from './context/Book/bookState';
import CartState from './context/cart/cartState';

import Login from './components/Auth/Login';
import Navbar from './components/Layouts/Navbar';
import Register from './components/Auth/Register';
import Home from './components/Page/Home';
import Profile from './components/Page/Profile';

const App = () => {
  return (
    <AuthState>
      <BookState>
        <CartState>
          <Router>
            <div className='App'>
              <div className='Header'>
                <Navbar />
              </div>
              <div className='Center'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/profile' component={Profile} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                </Switch>
              </div>
            </div>
          </Router>
        </CartState>
      </BookState>
    </AuthState>
  );
};

export default App;
