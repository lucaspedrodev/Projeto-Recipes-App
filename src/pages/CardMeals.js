import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function CardMeals() {
  const { recipesData } = useContext(Context);

  return (
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
  );
}
