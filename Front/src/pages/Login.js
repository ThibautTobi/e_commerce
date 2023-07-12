import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../style/login.scss';

function Login() {


  function Log (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLogin = (event) => {
      event.preventDefault();
      // Logic for login
    };

    return(
      <div className='login-container'>
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <TextField
            type="email"
            className="login-input"
            label="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            type="password"
            className="login-input"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" variant="contained" className="login-button">
            Login
          </Button>
        </form>
      </div>
    )
  };

  function Create (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleCreateAccount = (event) => {
      event.preventDefault();
      // Logic for creating account
    };
    return(
      <div className="create-account-container">
        <h2 className="create-account-title">Create Account</h2>
        <form onSubmit={handleCreateAccount}>
          <TextField
            type="email"
            className="create-account-input"
            label="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            type="password"
            className="create-account-input"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" variant="contained" className="create-account-button">
            Create Account
          </Button>
        </form>
      </div>
    )
  }
  return (
    <div className="login-display">
      <Log />
      <Create/>
    </div>
  );
};

export default Login;