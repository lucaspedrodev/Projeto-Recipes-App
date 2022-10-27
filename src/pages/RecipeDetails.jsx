// import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Meal from '../components/Meal';
import Drink from '../components/Drink';

export default function RecipeDetails(props) {
  const history = useHistory();

  if (history.location.pathname.includes('meals')) {
    return (
      <Meal props={ props } />
    );
  }
  return (
    <Drink props={ props } />
  );
}
