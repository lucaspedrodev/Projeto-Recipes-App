import React, { useContext } from 'react';
import Context from '../Context/Context';
import './ButtonFavoriteRecipe.css';

export default function ButtonFavoriteRecipe() {
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

  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => localStorage.setItem('favoriteRecipes', JSON.stringify(favData)) }
      >
        Favorite
      </button>
    </div>
  );
}
