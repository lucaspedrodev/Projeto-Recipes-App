import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './InProgress.css';

export default function DrinkInProgress() {
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [drinkData, setDrinkData] = useState([]);

  const history = useHistory();
  const id = history.location.pathname.split('/')[2];

  useEffect(() => {
    const requestApi = async () => {
      const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await (await fetch(endPoint)).json();
      setDrinkData(response.drinks[0]);

      const Ingredients = Object.entries(response.drinks[0])
        .filter((e) => e[0].includes('strIngredient') && e[1] !== '' && e[1] !== null)
        .map((e) => e[1]);
      setDrinkIngredients(Ingredients);
    };
    requestApi();
  }, [id]);

  const handleCheckbox = (target) => {
    if (target.checked) {
      target.parentNode.className = 'scratched';
    } else {
      target.parentNode.className = '';
    }
  };

  return (
    <main>
      <img
        src={ drinkData.strDrinkThumb }
        alt={ drinkData.strDrink }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{drinkData.strDrink}</h1>
      <p data-testid="recipe-category">{drinkData.strCategory}</p>
      <button type="button" data-testid="share-btn">share</button>
      <button type="button" data-testid="favorite-btn">favorite</button>
      <div data-testid="instructions">
        {drinkIngredients.map((e, index) => (
          <label
            htmlFor={ index }
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              type="checkbox"
              id={ index }
              onClick={ ({ target }) => handleCheckbox(target) }
            />
            <p>{e}</p>
          </label>
        ))}
      </div>
      <button type="button" data-testid="finish-recipe-btn">finish</button>
    </main>
  );
}
