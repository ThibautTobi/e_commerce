import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setAdminRole } from '../redux/userSlice';
import '../style/login.scss';
import imageLog1 from '../images/pexels-mohamed-sarim-1033729.jpg';
import imageLog2 from '../images/pexels-pascal-claivaz-410074.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Déclarer la variable "dispatch" en utilisant useDispatch
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    // Logic for login

    // Simulate user authentication
    const userIsAdmin = true; // Replace this with your authentication logic

    // If the user is an admin, dispatch the action to set the admin role in Redux store
    if (userIsAdmin) {
      dispatch(setAdminRole(true)); // Passer true comme argument pour définir le rôle en tant qu'administrateur
    }
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    // Logic for creating account
  };

  const handleToggleCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount);
  };

  // const userRole = useSelector((state) => state.user.role);

  return (
    <div className={`login-display ${showCreateAccount ? 'show-create-account' : ''}`}>
      <div className='banniere__1'>
        <img src={imageLog1} alt='paysage' className='banniere__1__image'></img>
      </div>
      <div className="login-container">
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
          <p className="login-create-link" onClick={handleToggleCreateAccount}>
            Create an account
          </p>
        </form>
      </div>

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
          <p className="create-account-login-link" onClick={handleToggleCreateAccount}>
            Back to Login
          </p>
        </form>
      </div>
      <div className='banniere__2'>
        <img src={imageLog2} alt='paysage' className='banniere__2__image' ></img>
      </div>
    </div>
  );
}

export default Login;