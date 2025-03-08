import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './store';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      dispatch(login({ email }));
      navigate('/');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className='out'>
      <div className="loginpage">
        <div className="h1">
          <h1>LOGIN</h1>
        </div>
        <div className="innerlogin">
          <h2>Email</h2>
          <input
            type="email"
            className='inputbox'
            placeholder='enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2>Password</h2>
          <input
            type="password"
            className='inputbox'
            id='ib'
            placeholder='enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <a href="#" className='fp'>forgot password?</a>
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
