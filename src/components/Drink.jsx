import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';

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
    <div>
      <img
        src={ apiDrink.strDrinkThumb }
        alt={ apiDrink.strDrink }
        data-testid="recipe-photo"
        className="img"
      />
      <p data-testid="instructions">
        {apiDrink.strInstructions}
      </p>
      <h1 data-testid="recipe-title">
        {apiDrink.strDrink}
      </h1>
      <h3 data-testid="recipe-category">
        {apiDrink.strAlcoholic}
      </h3>
      {
        drinksIngredients.map((drinkIngredient, index) => (
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {`${drinkIngredient} - ${drinkMeasure[index]} `}
          </p>
        ))
      }
    </div>
  );
}

Drink.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;
