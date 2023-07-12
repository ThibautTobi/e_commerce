import Navbar from './Navbar';
import React, { useContext } from 'react';
import { ThemeContext } from '../components/Theme';
import '../style/header.scss';

function Header() {
  const { theme } = useContext(ThemeContext);

    return (
      <header className={`header ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <Navbar />
      </header>
    );
  }
  
  export default Header;