import React, { useContext } from 'react';
import Context from '../Context/Context';

import './SearchBar.css';

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
    <div className="SearchBar__container">
      <input
        data-testid="search-input"
        type="text"
        value={ inputFIlter }
        onChange={ ({ target }) => handleInputFilter(target.value) }
        className="Search__input"
        placeholder="Search"
      />
      <div className="Search__nav__container">
        <div>
          <label htmlFor="ingredientSearch" className="Search__label">
            <input
              data-testid="ingredient-search-radio"
              name="radioButton"
              type="radio"
              id="ingredientSearch"
              checked={ radioIngredient }
              onChange={ ({ target }) => handleFilterIngredient(target.checked) }
            />
            <span>Ingredient</span>
          </label>
          <label htmlFor="nameSearch" className="Search__label">
            <input
              data-testid="name-search-radio"
              name="radioButton"
              type="radio"
              id="nameSearch"
              checked={ radioName }
              onChange={ ({ target }) => handleFilterName(target.checked) }
            />
            <span>Name</span>
          </label>
          <label htmlFor="firstLetterSearch" className="Search__label">
            <input
              data-testid="first-letter-search-radio"
              name="radioButton"
              type="radio"
              id="firstLetterSearch"
              checked={ radioFl }
              onChange={ ({ target }) => handleFilterFIrstLetter(target.checked) }
            />
            <span>First Letter</span>
          </label>
        </div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ setMealsFilterAPi }
          className="Search__button"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}
