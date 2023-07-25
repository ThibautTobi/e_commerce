import React, { useContext } from 'react';
import { ThemeContext } from './components/Theme';
import { PanierProvider } from './components/UsePanier';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './components/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Panier from './components/Panier';
import Footer from './components/Footer';

import Error from './pages/Error';
import { Routes,Route } from 'react-router-dom';
import './style/app.scss';
import CartPage from './pages/CartPage';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <PanierProvider>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/Produits" element={<CartPage />}/>
            <Route path="/Cart/:id" element={<Cart />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Panier" element={<Panier />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
        <Footer />
      </PanierProvider>
    </div>
  );
}
export default App;