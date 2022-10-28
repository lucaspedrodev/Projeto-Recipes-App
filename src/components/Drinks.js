import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [drinksCat, setDrinksCat] = useState([]);

  useEffect(() => {
    const getCocktail = async () => {
      const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const reponse = await (await fetch(endPoint)).json();
      setDrinks(reponse.drinks.slice(0, Number('12')));
    };
    const getDrinkCategories = async () => {
      const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const requestJson = await request.json();
      setDrinksCat(requestJson.drinks.slice(0, Number('5')));
    };
    getCocktail();
    getDrinkCategories();
  }, []);

  const allFilter2 = async () => {
    const endPoin = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const reponse = await (await fetch(endPoin)).json();
    setDrinks(reponse.drinks.slice(0, Number('12')));
  };

  const handleFilter2 = async (targets) => {
    const get = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${targets.value}`;
    const getJson = await (await fetch(get)).json();
    if (targets.checked) {
      setDrinks(getJson.drinks.slice(0, Number('12')));
    } else {
      await allFilter2();
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
          <Link key={ i } to={ `/drinks/${element.idDrink}` }>
            <div
              id={ element.idDrink }
              key={ i }
              className="classe"
              data-testid={ `${i}-recipe-card` }
            >
              <h1 data-testid={ `${i}-card-name` }>{element.strDrink}</h1>
              <img
                src={ element.strDrinkThumb }
                data-testid={ `${i}-card-img` }
                alt={ element.strDrink }
              />
            </div>
          </Link>
        ))
      }
    </div>
  );
}
