import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../Context/Context';
import localStorageInProgressRecipes from '../serviceLocal';
import ButtonFavoriteRecipe from './ButtonFavoriteRecipe';
import ButtonShareRecipe from './ButtonShareRecipe';
import './InProgress.css';

export default function DrinkInProgress() {
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [drinkData, setDrinkData] = useState([]);

  const history = useHistory();
  const id = history.location.pathname.split('/')[2];

  const getLocal = localStorageInProgressRecipes();

  if (!Object.keys(getLocal.drinks).includes(id)) {
    getLocal.drinks[id] = [];
  }

  const { setApiDrink, setTypeRecipe } = useContext(Context);

  useEffect(() => {
    const requestApi = async () => {
      const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await (await fetch(endPoint)).json();
      setDrinkData(response.drinks[0]);
      setApiDrink(response.drinks[0]);

      const Ingredients = Object.entries(response.drinks[0])
        .filter((e) => e[0].includes('strIngredient') && e[1] !== '' && e[1] !== null)
        .map((e) => e[1]);
      setDrinkIngredients(Ingredients);
      setTypeRecipe('drink');
    };
    requestApi();
  }, [id, setApiDrink, setTypeRecipe]);

  const handleCheckbox = (target, element) => {
    if (target.checked) {
      target.parentNode.className = 'scratched';
      getLocal.drinks[id] = [...getLocal.drinks[id], element];
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
        src={ drinkData.strDrinkThumb }
        alt={ drinkData.strDrink }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{drinkData.strDrink}</h1>
      <p data-testid="recipe-category">{drinkData.strCategory}</p>
      <ButtonShareRecipe />
      <ButtonFavoriteRecipe />
      <div data-testid="instructions">
        {drinkIngredients.map((e, index) => (
          <label
            htmlFor={ index }
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            className={ getLocal.drinks[id].includes(e) ? 'scratched' : '' }
          >
            <input
              type="checkbox"
              id={ index }
              checked={ getLocal.drinks[id].includes(e) || onchange }
              onChange={ ({ target }) => handleCheckbox(target, e) }
            />
            <p>{e}</p>
          </label>
        ))}
      </div>
      <button type="button" data-testid="finish-recipe-btn">finish</button>
    </main>
  );
}
