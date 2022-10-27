import React from 'react';
import PropTypes from 'prop-types';
import './ButtonStartRecipe.css';

export default function ButtonStartRecipe() {
  // const { id } = props;
  // const localDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  // const localInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  // if (localDoneRecipes !== null) {
  //   const findId = localDoneRecipes.filter((e) => e.id === id).length > 0;
  //   setBtn(findId);
  // }

  // if (localInProgressRecipes !== null) {
  //   const findIdDrinks = Object.keys(localInProgressRecipes.drinks).includes(id);
  //   const findIdMeals = Object.keys(localInProgressRecipes.meals).includes(id);

  //   setBtnMsg(findIdDrinks || findIdMeals);
  // }

  return (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-recipe-btn"
      >
        Start Recipe
      </button>
    </div>
  );
}

ButtonStartRecipe.propTypes = {
  id: PropTypes.string,
}.isRequired;
