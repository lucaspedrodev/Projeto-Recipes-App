import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const mockRecipes = [
  {
    id: '178359',
    type: 'drink',
    nationality: 'Brazilian',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Kiwi Martini',
    image:
      'https://www.thecocktaildb.com/images/media/drink/bmxmyq1630407098.jpg',
    doneDate: '29/10/2022',
    tags: ['Green', 'Sharp'],
  },
  {
    id: '52951',
    type: 'meal',
    nationality: '"Chinese"',
    category: 'Chicken',
    alcoholicOrNot: '',
    name: 'General Tso\'s Chicken',
    image: 'https://www.themealdb.com/images/media/meals/1529444113.jpg',
    doneDate: '30/10/2022',
    tags: [],
  },
];

const filterByAllBtn = 'filter-by-all-btn';
const filterByMealBtn = 'filter-by-meal-btn';
const filterByDrinkBtn = 'filter-by-drink-btn';
const DoneRecipesRoute = '/done-recipes';

describe('test  DoneRecipes page ', () => {
  test('checks if the elements exist on the screen', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push(DoneRecipesRoute);
    });

    expect(history.location.pathname).toBe(DoneRecipesRoute);

    const allButton = screen.getAllByTestId(filterByAllBtn);
    expect(allButton).toBeDefined();
    const mealButton = screen.getAllByTestId(filterByMealBtn);
    expect(mealButton).toBeDefined();
    const drinkButton = screen.getAllByTestId(filterByDrinkBtn);
    expect(drinkButton).toBeDefined();
  });

  test('', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push(DoneRecipesRoute);
    });

    expect(history.location.pathname).toBe(DoneRecipesRoute);
  });
});
