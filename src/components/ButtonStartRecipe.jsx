import React from 'react';
import './ButtonStartRecipe.css';

export default function ButtonStartRecipe() {
  return (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-recipe-btn"
      >
        Continue Recipe
      </button>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-recipe-btn"
      >
        Start Recipe
      </button>
    </div>
  );
}
