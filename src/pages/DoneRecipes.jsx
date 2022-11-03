import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DoneRecipesCard from '../components/DoneRecipesCard';
import './DoneRecipes.css';

import All from './images/All.svg';
import foods from './images/foods.svg';
import drinks from './images/drinks.svg';

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
    <>
      <Header />
      <div className="Done__buttons__container">
        <div className="Done__label">
          <button
            data-testid="filter-by-all-btn"
            type="button"
            name="all"
            value="buttonAll"
            id="all"
            onClick={ filterByValue }
            className="Recipes__buttons"
          >
            <img src={ All } alt="all" />
          </button>
          <p>All</p>
        </div>
        <div className="Done__label">
          <button
            data-testid="filter-by-meal-btn"
            type="button"
            value="buttonMeal"
            onClick={ filterByValue }
            className="Recipes__buttons"
          >
            <img src={ foods } alt="foods" />
          </button>
          <p>Food</p>
        </div>
        <div className="Done__label">
          <button
            data-testid="filter-by-drink-btn"
            type="button"
            value="buttonDrink"
            onClick={ filterByValue }
            className="Recipes__buttons"
          >
            <img src={ drinks } alt="drinks" />
          </button>
          <p>Drinks</p>
        </div>
      </div>
      <div>
        {localStorageRecipes?.map((recipe, index) => (
          <DoneRecipesCard key={ recipe.id } doneRecipe={ recipe } index={ index } />
        ))}
      </div>
    </>
  );
}
