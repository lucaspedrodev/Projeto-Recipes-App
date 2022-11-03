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
    const { alt } = target;
    if (alt === 'buttonMeal') {
      const filterMeals = localStorageRecipes.filter((e) => e.type.includes('meal'));
      setLocalStorageRecipes(filterMeals);
    } else if (alt === 'buttonDrink') {
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
            value="buttonAll"
            onClick={ (event) => filterByValue(event) }
            className="Recipes__buttons"
          >
            <img src={ All } alt="buttonAll" />
          </button>
          <p>All</p>
        </div>
        <div className="Done__label">
          <button
            data-testid="filter-by-meal-btn"
            type="button"
            value="buttonMeal"
            onClick={ (event) => filterByValue(event) }
            className="Recipes__buttons"
          >
            <img src={ foods } alt="buttonMeal" />
          </button>
          <p>Food</p>
        </div>
        <div className="Done__label">
          <button
            data-testid="filter-by-drink-btn"
            type="button"
            value="buttonDrink"
            onClick={ (event) => filterByValue(event) }
            className="Recipes__buttons"
          >
            <img src={ drinks } alt="buttonDrink" />
          </button>
          <p>Drinks</p>
        </div>
      </div>
      <div className="Card__Done__container">
        {localStorageRecipes?.map((recipe, index) => (
          <DoneRecipesCard key={ recipe.id } doneRecipe={ recipe } index={ index } />
        ))}
      </div>
    </>
  );
}
