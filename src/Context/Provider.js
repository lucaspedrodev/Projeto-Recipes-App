import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Context from './Context';

export default function Provider({ children }) {
  const [searchBarAppear, setSearchBarAppear] = useState(false);
  const [inputFIlter, setInputFIlter] = useState('');
  const [radioIngredient, setRadioIngredient] = useState(false);
  const [radioName, setRadioName] = useState(false);
  const [radioFl, setRadioFl] = useState(false);

  const [ingredientsApi, setIngredientsApi] = useState([]);
  const [ingredientsApiName, setIngredientsApiName] = useState([]);
  const [ingredientsApiFl, setIngredientsApiFl] = useState([]);
  const history = useHistory();

  const appearSearchBar = useCallback(() => {
    setSearchBarAppear(!searchBarAppear);
  }, [searchBarAppear]);

  const handleInputFilter = (string) => {
    setInputFIlter(string);
  };
  const handleFilterIngredient = (ingredient) => {
    setRadioIngredient(ingredient);
  };
  const handleFilterName = (name) => {
    setRadioName(name);
  };
  const handleFilterFIrstLetter = (firstLetter) => {
    setRadioFl(firstLetter);
  };

  const fetchIngredients = useCallback(async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputFIlter}`;
    const response = await fetch(url);
    const mealsData = await response.json();
    if (mealsData.meals.length === 1) {
      history.push(`/meals/${mealsData.meals[0].idMeal}`);
    }
    setIngredientsApi(mealsData);
  }, [history, inputFIlter]);

  const fetchIngredientsName = useCallback(async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFIlter}`;
    const response = await fetch(url);
    const mealsData = await response.json();
    if (mealsData.meals.length === 1) {
      history.push(`/meals/${mealsData.meals[0].idMeal}`);
    }
    setIngredientsApiName(mealsData);
  }, [history, inputFIlter]);

  const fetchIngredientsFirstLetter = useCallback(async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFIlter}`;
    const response = await fetch(url);
    const mealsData = await response.json();
    if (mealsData.meals.length === 1) {
      history.push(`/meals/${mealsData.meals[0].idMeal}`);
    }
    setIngredientsApiFl(mealsData);
  }, [history, inputFIlter]);

  const fetchDrinkIngr = useCallback(async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputFIlter}`;
    const response = await fetch(url);
    const drinksData = await response.json();
    if (drinksData.drinks.length === 1) {
      history.push(`/drinks/${drinksData.drinks[0].idDrink}`);
    }
    setIngredientsApi(drinksData);
  }, [history, inputFIlter]);

  const fetchDrinkName = useCallback(async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputFIlter}`;
    const response = await fetch(url);
    const drinksData = await response.json();
    if (drinksData.drinks.length === 1) {
      history.push(`/drinks/${drinksData.drinks[0].idDrink}`);
    }
    setIngredientsApiName(drinksData);
  }, [history, inputFIlter]);

  const fetchDrinkFl = useCallback(async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputFIlter}`;
    const response = await fetch(url);
    const drinksData = await response.json();
    if (drinksData.drinks.length === 1) {
      history.push(`/drinks/${drinksData.drinks[0].idDrink}`);
    }
    setIngredientsApiFl(drinksData);
  }, [history, inputFIlter]);

  const setDrinksFilterAPi = useCallback(() => {
    const route = history.location.pathname;
    if (route === '/drinks' && radioIngredient === true) {
      fetchDrinkIngr();
    }
    if (route === '/drinks' && radioName === true) {
      fetchDrinkName();
    }
    if (route === '/drinks' && radioFl === true) {
      if (inputFIlter.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      fetchDrinkFl();
    }
  }, [
    fetchDrinkFl,
    fetchDrinkIngr,
    fetchDrinkName,
    history.location.pathname,
    inputFIlter.length,
    radioFl,
    radioIngredient,
    radioName,
  ]);

  const setMealsFilterAPi = useCallback(() => {
    const route = history.location.pathname;
    if (route === '/meals' && radioIngredient === true) {
      fetchIngredients();
    }
    if (route === '/meals' && radioName === true) {
      fetchIngredientsName();
    }
    if (route === '/meals' && radioFl === true) {
      if (inputFIlter.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      fetchIngredientsFirstLetter();
    }
    setDrinksFilterAPi();
  }, [
    fetchIngredients,
    fetchIngredientsFirstLetter,
    fetchIngredientsName,
    history.location.pathname,
    inputFIlter.length,
    radioFl,
    radioIngredient,
    radioName,
    setDrinksFilterAPi,
  ]);

  const contextValue = useMemo(
    () => ({
      searchBarAppear,
      appearSearchBar,
      inputFIlter,
      handleInputFilter,
      handleFilterIngredient,
      handleFilterName,
      handleFilterFIrstLetter,
      radioIngredient,
      radioName,
      radioFl,
      setMealsFilterAPi,
      ingredientsApi,
      ingredientsApiName,
      ingredientsApiFl,
      setDrinksFilterAPi,
    }),
    [
      searchBarAppear,
      appearSearchBar,
      inputFIlter,
      radioIngredient,
      radioName,
      radioFl,
      setMealsFilterAPi,
      ingredientsApi,
      ingredientsApiName,
      ingredientsApiFl,
      setDrinksFilterAPi,
    ],
  );

  return <Context.Provider value={ contextValue }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
