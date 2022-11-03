import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DoneRecipesCard from '../components/DoneRecipesCard';

export default function DoneRecipes() {
  const [localStorageRecipes, setLocalStorageRecipes] = useState([]);
  const [allDoneRecipes, setAllDoneRecipes] = useState([]);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setLocalStorageRecipes(recipes);
    setAllDoneRecipes(recipes);
  }, []);

  const filterByValue = ({ target }) => {
    const { value } = target;
    if (value === 'buttonMeal') {
      const filterMeals = localStorageRecipes.filter((e) => e.type.includes('meal'));
      setLocalStorageRecipes(filterMeals);
    } else if (value === 'buttonDrink') {
      const filterDrinks = localStorageRecipes.filter((e) => e.type.includes('drink'));
      setLocalStorageRecipes(filterDrinks);
    } else {
      setLocalStorageRecipes(allDoneRecipes);
    }
  };

  return (
    <main>
      <Header />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        value="buttonAll"
        onClick={ filterByValue }
      >
        All
      </button>
      <button
        data-testid="filter-by-meal-btn"
        type="button"
        value="buttonMeal"
        onClick={ filterByValue }
      >
        Meals
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        value="buttonDrink"
        onClick={ filterByValue }
      >
        Drinks
      </button>
      <div>
        {localStorageRecipes?.map((recipe, index) => (
          <DoneRecipesCard key={ recipe.id } doneRecipe={ recipe } index={ index } />
        ))}
      </div>
    </main>
  );
}
