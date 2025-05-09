import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Quoi (poste, mots-clés…)" className="search-input" />
      <input type="text" placeholder="Où (lieu, ville…)" className="search-input" />
      <button className="search-button">
        🔍 Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
