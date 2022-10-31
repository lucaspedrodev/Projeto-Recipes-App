import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import localStorageInProgressRecipes from '../serviceLocal';
import './InProgress.css';

export default function MealInProgress() {
  const [mealData, setMealData] = useState([]);
  const [mealIngredients, setMealIngredients] = useState([]);

  const history = useHistory();
  const id = history.location.pathname.split('/')[2];

  const getLocal = localStorageInProgressRecipes();

  if (!Object.keys(getLocal.meals).includes(id)) {
    getLocal.meals[id] = [];
  }

  useEffect(() => {
    const requestApi = async () => {
      const endPoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await (await fetch(endPoint)).json();
      setMealData(response.meals[0]);

      const Ingredients = Object.entries(response.meals[0])
        .filter((e) => e[0].includes('strIngredient') && e[1] !== '' && e[1] !== null)
        .map((e) => e[1]);

      setMealIngredients(Ingredients);
    };
    requestApi();
  }, [id]);

  const handleCheckbox = (target, element) => {
    if (target.checked) {
      target.parentNode.className = 'scratched';
      getLocal.meals[id] = [...getLocal.meals[id], element];
      localStorage.setItem('inProgressRecipes', JSON.stringify(getLocal));
    } else {
      target.parentNode.className = '';
      const arrayLocalId = [...getLocal.meals[id]];
      const index = arrayLocalId.indexOf(element);
      arrayLocalId.splice(index, 1);
      getLocal.meals[id] = arrayLocalId;
      localStorage.setItem('inProgressRecipes', JSON.stringify(getLocal));
    }
  };

  return (
    <main>
      <img
        src={ mealData.strMealThumb }
        alt={ mealData.strMeal }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{mealData.strMeal}</h1>
      <p data-testid="recipe-category">{mealData.strCategory}</p>
      <button type="button" data-testid="share-btn">share</button>
      <button type="button" data-testid="favorite-btn">favorite</button>
      <div data-testid="instructions">
        {mealIngredients.map((e, index) => (
          <label
            htmlFor={ e }
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            className={ getLocal.meals[id].includes(e) ? 'scratched' : '' }
          >
            <input
              type="checkbox"
              id={ e }
              checked={ getLocal.meals[id].includes(e) || onchange }
              onClick={ ({ target }) => handleCheckbox(target, e) }
            />
            <p>{e}</p>
          </label>
        ))}
      </div>
      <button type="button" data-testid="finish-recipe-btn">finish</button>
    </main>
  );
}
