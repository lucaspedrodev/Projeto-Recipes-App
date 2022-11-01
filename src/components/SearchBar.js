import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function SearchBar() {
  const {
    inputFIlter,
    handleInputFilter,
    handleFilterIngredient,
    handleFilterName,
    handleFilterFIrstLetter,
    radioIngredient,
    radioName,
    radioFl,
    setMealsFilterAPi,
  } = useContext(Context);
  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
        value={ inputFIlter }
        onChange={ ({ target }) => handleInputFilter(target.value) }
      />
      <label htmlFor="ingredientSearch">
        Ingredient
        <input
          data-testid="ingredient-search-radio"
          name="radioButton"
          type="radio"
          id="ingredientSearch"
          checked={ radioIngredient }
          onChange={ ({ target }) => handleFilterIngredient(target.checked) }
        />
      </label>
      <label htmlFor="nameSearch">
        Name
        <input
          data-testid="name-search-radio"
          name="radioButton"
          type="radio"
          id="nameSearch"
          checked={ radioName }
          onChange={ ({ target }) => handleFilterName(target.checked) }
        />
      </label>
      <label htmlFor="firstLetterSearch">
        First Letter
        <input
          data-testid="first-letter-search-radio"
          name="radioButton"
          type="radio"
          id="firstLetterSearch"
          checked={ radioFl }
          onChange={ ({ target }) => handleFilterFIrstLetter(target.checked) }
        />
      </label>
      <button type="button" data-testid="exec-search-btn" onClick={ setMealsFilterAPi }>
        SEARCH
      </button>
    </div>
  );
}
