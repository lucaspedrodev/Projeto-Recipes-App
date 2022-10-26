import React from 'react';
import propTypes from 'prop-types';
import getCocktails from '../fetch/drinkAPI';
import getMeals from '../fetch/mealAPI';
import getMealCategories from '../fetch/mealsCatAPI';
import getDrinkCategories from '../fetch/drinkCatAPI';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      drinks: [],
      pathName: '',
      catM: [],
      catD: [],
    };
  }

  async componentDidMount() {
    const { history } = this.props;
    const { pathname } = history.location;
    const result1 = await getMeals();
    const result2 = await getCocktails();
    const results1 = [];
    const results2 = [];
    const result3 = await getMealCategories();
    const result4 = await getDrinkCategories();
    const results3 = [];
    const results4 = [];
    for (let i = 0; i < Number('12'); i += 1) {
      results1.push(result1[i]);
      results2.push(result2[i]);
    }
    for (let i = 0; i < Number('5'); i += 1) {
      results3.push(result3[i]);
      results4.push(result4[i]);
    }
    this.setState({
      meals: results1,
      drinks: results2,
      pathName: pathname,
      catM: results3,
      catD: results4,
    });
  }

  async handleFilte(st) {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${st}`);
    const getJson = await get.json();
    return getJson.meals;
  }

  async handleFilter({ target }) {
    const { value } = target;
    const result1 = await this.handleFilte(value);
    const results = [];
    for (let i = 0; i < Number('12'); i += 1) {
      if (result1[i] !== undefined) {
        results.push(result1[i]);
      }
    }
    console.log(results);
    this.setState({
      meals: results,
    });
  }

  async handleFilte2(st) {
    const get = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${st}`);
    const getJson = await get.json();
    return getJson.drinks;
  }

  async handleFilter2({ target }) {
    const { value } = target;
    const result1 = await this.handleFilte2(value);
    const results = [];
    for (let i = 0; i < Number('12'); i += 1) {
      if (result1[i] !== undefined) {
        results.push(result1[i]);
      }
    }

    console.log(results);
    this.setState({
      drinks: results,
    });
  }

  allFilter = async () => {
    const result3 = await getMeals();
    const results = [];
    for (let i = 0; i < Number('12'); i += 1) {
      if (result3[i] !== undefined) {
        results.push(result3[i]);
      }
    }
    this.setState({
      meals: results,
    });
  };

  allFilter2 = async () => {
    const result3 = await getCocktails();
    const results = [];
    for (let i = 0; i < Number('12'); i += 1) {
      if (result3[i] !== undefined) {
        results.push(result3[i]);
      }
    }
    this.setState({
      drinks: results,
    });
  };

  render() {
    const { meals, drinks, pathName, catM, catD } = this.state;
    console.log(meals);
    if (pathName === '/meals') {
      return (
        <div>
          <div>
            {catM.map((element, i) => (
              <button
                key={ i }
                type="button"
                value={ element.strCategory }
                data-testid={ `${element.strCategory}-category-filter` }
                onClick={ (element2) => { this.handleFilter(element2); } }
              >
                {element.strCategory}
              </button>
            ))}
            <button
              type="button"
              data-testid="All-category-filter"
              onClick={ this.allFilter }
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
    return (
      <div>
        <div>
          {catD.map((element, i) => (
            <button
              key={ i }
              type="button"
              value={ element.strCategory }
              data-testid={ `${element.strCategory}-category-filter` }
              onClick={ (element3) => { this.handleFilter2(element3); } }
            >
              {element.strCategory}
            </button>
          ))}
          <button
            type="button"
            data-testid="All-category-filter"
            onClick={ this.allFilter2 }
          >
            Todos
          </button>
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
}

Recipes.propTypes = {
  history: propTypes.shape({ push: propTypes.func, location: propTypes.string,
  }).isRequired,
}.isRequired;

export default Recipes;
