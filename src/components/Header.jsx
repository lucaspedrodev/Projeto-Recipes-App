import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import Context from '../Context/Context';

export default function Header() {
  const { appearSearchBar, searchBarAppear } = useContext(Context);
  const history = useHistory();

  const route = history.location.pathname;
  const setTitles = () => {
    const rota = history.location.pathname;
    if (rota === '/profile') {
      return 'Profile';
    }
    if (rota === '/meals') {
      return 'Meals';
    }
    if (rota === '/drinks') {
      return 'Drinks';
    }
    if (rota === '/done-recipes') {
      return 'Done Recipes';
    }
    if (rota === '/favorite-recipes') {
      return 'Favorite Recipes';
    }
  };

  return (
    <div>
      <h1 data-testid="page-title">{setTitles()}</h1>
      <button type="button" onClick={ () => history.push('/profile') }>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile-icon"
        />
      </button>
      {(route === '/meals' || route === '/drinks') && (
        <button onClick={ appearSearchBar } type="button">
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="search=icon"
          />
        </button>
      )}
      {searchBarAppear && <SearchBar />}
    </div>
  );
}
