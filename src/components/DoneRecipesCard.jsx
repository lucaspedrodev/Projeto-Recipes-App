import React from 'react';
import { Link } from 'react-router-dom';

export default function DoneRecipes(props) {
  const { recipesList } = props;
  return (
    <div>
      {recipesList.map((recipe, index) => (
        <main key={ recipe.id }>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ recipe.image }
              alt={ recipe.name }
            />
          </Link>
          <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>

          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipe.nationality}
            {' '}
            {recipe.category}
          </p>
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>

          <button data-testid={ `${index}-horizontal-share-btn` } type="button">
            Share
          </button>
          <p data-testid={ `${index}-${recipe.tags}-horizontal-tag` }>
            {recipe.tags}
          </p>
        </main>
      ))}
    </div>
  );
}
