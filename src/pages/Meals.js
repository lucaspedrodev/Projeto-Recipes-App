import React, { useContext } from 'react';
import Header from '../components/Header';
import Context from '../Context/Context';

export default function Meals() {
  const { recipesData } = useContext(Context);
  return (
    <div>
      <Header />
      <main>
        {recipesData.map((recipe, index) => (
          <div key={ recipe.idMeal } data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ recipe.strMealThumb }
              alt={ recipe.strMeal }
            />
            <p data-testid={ `${index}-card-name` }>{recipe.strMeal}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
