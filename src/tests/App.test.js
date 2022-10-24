import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente Footer', () => {
  test('Farewell, front-end', () => {
    const history = renderWithRouter(<App />);
    const drink = screen.getByRole('img', { name: /drink icon/i });
    const meal = screen.getByRole('img', { name: /meal icon/i });
    const pathName = history.location;

    expect(drink).toBeInTheDocument();
    expect(meal).toBeInTheDocument();

    userEvent.click(drink);
    expect(pathName).toBe('/drinks');
    userEvent.click(meal);
    expect(pathName).toBe('/meals');
  });
});
