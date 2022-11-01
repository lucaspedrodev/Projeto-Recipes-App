import React, { useState } from 'react';
import Header from '../components/Header';
import DoneRecipesCard from '../components/DoneRecipesCard';

export default function DoneRecipes() {
  const [localDoneRecipes, setLocalDoneRecipes] = useState();

  const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
  setLocalDoneRecipes(recipes);

  const filterByValue = ({ target }) => {
    const { value } = target;
    if (value === buttonMeal) {
      const filterMeals = testLocalStorage.filter((recipe) => recipe.type.includes(/meal/i));
      setLocalDoneRecipes(filterMeals);
    } else if (value === buttonDrink) {
      const filterDrinks = testLocalStorage.filter((recipe) => recipe.type.includes(/drink/i));
      setLocalDoneRecipes(filterDrinks);
    } else {
      setLocalDoneRecipes(testLocalStorage);
    }
  };

  return (
    <main>
      <Header />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        value="buttonAll"
        onChange={ filterByValue }
      >
        All
      </button>
      <button
        data-testid="filter-by-meal-btn"
        type="button"
        value="buttonMeal"
        onChange={ filterByValue }
      >
        Meals
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        value="buttonDrink"
        onChange={ filterByValue }
      >
        Drinks
      </button>
      <div>
        {localDoneRecipes.map((recipe, index) => (
          <DoneRecipesCard key={ recipe.id } recipesList={ recipe } index={ index } />
        ))}
      </div>
    </main>
  );
}
