import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import './ButtonFavoriteRecipe.css';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export default function ButtonFavoriteRecipe() {
  const [favIcon, setFavIcon] = useState(false);
  const [currLocalStor, setCurrLocalStor] = useState([]);
  const [currId, setCurrId] = useState('');
  const { apiMeal, apiDrink, typeRecipe } = useContext(Context);
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
      setCurrLocalStor(local);
      const idRecipe = history.location.pathname.split('/')[2];
      setCurrId(idRecipe);
      if (local === null) {
        return result;
      } if (local.some((e) => e.id === idRecipe)) {
        result = true;
        setFavIcon(result);
        return result;
      }
    };
    getFavStorange();
  }, [history.location.pathname]);

  const favoriteRecipe = () => {
    const local = JSON.parse(localStorage
      .getItem('favoriteRecipes'));
    if (local === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(favData));
      setFavIcon(true);
    } else {
      const local1 = JSON.parse(localStorage
        .getItem('favoriteRecipes'));
      localStorage.setItem('favoriteRecipes', JSON.stringify([...local1, ...favData]));
      setFavIcon(true);
    }
  };

  const unfavorRecipe = () => {
    const updateLocal = currLocalStor.filter((recipe) => recipe.id !== currId);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updateLocal));
    setFavIcon(false);
  };

  if (favIcon === false) {
    return (
      <div>
        <button
          type="button"
          data-testid="favorite-btn"
          onClick={ () => favoriteRecipe() }
          src={ whiteHeart }
        >
          Favorite
          <img src={ whiteHeart } alt="whiteHeart" />
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => unfavorRecipe() }
        src={ blackHeart }
      >
        <img src={ blackHeart } alt="" />
        Unfavorite
      </button>
    </div>
  );
}

ButtonFavoriteRecipe.propTypes = {
  checkFavrecipe: PropTypes.bool,
}.isRequired;
