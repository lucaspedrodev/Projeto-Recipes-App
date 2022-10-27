import React, { useState, useEffect } from 'react';
import getCocktails from '../fetch/drinkAPI';

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [drinksCat, setDrinksCat] = useState([]);

  useEffect(() => {
    const getCocktail = async () => {
      const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const requestJson = await request.json();
      setDrinks(requestJson.drinks.slice(0, Number('12')));
    };
    const getDrinkCategories = async () => {
      const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const requestJson = await request.json();
      setDrinksCat(requestJson.drinks.slice(0, Number('5')));
    };
    getCocktail();
    getDrinkCategories();
  }, []);

  const handleFilte2 = async (st) => {
    const get = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${st}`);
    const getJson = await get.json();
    return getJson.drinks;
  };
  const allFilter2 = async () => {
    const result3 = await getCocktails();
    const results = [];
    for (let i = 0; i < Number('12'); i += 1) {
      if (result3[i] !== undefined) {
        results.push(result3[i]);
      }
    }
    setDrinks(results);
  };
  const handleFilter2 = async (targets) => {
    const result1 = await handleFilte2(targets.value);
    const results = [];
    if (!targets.checked) {
      await allFilter2();
    } else {
      for (let i = 0; i < Number('12'); i += 1) {
        if (result1[i] !== undefined) {
          results.push(result1[i]);
        }
      }
      setDrinks(results);
    }
  };

  return (
    <div>
      <div>
        {drinksCat.map((element, i) => (
          <label htmlFor="check" key={ i }>
            <input
              key={ i }
              type="checkbox"
              value={ element.strCategory }
              data-testid={ `${element.strCategory}-category-filter` }
              onClick={ ({ target }) => handleFilter2(target) }
            />
            {element.strCategory}
          </label>
        ))}
        <label htmlFor="check">
          <input
            type="checkbox"
            data-testid="All-category-filter"
            onClick={ () => allFilter2() }
          />
          Todos
        </label>
      </div>
      {
        drinks.map((element, i) => (
          <div key={ i } data-testid={ `${i}-recipe-card` }>
            <h1 data-testid={ `${i}-card-name` }>{element.strDrink}</h1>
            <img
              src={ element.strDrinkThumb }
              data-testid={ `${i}-card-img` }
              alt={ element.strDrink }
            />
          </div>
        ))
      }
    </div>
  );
}
