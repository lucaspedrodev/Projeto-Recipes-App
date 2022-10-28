import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import './ButtonFavoriteRecipe.css';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export default function ButtonFavoriteRecipe() {
  const [favIcon, setFavIcon] = useState(false);
  const { apiMeal, apiDrink, typeRecipe } = useContext(Context);
  // const { chekFavRecipe } = props;
  const favData = [{
    id: typeRecipe === 'meal' ? apiMeal.idMeal : apiDrink.idDrink,
    type: typeRecipe,
    nationality: typeRecipe === 'meal' ? apiMeal.strArea : '',
    category: typeRecipe === 'meal' ? apiMeal.strCategory : apiDrink.strCategory,
    alcoholicOrNot: typeRecipe === 'meal' ? '' : apiDrink.strAlcoholic,
    name: typeRecipe === 'meal' ? apiMeal.strMeal : apiDrink.strDrink,
    image: typeRecipe === 'meal' ? apiMeal.strMealThumb : apiDrink.strDrinkThumb,
  }];

  const history = useHistory();

  useEffect(() => {
    const getFavStorange = () => {
      let result = false;
      const local = JSON.parse(localStorage
        .getItem('favoriteRecipes'));
      console.log(local);
      const idRecipe = history.location.pathname.split('/')[2];
      if (local === null) {
        return result;
      } if (local.some((e) => e.id === idRecipe)) {
        result = true;
        setFavIcon(result);
        return result;
      }
    };
    getFavStorange();
  });

  if (favIcon === false) {
    return (
      <div>
        <button
          type="button"
          data-testid="favorite-btn"
          onClick={
            () => localStorage.setItem('favoriteRecipes', JSON.stringify(favData))
          }
          src={ whiteHeart }
        >
          Favorite
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={
          () => localStorage.setItem('favoriteRecipes', JSON.stringify(favData))
        }
        src={ blackHeart }
      >
        Favorite
      </button>
    </div>
  );
}

ButtonFavoriteRecipe.propTypes = {
  checkFavrecipe: PropTypes.bool,
}.isRequired;
