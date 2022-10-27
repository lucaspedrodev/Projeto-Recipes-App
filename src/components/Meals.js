import React, { useState, useEffect } from 'react';
import getMeals from '../fetch/mealAPI';

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [mealsCat, setMealsCat] = useState([]);

  useEffect(() => {
    const getMeal = async () => {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const requestJson = await request.json();
      setMeals(requestJson.meals.slice(0, Number('12')));
    };
    const getMealCategories = async () => {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const requestJson = await request.json();
      setMealsCat(requestJson.meals.slice(0, Number('5')));
    };
    getMeal();
    getMealCategories();
  }, []);

  const handleFilte = async (st) => {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${st}`);
    const getJson = await get.json();
    return getJson.meals;
  };

  const handleFilter = async (values) => {
    const result1 = await handleFilte(values);
    const results = [];
    for (let i = 0; i < Number('12'); i += 1) {
      if (result1[i] !== undefined) {
        results.push(result1[i]);
      }
    }
    setMeals(results);
  };

  const allFilter = async () => {
    const result3 = await getMeals();
    const results = [];
    for (let i = 0; i < Number('12'); i += 1) {
      if (result3[i] !== undefined) {
        results.push(result3[i]);
      }
    }
    setMeals(results);
  };

  return (
    <div>
      <div>
        {mealsCat.map((element, i) => (
          <button
            key={ i }
            type="button"
            value={ element.strCategory }
            data-testid={ `${element.strCategory}-category-filter` }
            onClick={ ({ target: { value } }) => handleFilter(value) }
          >
            {element.strCategory}
          </button>
        ))}
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => allFilter() }
        >
          Todos
        </button>
      </div>
      {meals.map((element, i) => (
        <div key={ i } data-testid={ `${i}-recipe-card` }>
          <h1 data-testid={ `${i}-card-name` }>{element.strMeal}</h1>
          <img
            src={ element.strMealThumb }
            data-testid={ `${i}-card-img` }
            alt={ element.strMeal }
          />
        </div>
      ))}
    </div>
  );
}
