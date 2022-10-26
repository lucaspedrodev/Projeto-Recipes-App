import React from 'react';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testando a tela de receitas', () => {
  test('1-meals', async () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/meals');
    });
    expect(history.location.pathname).toBe('/meals');

    const img = await screen.findByTestId('0-card-img', undefined, { timeout: 3000 });
    const button = await screen.findByRole('button', { name: /beef/i }, { timeout: 2000 });
    const button2 = await screen.findByRole('button', { name: /breakfast/i }, { timeout: 2000 });
    const todos = await screen.findByRole('button', { name: /todos/i }, { timeout: 2000 });
    const buttons = await screen.findAllByRole('button', undefined, { timeout: 2000 });

    expect(img).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(buttons.length).toBe(Number(6));

    userEvent.click(button);
    const img2 = await screen.findByTestId('0-card-name', { name: /beef and mustard pie/i }, { timeout: 2000 });
    expect(img2).toBeInTheDocument();

    userEvent.click(button2);
    const img3 = await screen.findByTestId('1-card-name', { name: /english breakfast/i }, { timeout: 2000 });
    expect(img3).toBeInTheDocument();

    userEvent.click(todos);
    const img4 = await screen.findByTestId('2-card-name', { name: /sushi/i }, { timeout: 2000 });
    expect(img4).toBeInTheDocument();
  });
  it('2-drinks', async () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/drinks');
    });
    expect(history.location.pathname).toBe('/drinks');

    const img = await screen.findByTestId('0-card-img', undefined, { timeout: 3000 });
    const button = await screen.findByRole('button', { name: /ordinary drink/i }, { timeout: 2000 });
    const button2 = await screen.findByRole('button', { name: /cocktail/i }, { timeout: 2000 });
    const todos = await screen.findByRole('button', { name: /todos/i }, { timeout: 2000 });
    const buttons = await screen.findAllByRole('button', undefined, { timeout: 2000 });

    expect(img).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(buttons.length).toBe(Number(6));

    userEvent.click(button);
    const img2 = await screen.findByTestId('0-card-name', { name: /3-mile long island iced tea/i }, { timeout: 2000 });
    expect(img2).toBeInTheDocument();

    userEvent.click(button2);
    const img3 = await screen.findByTestId('1-card-name', { name: /57 chevy with a white license plate/i }, { timeout: 2000 });
    expect(img3).toBeInTheDocument();

    userEvent.click(todos);
    const img4 = await screen.findByTestId('2-card-name', { name: /abc/i }, { timeout: 2000 });
    expect(img4).toBeInTheDocument();
  });
});
