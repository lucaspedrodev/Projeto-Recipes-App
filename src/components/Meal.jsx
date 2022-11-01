import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';

import './MealsAndDrick.css';
import './Buttons-favorite-share.css';

import RecommendationDrink from './RecommendationDrink';
import ButtonStartRecipe from './ButtonStartRecipe';
import ButtonFavoriteRecipe from './ButtonFavoriteRecipe';
import ButtonShareRecipe from './ButtonShareRecipe';
import MealDetailsHeader from '../images/MealDetailsHeader.svg';

export default function Meal(props) {
  const [mealVideoId, setMealVideoId] = useState('');
  const [mealsIngredients, setMealsIngredients] = useState([]);
  const [mealMeasure, setMealMeasure] = useState([]);

  const { apiMeal, setApiMeal, setTypeRecipe } = useContext(Context);
  const { props: { match: { params: { id } } } } = props;
  useEffect(() => {
    const requestApi = async () => {
      const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const response = await request.json();
      setApiMeal(response.meals[0]);

      const Ingredients = Object.entries(response.meals[0])
        .filter((e) => e[0].includes('strIngredient') && e[1] !== '' && e[1] !== null)
        .map((e) => e[1]);

      const Measure = Object.entries(response.meals[0])
        .filter((e) => e[0].includes('strMeasure') && e[1] !== '' && e[1] !== null)
        .map((e) => e[1]);

      setMealsIngredients(Ingredients);
      setMealMeasure(Measure);

      setMealVideoId(response.meals[0].strYoutube.split('=')[1]);
      setTypeRecipe('meal');
      // const local = JSON.parse(localStorage
      //   .getItem('favoriteRecipes')) ?? [{}];
      // setCheckFavRecipe(local.some((e) => e.id === response.meals[0].idMeal));
    };
    requestApi();
  }, [setApiMeal, setMealsIngredients, id, setTypeRecipe]);

  return (
    <>
      <header className="Recipe-header">
        <nav className="Btns__share__favorite__container">
          <div className="Recipe__category__container">
            <img src={ MealDetailsHeader } alt="Drink Details Header" />
            <p data-testid="recipe-category" className="recipe-category">
              {apiMeal.strCategory}
            </p>
          </div>
          <div className="Btns__container">
            <ButtonFavoriteRecipe />
            <ButtonShareRecipe />
          </div>
        </nav>
        <img
          src={ apiMeal.strMealThumb }
          alt={ apiMeal.strMeal }
          data-testid="recipe-photo"
          className="recipe-photo"
        />
        <h1 data-testid="recipe-title" className="recipe-title">
          {apiMeal.strMeal}
        </h1>
      </header>
      <main className="Foods-recipe-main">
        <h1 className="recipe-titles">Ingredients</h1>
        <div className="Foods-recipe-ingredient">
          <ul>
            { mealsIngredients.map((ingredient, index) => (
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                {`${ingredient} - ${mealMeasure[index]} `}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="recipe-titles">Instructions</h1>
        <div className="Foods-recipe-instructions">
          <p data-testid="instructions">
            {apiMeal.strInstructions}
          </p>
        </div>
        <h1 className="recipe-titles">Video</h1>
        <div>
          <iframe
            width="100%"
            height="205"
            src={ `https://www.youtube.com/embed/${mealVideoId}?controls=1` }
            title="YouTube video player"
            data-testid="video"
            name="Vídeo"
          />
        </div>
        <RecommendationDrink />
      </main>
      <ButtonStartRecipe id={ id } />
    </>
  );
}

Meal.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;
