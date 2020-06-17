import React, { useEffect, useContext, Fragment } from 'react';
import { Skeleton, Button } from 'antd';

import AuthContext from '../../context/Auth/authContext';

import './Profile.css';
import HouseIcon from '../icon/house.svg';
import SystemIcon from '../icon/system.svg';

const UserPage = ({ history }) => {
  const authContext = useContext(AuthContext);

  const { loadUser, loading, user, isAuthenticated } = authContext;

  useEffect(() => {
    if (localStorage.token || isAuthenticated) {
      loadUser();
    } else {
      history.push('/login');
    }

    // eslint-disable-next-line
  }, [isAuthenticated]);
  if (loading) {
    return <Skeleton active />;
  }
  return (
    <div className='page-user'>
      <div className='logo-user'>
        <img src={user && user.avatar} className='logo-img' alt='logo' />
      </div>
      <div className='info-user'>
        <h2 className='name-user'>Name: {user && user.username}</h2>
        {user && user.store !== undefined ? (
          <Fragment>
            <h2 className='name-store'>
              NameStore: nameStore
              <span>
                <img src={HouseIcon} className='icon-store' alt='house' />
              </span>
            </h2>
            <h2 className='rate-percent'>Comment 90% Good</h2>
            <h2 className='amount-product'>Store Have 1000 products</h2>
            <Button type='primary'>Create new Book</Button>
          </Fragment>
        ) : (
          <Button type='primary' danger>
            Create new Store
          </Button>
        )}

        <div className='btn btn-edit'>
          <span>Edit profile</span>
          <img src={SystemIcon} className='icon-edit' alt='edit profile' />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
