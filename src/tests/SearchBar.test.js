import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';

describe('test component SearchBar', () => {
  jest.setTimeout(60000);
  test('check if returns endpoints on meals ', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/meals');
    });

    expect(history.location.pathname).toBe('/meals');

    const buttonSearch = screen.getByTestId('search-top-btn');
    userEvent.click(buttonSearch);

    const searchValueMealName = 'chocolate';
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValueMealName);
    expect(searchInput).toHaveValue(searchValueMealName);

    const nameSearchInputMe = screen.getByTestId('name-search-radio');
    expect(nameSearchInputMe).toBeDefined();
    userEvent.click(nameSearchInputMe);
    expect(nameSearchInputMe).toBeChecked();

    const searchButton = screen.getByTestId('exec-search-btn');
    expect(searchButton).toBeDefined();
    userEvent.click(searchButton);
    const recipeCard = await screen.findByTestId(
      '1-recipe-card',
      {},
      { timeout: 10000 },
    );
    expect(recipeCard).toBeInTheDocument();
    // --------------------------------------
    userEvent.clear(searchInput);

    const searchValueIngredient = 'sugar';
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValueIngredient);
    expect(searchInput).toHaveValue(searchValueIngredient);

    const searchIngredient = screen.getByTestId('ingredient-search-radio');
    expect(searchIngredient).toBeDefined();
    userEvent.click(searchIngredient);
    expect(searchIngredient).toBeChecked();
    userEvent.click(searchButton);

    expect(recipeCard).toBeInTheDocument();
    //-------------------------------------------
    userEvent.clear(searchInput);

    expect(recipeCard).toBeInTheDocument();

    const searchValueMealFirstLetter = 'b';
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValueMealFirstLetter);
    expect(searchInput).toHaveValue(searchValueMealFirstLetter);

    const nameSearchInput = screen.getByTestId('first-letter-search-radio');
    expect(nameSearchInput).toBeDefined();
    userEvent.click(nameSearchInput);
    expect(nameSearchInput).toBeChecked();

    expect(searchButton).toBeDefined();
    userEvent.click(searchButton);

    expect(recipeCard).toBeInTheDocument();
    //-------------------------------------------
    userEvent.clear(searchInput);
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, 'big mac');
    expect(searchInput).toHaveValue('big mac');

    expect(nameSearchInputMe).toBeDefined();
    userEvent.click(nameSearchInputMe);
    expect(nameSearchInputMe).toBeChecked();

    expect(searchButton).toBeDefined();
    userEvent.click(searchButton);

    expect(recipeCard).toBeInTheDocument();
  });
  // meals
  //---------------------------------------------------
  // drink
  test('check if returns endpoints on drinks ', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/drinks');
    });

    expect(history.location.pathname).toBe('/drinks');

    const buttonSearch = screen.getByTestId('search-top-btn');
    userEvent.click(buttonSearch);

    const searchValue = 'g';
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValue);
    expect(searchInput).toHaveValue(searchValue);

    const searchFirstLetter = screen.getByTestId('first-letter-search-radio');
    expect(searchFirstLetter).toBeDefined();
    userEvent.click(searchFirstLetter);
    expect(searchFirstLetter).toBeChecked();

    const searchButton = screen.getByTestId('exec-search-btn');
    expect(searchButton).toBeDefined();
    userEvent.click(searchButton);
    const recipeCard = await screen.findByTestId(
      '1-recipe-card',
      {},
      { timeout: 10000 },
    );
    expect(recipeCard).toBeInTheDocument();
    //------------------------------------------
    userEvent.clear(searchInput);

    const searchValueIngredient = 'lemon';
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValueIngredient);
    expect(searchInput).toHaveValue(searchValueIngredient);

    const searchIngredient = screen.getByTestId('ingredient-search-radio');
    expect(searchIngredient).toBeDefined();
    userEvent.click(searchIngredient);
    expect(searchIngredient).toBeChecked();
    userEvent.click(searchButton);

    expect(recipeCard).toBeInTheDocument();
    //---------------------------------------------------------
    userEvent.clear(searchInput);

    expect(recipeCard).toBeInTheDocument();

    const searchValueDrinkName = 'Margarita';
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValueDrinkName);
    expect(searchInput).toHaveValue(searchValueDrinkName);

    const nameSearchInput = screen.getByTestId('name-search-radio');
    expect(nameSearchInput).toBeDefined();
    userEvent.click(nameSearchInput);
    expect(nameSearchInput).toBeChecked();

    expect(searchButton).toBeDefined();
    userEvent.click(searchButton);

    expect(recipeCard).toBeInTheDocument();
  });
});
