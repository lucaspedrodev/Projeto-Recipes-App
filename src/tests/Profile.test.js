import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';
// import { mockEmail, setLocalStorage } from './utils/mockLocalStorage';

describe('Testa a tela Profile', () => {
  test('se os elementos estão na tela e se comportam como esperado', () => {
    // setLocalStorage('user', mockEmail);
    const { history } = renderWithRouter(<App />);

    // const inputEmail = screen.getByTestId('email-input');
    // const inputPassword = screen.getByTestId('password-input');
    // const loginSubmitBtn = screen.getByTestId('login-submit-btn');

    // userEvent.type(inputEmail, 'alguem@alguem.com.br');
    // userEvent.type(inputPassword, '1234567');
    // userEvent.click(loginSubmitBtn);

    act(() => {
      history.push('/profile');
    });

    const email = screen.getByTestId('profile-email');
    expect(email).toBeInTheDocument();

    const btnDone = screen.getByTestId('profile-done-btn');
    expect(btnDone).toBeInTheDocument();

    userEvent.click(btnDone);
    expect(history.location.pathname).toBe('/done-recipes');
  });

  test('se ao clicar no btn favRecipes há o comportamento esperado', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/profile');
    });

    const btnFav = screen.getByTestId('profile-favorite-btn');
    expect(btnFav).toBeInTheDocument();

    userEvent.click(btnFav);
    expect(history.location.pathname).toBe('/favorite-recipes');
  });

  test('se ao clicar no btn logout há o comportamento esperado', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/profile');
    });

    const btnLogout = screen.getByTestId('profile-logout-btn');
    expect(btnLogout).toBeInTheDocument();

    userEvent.click(btnLogout);
    expect(history.location.pathname).toBe('/');
  });
});
