import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blackHeart from '../images/blackHeartIcon.svg';
import Header from '../components/Header';
import share from '../images/shareIcon.svg';

const clip = require('clipboard-copy');

export default function FavoriteRecipes() {
  const [favs, setFavs] = useState([]);
  const [favs2, setFavs2] = useState([]);
  const [text, setText] = useState(false);
  useEffect(() => {
    const us = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavs(us);
    setFavs2(us);
  }, []);
  const handleClip = (id, type) => {
    clip(`http://localhost:3000/${type}s/${id}`);
    setText(true);
  };
  const handleFavs = (elem) => {
    const newFavs = favs.filter((e) => e !== elem);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavs));
    setFavs(newFavs);
    setFavs2(newFavs);
  };
  const drinkFilter = () => {
    const drinks = favs2.filter((e) => e.type.includes('drink'));
    setFavs(drinks);
  };
  const mealFilter = () => {
    const meals = favs2.filter((e) => e.type.includes('meal'));
    setFavs(meals);
  };
  const allFilter = () => {
    setFavs(favs2);
  };
  return (
    <div>
      <Header />
      { text && (<p data-testid="link-copied">Link copied!</p>)}
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => allFilter() }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-meal-btn"
          onClick={ () => mealFilter() }
        >
          Meals
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => drinkFilter() }
        >
          Drinks
        </button>
      </div>
      {favs?.map((element, i) => (
        element.type.includes('meal')
          ? (
            <div key={ i }>
              <Link key={ i } to={ `/meals/${element.id}` }>
                <h1 data-testid={ `${i}-horizontal-name` }>{element.name}</h1>
                <img
                  src={ element.image }
                  alt={ element.name }
                  data-testid={ `${i}-horizontal-image` }
                  width="100px"
                />
                <h3 data-testid={ `${i}-horizontal-top-text` }>
                  {element.nationality}
                  {' '}
                  -
                  {' '}
                  {element.category}
                </h3>
              </Link>
              <button
                id={ element.id }
                type="button"
                data-testid={ `${i}-horizontal-share-btn` }
                src={ share }
                onClick={ () => handleClip(element.id, element.type) }
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
          : (
            <div key={ i }>
              <Link key={ i } to={ `/drinks/${element.id}` }>
                <h1 data-testid={ `${i}-horizontal-name` }>{element.name}</h1>
                <img
                  src={ element.image }
                  alt={ element.name }
                  data-testid={ `${i}-horizontal-image` }
                  width="100px"
                />
                <h3 data-testid={ `${i}-horizontal-top-text` }>
                  {element.alcoholicOrNot}
                </h3>
              </Link>
              <button
                type="button"
                data-testid={ `${i}-horizontal-share-btn` }
                src={ share }
                onClick={ () => handleClip(element.id, element.type) }
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
