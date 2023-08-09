import React, { useState, useRef } from 'react';
import Data from '../data/Data'; // Assurez-vous d'importer correctement vos données

function SearchBar() {
  const [searchResults, setSearchResults] = useState([]); // État pour stocker les résultats de la recherche
  const searchInputRef = useRef(null); // Référence à l'élément de saisie de recherche

  const handleSearch = () => {
    const searchTerm = searchInputRef.current.value.toLowerCase();
    const filteredResults = Data.filter(item =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher..."
        ref={searchInputRef} // Attribuez la référence à l'élément de saisie
      />
      <button onClick={handleSearch}>Rechercher</button>

      <div>
        <h2>Résultats de la recherche :</h2>
        <ul>
          {searchResults.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;