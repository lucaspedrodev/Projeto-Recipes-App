import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [mealsCat, setMealsCat] = useState([]);

  useEffect(() => {
    const getMeal = async () => {
      const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const reponse = await (await fetch(endPoint)).json();
      setMeals(reponse.meals.slice(0, Number('12')));
    };
    const getMealCategories = async () => {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const requestJson = await request.json();
      setMealsCat(requestJson.meals.slice(0, Number('5')));
    };
    getMeal();
    getMealCategories();
  }, []);

  const allFilter = async () => {
    const endPoin = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const reponse = await (await fetch(endPoin)).json();
    setMeals(reponse.meals.slice(0, Number('12')));
  };

  const handleFilter = async (targets) => {
    const get = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${targets.value}`;
    const getJson = await (await fetch(get)).json();
    if (targets.checked) {
      setMeals(getJson.meals.slice(0, Number('12')));
    } else {
      await allFilter();
    }
  };

  return (
    <div>
      <div>
        {mealsCat.map((element, i) => (
          <label htmlFor="check" key={ i }>
            <input
              key={ i }
              type="checkbox"
              value={ element.strCategory }
              data-testid={ `${element.strCategory}-category-filter` }
              onClick={ ({ target }) => handleFilter(target) }
            />
            {element.strCategory}
          </label>
        ))}
        <label htmlFor="check">
          <input
            type="checkbox"
            data-testid="All-category-filter"
            onClick={ () => allFilter() }
          />
          Todos
        </label>
      </div>
      {meals.map((element, i) => (
        <Link key={ i } to={ `/meals/${element.idMeal}` }>
          <div key={ i } data-testid={ `${i}-recipe-card` }>
            <h1 data-testid={ `${i}-card-name` }>{element.strMeal}</h1>
            <img
              src={ element.strMealThumb }
              data-testid={ `${i}-card-img` }
              alt={ element.strMeal }
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
