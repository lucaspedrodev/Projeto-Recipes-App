import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente Footer', () => {
  test('testa se aparece os botões na tela', () => {
    renderWithRouter(<App />);
    const drink = screen.getByRole('img', { name: /drink icon/i });
    const meal = screen.getByRole('img', { name: /meal icon/i });

    expect(drink).toBeInTheDocument();
    expect(meal).toBeInTheDocument();
  });

  test('testa se redireciona para a rota correta', () => {
    const { history } = renderWithRouter(<App />);

    const drink = screen.getByTestId('drinks-bottom-btn');
    const meal = screen.getByTestId('meals-bottom-btn');

    userEvent.click(drink);
    expect(history.location.pathname).toBe('/drinks');
    userEvent.click(meal);
    expect(history.location.pathname).toBe('/meals');
  });
});
