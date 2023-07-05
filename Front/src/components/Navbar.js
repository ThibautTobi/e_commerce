import React from 'react';
import '../style/navbar.scss';

function Navbar () {
    
  return (
    <nav>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/categorie1">Catégorie 1</a></li>
        <li><a href="/categorie2">Catégorie 2</a></li>
        <li><a href="/categorie3">Catégorie 3</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
