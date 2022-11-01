import React from 'react';
import { useHistory } from 'react-router-dom';
import DrinkInProgress from '../components/DrinkInProgress';
import MealInProgress from '../components/MealInProgress';

export default function RecipeInProgress() {
  const history = useHistory();

  if (history.location.pathname.includes('meals')) {
    return (
      <MealInProgress />
    );
  }
  return (
    <DrinkInProgress />
  );
}
