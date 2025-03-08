import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="homepage">
        <h1>Home Page</h1>
        {user ? (
          <>
            <p>Welcome, {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}
      </div>
    </div>
  );
};

export default Home;
