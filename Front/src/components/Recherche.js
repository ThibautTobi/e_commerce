import React, { useState } from 'react';
//import Data from './data';

const SearchPage = () => {
  // État pour stocker le terme de recherche saisi par l'utilisateur
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction pour mettre à jour le terme de recherche
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fonction pour gérer la soumission du formulaire de recherche
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer une action de recherche avec le terme de recherche (ex: appel à une API)
    console.log('Recherche effectuée avec le terme:', searchTerm);
  };

  return (
    <div>
      <h1>Page de recherche</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Rechercher..."
        />
        <button type="submit">Rechercher</button>
      </form>
      {/* Afficher les résultats de recherche ici */}
    </div>
  );
};

export default SearchPage;
