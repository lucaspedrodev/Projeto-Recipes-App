import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [apiMeal, setApiMeal] = useState([]);
  const [apiDrink, setApiDrink] = useState([]);
  const [typeRecipe, setTypeRecipe] = useState('');

  const contextValue = useMemo(() => ({
    apiMeal,
    setApiMeal,
    apiDrink,
    setApiDrink,
    typeRecipe,
    setTypeRecipe,
  }), [
    apiMeal,
    setApiMeal,
    apiDrink,
    setApiDrink,
    typeRecipe,
    setTypeRecipe,
  ]);

  return (<Context.Provider value={ contextValue }>{children}</Context.Provider>);
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
