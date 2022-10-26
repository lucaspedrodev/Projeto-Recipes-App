// import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Meals from '../components/Meals';
import Drink from '../components/Drink';
import RecommendationMeals from '../components/RecommendationMeals';
import RecommendationDrink from '../components/recommendationDrink';

export default function RecipeDetails(props) {
  const history = useHistory();

  if (history.location.pathname.includes('meals')) {
    return (
      <>
        <Meals props={ props } />
        <RecommendationDrink />
      </>
    );
  }
  return (
    <>
      <Drink props={ props } />
      <RecommendationMeals />
    </>
  );
}
