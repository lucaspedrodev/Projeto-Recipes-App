import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';

describe('test component SearchBar', () => {
  test('check if returns endpoints on meals ', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/meals');
    });

    expect(history.location.pathname).toBe('/meals');

    const buttonSearch = screen.getByTestId('search-top-btn');
    userEvent.click(buttonSearch);

    const searchValue = 'cheese';
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValue);
    expect(searchInput).toHaveValue(searchValue);

    const nameSearchInput = screen.getByTestId('name-search-radio');
    expect(nameSearchInput).toBeDefined();

    const firstLetterSearchInput = screen.getByTestId(
      'first-letter-search-radio',
    );
    expect(firstLetterSearchInput).toBeDefined();

    const ingredientSearchInput = screen.getByTestId('ingredient-search-radio');
    expect(ingredientSearchInput).toBeDefined();
    userEvent.click(ingredientSearchInput);
    expect(ingredientSearchInput).toBeChecked();

    const searchButton = screen.getByTestId('exec-search-btn');
    expect(searchButton).toBeDefined();

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`;
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenLastCalledWith(url);
  });

  test('check if returns endpoints on drinks ', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/drinks');
    });

    expect(history.location.pathname).toBe('/drinks');

    const buttonSearch = screen.getByTestId('search-top-btn');
    userEvent.click(buttonSearch);

    const searchValue = 'Margarita';
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValue);
    expect(searchInput).toHaveValue(searchValue);

    const ingredientSearchInput = screen.getByTestId('ingredient-search-radio');
    expect(ingredientSearchInput).toBeDefined();
    userEvent.click(ingredientSearchInput);
    expect(ingredientSearchInput).toBeChecked();

    const searchButton = screen.getByTestId('exec-search-btn');
    expect(searchButton).toBeDefined();

    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`;
    expect().toHaveBeenCalledTimes(1);
    expect().toHaveBeenLastCalledWith(url);
  });
});
