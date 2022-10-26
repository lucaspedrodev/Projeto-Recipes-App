// import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Meals from '../components/Meals';
import Drink from '../components/Drink';

export default function RecipeDetails(props) {
  const history = useHistory();

  if (history.location.pathname.includes('meals')) {
    return (
      <Meals props={ props } />
    );
  }
  return (
    <Drink props={ props } />
  );
}
