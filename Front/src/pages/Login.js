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
        <form onSubmit={handleLogin} className='login__form'>
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


/***** requete back end  */

// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { setAdminRole } from '../redux/userSlice';
// import '../style/login.scss';
// import imageLog1 from '../images/pexels-mohamed-sarim-1033729.jpg';
// import imageLog2 from '../images/pexels-pascal-claivaz-410074.jpg';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showCreateAccount, setShowCreateAccount] = useState(false);
//   const [error, setError] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   // Déclarer la variable "dispatch" en utilisant useDispatch
//   const dispatch = useDispatch();

//   const handleLogin = (event) => {
//     event.preventDefault();
//     // Logique pour la connexion

//     // Faire une requête POST à votre point d'accès "login" avec l'e-mail et le mot de passe
//     fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Connexion réussie, déclencher l'action pour définir le rôle administrateur dans le store Redux
//           dispatch(setAdminRole(true)); // Définir le rôle administrateur à true (supposons que l'utilisateur est un administrateur)
//         } else {
//           setError('Identifiants invalides'); // Gérer l'erreur de connexion
//         }
//       })
//       .catch((error) => {
//         setError('Erreur lors de la connexion'); // Gérer les erreurs réseau
//       });
//   };

//   const handleCreateAccount = (event) => {
//     event.preventDefault();
//     // Logique pour créer un compte utilisateur
//     // Faire une requête POST à votre point d'accès "signup" avec l'e-mail et le mot de passe
//     fetch('/api/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Création de compte réussie, traiter le succès (par exemple, afficher un message de succès)
//           // Vous pouvez également connecter automatiquement l'utilisateur après la création du compte
//           console.log('Compte créé avec succès');
//         } else {
//           setError('Échec de la création du compte'); // Gérer l'erreur de création de compte
//         }
//       })
//       .catch((error) => {
//         setError('Erreur lors de la création du compte'); // Gérer les erreurs réseau
//       });
//   };

//   const handleToggleCreateAccount = () => {
//     setShowCreateAccount(!showCreateAccount);
//   };

//   return (
//     <div className={`login-display ${showCreateAccount ? 'show-create-account' : ''}`}>
//       <div className='banniere__1'>
//         <img src={imageLog1} alt='paysage' className='banniere__1__image'></img>
//       </div>
//       <div className="login-container">
//         <h2 className="login-title">Connexion</h2>
//         <form onSubmit={handleLogin}>
//           <TextField
//             type="email"
//             className="login-input"
//             label="E-mail"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <TextField
//             type="password"
//             className="login-input"
//             label="Mot de passe"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           <Button type="submit" variant="contained" className="login-button">
//             Se connecter
//           </Button>
//           <p className="login-create-link" onClick={handleToggleCreateAccount}>
//             Créer un compte
//           </p>
//         </form>
//       </div>

//       <div className="create-account-container">
//         <h2 className="create-account-title">Créer un compte</h2>
//         <form onSubmit={handleCreateAccount}>
//           <TextField
//             type="email"
//             className="create-account-input"
//             label="E-mail"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <TextField
//             type="password"
//             className="create-account-input"
//             label="Mot de passe"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           <Button type="submit" variant="contained" className="create-account-button">
//             Créer un compte
//           </Button>
//           <p className="create-account-login-link" onClick={handleToggleCreateAccount}>
//             Retour à la connexion
//           </p>
//         </form>
//       </div>
//       <div className='banniere__2'>
//         <img src={imageLog2} alt='paysage' className='banniere__2__image' ></img>
//       </div>
//       {error && <p className="login-error">{error}</p>}
//     </div>
//   );
// }

// export default Login;
