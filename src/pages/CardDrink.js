import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function Drinks() {
  const { recipesData } = useContext(Context);
  return (

    <main>
      {recipesData.map((recipe, index) => (
        <div key={ recipe.idDrink } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ recipe.strDrinkThumb }
            alt={ recipe.strDrink }
          />
          <p data-testid={ `${index}-card-name` }>{recipe.strDrink}</p>
        </div>
      ))}
    </main>

  );
}
