import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ButtonStartRecipe.css';

export default function ButtonStartRecipe(props) {
  const { id } = props;
  const history = useHistory();

  const getStorange = () => {
    let result = false;
    const local = JSON.parse(localStorage
      .getItem('inProgressRecipes')) ?? { meals: {}, drinks: {} };
    const mealsOrDrink = history.location.pathname.split('/')[1];
    if (local[mealsOrDrink] !== undefined
       && Object.keys(local[mealsOrDrink]).includes(id)) {
      result = true;
    }
    return result;
  };

  return (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-recipe-btn"
        onClick={ () => history.push(`${history.location.pathname}/in-progress`) }
      >
        {
          getStorange() === true ? 'Continue Recipe' : 'Start Recipe'
        }
      </button>
    </div>
  );
}

ButtonStartRecipe.propTypes = {
  id: PropTypes.string,
}.isRequired;
