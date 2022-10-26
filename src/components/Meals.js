import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';

export default function Meals(props) {
  const [mealVideoId, setMealVideoId] = useState('');
  const [mealsIngredients, setMealsIngredients] = useState([]);
  const [mealMeasure, setMealMeasure] = useState([]);

  const {
    apiMeal,
    setApiMeal,
    // setTypeRecipes,
  } = useContext(Context);

  useEffect(() => {
    const requestApi = async () => {
      const { props: { match: { params: { id } } } } = props;
      const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const response = await request.json();
      const responseMeals = response;
      setApiMeal(responseMeals.meals[0]);
      // setTypeRecipes('meal');
      setMealsIngredients(Object.entries(Object.entries(responseMeals)[0])
        .filter((e) => e[0]
          .includes('strIngredient') && e[1] !== '' && e[1] !== null)
        .map((e) => e[1]));
      setMealMeasure(Object.entries(Object.entries(responseMeals)[0])
        .filter((e) => e[0]
          .includes('strMeasure') && e[1] !== '' && e[1] !== null)
        .map((e) => e[1]));
      setMealVideoId(responseMeals.meals[0].strYoutube.split('=')[1]);
      console.log(responseMeals);
    };
    requestApi();
  }, [setApiMeal, setMealsIngredients, props]);

  return (
    <div>
      <img
        src={ apiMeal.strMealThumb }
        alt={ apiMeal.strMeal }
        data-testid="recipe-photo"
        width="300"
      />
      <h1 data-testid="recipe-title">
        {apiMeal.strMeal}
      </h1>
      <h3 data-testid="recipe-category">
        {apiMeal.strCategory}
      </h3>
      {
        mealsIngredients.map((ingredient, index) => (
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {`${ingredient} - ${mealMeasure[index]} `}
          </p>
        ))
      }
      <p data-testid="instructions">
        {apiMeal.strInstructions}
      </p>
      <iframe
        width="560"
        height="315"
        src={ `https://www.youtube.com/embed/${mealVideoId}?controls=1` }
        title="YouTube video player"
        data-testid="video"
        name="Vídeo"
      />
    </div>
  );
}

Meals.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;
