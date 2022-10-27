import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import './Meals.css';

export default function Meals(props) {
  const [mealVideoId, setMealVideoId] = useState('');
  const [mealsIngredients, setMealsIngredients] = useState([]);
  const [mealMeasure, setMealMeasure] = useState([]);

  const { apiMeal, setApiMeal } = useContext(Context);

  useEffect(() => {
    const requestApi = async () => {
      const { props: { match: { params: { id } } } } = props;

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
    };
    requestApi();
  }, [setApiMeal, setMealsIngredients, props]);

  return (
    <>
      <header className="Meals-header">
        <img
          src={ apiMeal.strMealThumb }
          alt={ apiMeal.strMeal }
          data-testid="recipe-photo"
          className="recipe-photo"
        />
        <h1 data-testid="recipe-title" className="recipe-title">
          {apiMeal.strMeal}
        </h1>
        <h3 data-testid="recipe-category" className="recipe-category">
          {apiMeal.strCategory}
        </h3>
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
            width="336"
            height="205"
            src={ `https://www.youtube.com/embed/${mealVideoId}?controls=1` }
            title="YouTube video player"
            data-testid="video"
            name="Vídeo"
          />
        </div>
      </main>
    </>
  );
}

Meals.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;
