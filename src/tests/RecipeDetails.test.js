import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testando a o RecipeDetails', () => {
  jest.setTimeout(30000);
  test('Se a api de meals:id é chamado e as recomendações de bebidas', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/meals/52771');
    });

    const ingrediente = await screen.findByTestId('1-ingredient-name-and-measure', {}, { timeout: 30000 });
    expect(ingrediente).toBeInTheDocument();

    const recomend = await screen.findByTestId('1-recommendation-card', {}, { timeout: 30000 });
    expect(recomend).toBeInTheDocument();
  });

  jest.setTimeout(30000);
  test('Testando se a api de drinks:id é chamado e as recomendações de comida', async () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/drinks/178319');
    });

    const ingrediente = await screen.findByTestId('1-ingredient-name-and-measure', {}, { timeout: 30000 });
    expect(ingrediente).toBeInTheDocument();

    const recomend = await screen.findByTestId('1-recommendation-card', {}, { timeout: 30000 });
    expect(recomend).toBeInTheDocument();
  });
});
