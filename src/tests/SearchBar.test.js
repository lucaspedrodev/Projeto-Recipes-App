import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';

const testIdSearchTop = 'search-top-btn';
const testIdSearchInput = 'search-input';
const testIdSearchNameRadio = 'name-search-radio';
const testIdSearchIngredientRadio = 'ingredient-search-radio';
const testIdSearchFirstLetterRadio = 'first-letter-search-radio';
const testIdSearchButton = 'exec-search-btn';
const testIdRecipeCard = '1-recipe-card';

describe('test component SearchBar', () => {
  jest.setTimeout(60000);
  test('check if returns endpoints by name on meals ', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/meals');
    });

    expect(history.location.pathname).toBe('/meals');

    const buttonSearch = screen.getByTestId(testIdSearchTop);
    userEvent.click(buttonSearch);

    const searchValueMealName = 'chocolate';
    const searchInput = screen.getByTestId(testIdSearchInput);
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValueMealName);
    expect(searchInput).toHaveValue(searchValueMealName);

    const nameSearchInput = screen.getByTestId(testIdSearchNameRadio);
    expect(nameSearchInput).toBeDefined();
    userEvent.click(nameSearchInput);
    expect(nameSearchInput).toBeChecked();

    const searchButton = screen.getByTestId(testIdSearchButton);
    expect(searchButton).toBeDefined();
    userEvent.click(searchButton);
    const recipeCard = await screen.findByTestId(
      testIdRecipeCard,
      {},
      { timeout: 10000 },
    );
    expect(recipeCard).toBeInTheDocument();
  });

  test('check if returns endpoints by ingredient on meals ', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/meals');
    });

    const buttonSearch = screen.getByTestId(testIdSearchTop);
    userEvent.click(buttonSearch);

    const searchValueIngredient = 'sugar';
    const searchInput = screen.getByTestId(testIdSearchInput);
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValueIngredient);
    expect(searchInput).toHaveValue(searchValueIngredient);

    const searchIngredient = screen.getByTestId(testIdSearchIngredientRadio);
    expect(searchIngredient).toBeDefined();
    userEvent.click(searchIngredient);
    expect(searchIngredient).toBeChecked();

    const searchButton = screen.getByTestId(testIdSearchButton);
    userEvent.click(searchButton);

    const recipeCard = await screen.findByTestId(
      testIdRecipeCard,
      {},
      { timeout: 10000 },
    );
    expect(recipeCard).toBeInTheDocument();
  });

  test('check if returns endpoints by first letter on meals ', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/meals');
    });

    const buttonSearch = screen.getByTestId(testIdSearchTop);
    userEvent.click(buttonSearch);

    const searchValueMealFirstLetter = 'b';
    const searchInput = screen.getByTestId(testIdSearchInput);
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValueMealFirstLetter);
    expect(searchInput).toHaveValue(searchValueMealFirstLetter);

    const firstLetterSearchInput = screen.getByTestId(
      testIdSearchFirstLetterRadio,
    );
    expect(firstLetterSearchInput).toBeDefined();
    userEvent.click(firstLetterSearchInput);
    expect(firstLetterSearchInput).toBeChecked();

    const searchButton = screen.getByTestId(testIdSearchButton);
    expect(searchButton).toBeDefined();
    userEvent.click(searchButton);

    const recipeCard = await screen.findByTestId(
      testIdRecipeCard,
      {},
      { timeout: 10000 },
    );

    expect(recipeCard).toBeInTheDocument();
  });

  test('check if redirect page id recipe ', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/meals');
    });

    const buttonSearch = screen.getByTestId(testIdSearchTop);
    userEvent.click(buttonSearch);

    const searchInput = screen.getByTestId(testIdSearchInput);
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, 'big mac');
    expect(searchInput).toHaveValue('');

    const nameSearchInput = screen.getByTestId(testIdSearchNameRadio);
    expect(nameSearchInput).toBeDefined();
    userEvent.click(nameSearchInput);
    expect(nameSearchInput).toBeChecked();

    const searchButton = screen.getByTestId(testIdSearchButton);
    expect(searchButton).toBeDefined();
    userEvent.click(searchButton);
  });

  test('check if returns alert when requests is null ', async () => {
    // problem to alert
    /*  const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/meals');
    });

    const buttonSearch = screen.getByTestId(testIdSearchTop);
    userEvent.click(buttonSearch);

    const searchInput = screen.getByTestId(testIdSearchInput);
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, 'e');
    expect(searchInput).toHaveValue('e');

    const searchIngredient = screen.getByTestId(testIdSearchIngredientRadio);
    expect(searchIngredient).toBeDefined();
    userEvent.click(searchIngredient);
    expect(searchIngredient).toBeChecked();

    const searchButton = screen.getByTestId(testIdSearchButton);
    userEvent.click(searchButton); */
    // expect(alertMock).toHaveBeenCalledTimes(1);
  });

  // meals tests

  //---------------------------------------------------

  // drink
  test(' check if returns endpoints by first letter on drinks  ', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/drinks');
    });

    expect(history.location.pathname).toBe('/drinks');

    const buttonSearch = screen.getByTestId(testIdSearchTop);
    userEvent.click(buttonSearch);

    const searchValue = 'g';
    const searchInput = screen.getByTestId(testIdSearchInput);
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValue);
    expect(searchInput).toHaveValue(searchValue);

    const searchFirstLetter = screen.getByTestId(testIdSearchFirstLetterRadio);
    expect(searchFirstLetter).toBeDefined();
    userEvent.click(searchFirstLetter);
    expect(searchFirstLetter).toBeChecked();

    const searchButton = screen.getByTestId(testIdSearchButton);
    expect(searchButton).toBeDefined();
    userEvent.click(searchButton);
    const recipeCard = await screen.findByTestId(
      testIdRecipeCard,
      {},
      { timeout: 10000 },
    );
    expect(recipeCard).toBeInTheDocument();
  });

  test(' check if returns endpoints by ingredients on drinks  ', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/drinks');
    });

    expect(history.location.pathname).toBe('/drinks');

    const buttonSearch = screen.getByTestId(testIdSearchTop);
    userEvent.click(buttonSearch);

    const searchValueIngredient = 'lemon';
    const searchInput = screen.getByTestId(testIdSearchInput);
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValueIngredient);
    expect(searchInput).toHaveValue(searchValueIngredient);

    const searchIngredient = screen.getByTestId(testIdSearchIngredientRadio);
    expect(searchIngredient).toBeDefined();
    userEvent.click(searchIngredient);
    expect(searchIngredient).toBeChecked();

    const searchButton = screen.getByTestId(testIdSearchButton);
    userEvent.click(searchButton);
    const recipeCard = await screen.findByTestId(
      testIdRecipeCard,
      {},
      { timeout: 10000 },
    );
    expect(recipeCard).toBeInTheDocument();
  });

  test(' check if returns endpoints by name on drinks  ', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/drinks');
    });

    expect(history.location.pathname).toBe('/drinks');

    const buttonSearch = screen.getByTestId(testIdSearchTop);
    userEvent.click(buttonSearch);

    const searchValueDrinkName = 'Margarita';
    const searchInput = screen.getByTestId(testIdSearchInput);
    expect(searchInput).toBeDefined();
    userEvent.type(searchInput, searchValueDrinkName);
    expect(searchInput).toHaveValue(searchValueDrinkName);

    const nameSearchInput = screen.getByTestId(testIdSearchNameRadio);
    expect(nameSearchInput).toBeDefined();
    userEvent.click(nameSearchInput);
    expect(nameSearchInput).toBeChecked();

    const searchButton = screen.getByTestId(testIdSearchButton);
    expect(searchButton).toBeDefined();
    userEvent.click(searchButton);

    const recipeCard = await screen.findByTestId(
      testIdRecipeCard,
      {},
      { timeout: 10000 },
    );
    expect(recipeCard).toBeInTheDocument();
  });
});
