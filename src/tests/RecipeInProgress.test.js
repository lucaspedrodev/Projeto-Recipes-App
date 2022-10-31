import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testando o RecipeInProgress', () => {
  jest.setTimeout(60000);
  test('Meal in progress', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/meals/52771/in-progress');
    });

    const findCheck01 = await screen.findByTestId('0-ingredient-step', {}, { timeout: 10000 });

    expect(findCheck01).toBeInTheDocument();
  });

  jest.setTimeout(60000);
  test('Drink in progress', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/drinks/178319/in-progress');
    });

    const findCheck01 = await screen.findByTestId('0-ingredient-step', {}, { timeout: 10000 });

    expect(findCheck01).toBeInTheDocument();
  });
});
