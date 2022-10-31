import React, { useEffect, useState } from 'react';
import blackHeart from '../images/blackHeartIcon.svg';
import Header from '../components/Header';
import share from '../images/shareIcon.svg';

const clip = require('clipboard-copy');

export default function FavoriteRecipes() {
  const [favs, setFavs] = useState([]);
  const [text, setText] = useState(false);
  useEffect(() => {
    const us = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavs(us);
  }, []);
  console.log(favs);
  const handleClip = (id, type) => {
    clip(`http://localhost:3000/${type}s/${id}`);
    setText(true);
    console.log(text);
  };
  const handleFavs = (elem) => {
    const newFavs = favs.filter((e) => e !== elem);
    console.log(newFavs);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavs));
    setFavs(newFavs);
  };
  return (
    <div>
      <Header />
      { text && (<p>Link copied!</p>)}
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
              <div>
                <button
                  id={ element.id }
                  type="button"
                  data-testid={ `${i}-horizontal-share-btn` }
                  src={ share }
                  onClick={ () => handleClip(element.id, element.type) }
                >
                  share
                </button>
              </div>
              <button
                type="button"
                data-testid={ `${i}-horizontal-favorite-btn` }
                src={ blackHeart }
                onClick={ () => handleFavs(element) }
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
                onClick={ () => handleClick(element.id, element.type) }
              >
                share
              </button>
              <button
                type="button"
                data-testid={ `${i}-horizontal-favorite-btn` }
                src={ blackHeart }
                onClick={ () => handleFavs(element) }
              >
                unfavorite
              </button>
            </div>
          )
      )) }
    </div>
  );
}
