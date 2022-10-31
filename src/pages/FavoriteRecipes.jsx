import React, { useEffect, useState } from 'react';
import blackHeart from '../images/blackHeartIcon.svg';
import Header from '../components/Header';
import share from '../images/shareIcon.svg';

export default function FavoriteRecipes() {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const us = JSON.parse(localStorage.getItem('favoriteRecipes'));

    setFavs(us);
  }, []);
  console.log(favs);
  return (
    <div>
      <Header />
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-meal-btn">Meals</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      {favs.map((element, i) => (
        element.type.includes('meal')

          ? (
            <div key={ i }>
              <h1 data-testid={ `${i}-horizontal-name` }>{element.name}</h1>
              <img
                src={ element.image }
                alt={ element.name }
                data-testid={ `${i}-horizontal-image` }
              />
              <h3 data-testid={ `${i}-horizontal-top-text` }>
                {element.nationality}
                {' '}
                -
                {' '}
                {element.category}
              </h3>
              <button
                type="button"
                data-testid={ `${i}-horizontal-share-btn` }
                src={ share }
              >
                share
              </button>
              <button
                type="button"
                data-testid={ `${i}-horizontal-favorite-btn` }
                src={ blackHeart }
              >
                unfavorite
              </button>
            </div>
          )
          : (
            <div key={ i }>
              <h1 data-testid={ `${i}-horizontal-name` }>{element.name}</h1>
              <img
                src={ element.image }
                alt={ element.name }
                data-testid={ `${i}-horizontal-image` }
              />
              <h3 data-testid={ `${i}-horizontal-top-text` }>
                {element.alcoholicOrNot}
              </h3>
              <button
                type="button"
                data-testid={ `${i}-horizontal-share-btn` }
                src={ share }
              >
                share
              </button>
              <button
                type="button"
                data-testid={ `${i}-horizontal-favorite-btn` }
                src={ blackHeart }
              >
                unfavorite
              </button>
            </div>
          )
      )) }
    </div>
  );
}
