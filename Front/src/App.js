import React, { useContext } from 'react';
import { ThemeContext } from './components/Theme';
// import { PanierProvider } from './components/UsePanier';
//import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';//, Navigate
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './components/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Panier from './components/Panier';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import Error from './pages/Error';
import './style/app.scss';

function App() {
  const { theme } = useContext(ThemeContext);

  // Récupérer le rôle d'utilisateur à partir du Redux store
  //const userRole = useSelector((state) => state.user.role);

  // Vérifier si l'utilisateur est administrateur
 // const isAdmin = userRole === 'admin';

  return (
      <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        {/* <PanierProvider> */}
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Produits" element={<CartPage />} />
            <Route path="/Cart/:id" element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Panier" element={<Panier />} />
            <Route path="/Modification" element={<AdminPage />}/>
            {/* {isAdmin ? (
              <Route path="/Modification" element={<AdminPage />} />
            ) : (
              <Route path="/Modification" element={<Navigate to="/" />} />
            )} */}
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        {/* </PanierProvider> */}
      </div>
  );
}

export default App;

//             {isAdmin ? (
//               <Route path="/Modification" element={<AdminPage />} />
//             ) : (
//               // nous avons créé un fragment vide pour entourer la fonction fléchée et la placer entre parenthèses, ce qui résout l'erreur de parsing.
//               (<></>, () => navigate('/'))
//             )}