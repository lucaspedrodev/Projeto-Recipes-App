// import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Meals from '../components/Meals';
import Drink from '../components/Drink';
import RecommendationMeals from '../components/RecommendationMeals';
import RecommendationDrink from '../components/RecommendationDrink';
import ButtonStartRecipe from '../components/ButtonStartRecipe';

export default function RecipeDetails(props) {
  const { match: { params: { id } } } = props;

  const history = useHistory();

  if (history.location.pathname.includes('meals')) {
    return (
      <>
        <Meals props={ props } />
        <RecommendationDrink />
        <ButtonStartRecipe id={ id } />
      </>
    );
  }
  return (
    <>
      <Drink props={ props } />
      <RecommendationMeals />
      <ButtonStartRecipe id={ id } />
    </>
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;
