import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import './MealsAndDrick.css';
import RecommendationMeals from './RecommendationMeals';
import ButtonStartRecipe from './ButtonStartRecipe';

export default function Drink(props) {
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const [drinkMeasure, setDrinkMeasure] = useState([]);

  const {
    apiDrink,
    setApiDrink,
  } = useContext(Context);

  useEffect(() => {
    const { props: { match: { params: { id } } } } = props;

    const requestApi = async () => {
      const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const response = await request.json();

      setApiDrink(response.drinks[0]);

      const Ingredients = Object.entries(response.drinks[0])
        .filter((e) => e[0].includes('strIngredient') && e[1] !== '' && e[1] !== null)
        .map((e) => e[1]);

      const Measure = Object.entries(response.drinks[0])
        .filter((e) => e[0].includes('strMeasure') && e[1] !== '' && e[1] !== null)
        .map((e) => e[1]);

      setDrinksIngredients(Ingredients);
      setDrinkMeasure(Measure);
    };
    requestApi();
  }, [setApiDrink, setDrinksIngredients, props]);

  return (
    <>
      <header className="Recipe-header">
        <img
          src={ apiDrink.strDrinkThumb }
          alt={ apiDrink.strDrink }
          data-testid="recipe-photo"
          className="recipe-photo"
        />
        <h1 data-testid="recipe-title" className="recipe-title">
          {apiDrink.strDrink}
        </h1>
      </header>
      <main className="Foods-recipe-main">
        <h3 data-testid="recipe-category" className="recipe-category">
          {apiDrink.strAlcoholic}
        </h3>
        <h1 className="recipe-titles">Ingredients</h1>
        <div className="Foods-recipe-ingredient">
          <ul>
            {drinksIngredients.map((drinkIngredient, index) => (
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                {`${drinkIngredient} - ${drinkMeasure[index]} `}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="recipe-titles">Instructions</h1>
        <div className="Foods-recipe-instructions">
          <p data-testid="instructions">
            {apiDrink.strInstructions}
          </p>
        </div>
        <RecommendationMeals />
      </main>
      <ButtonStartRecipe />
    </>
  );
}

Drink.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;
