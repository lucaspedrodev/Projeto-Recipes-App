import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Testa a tela Profile', () => {
  test('se os elementos estão na tela e se comportam como esperado', () => {
    const { history } = renderWithRouter(<App />);

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const loginSubmitBtn = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'alguem@alguem.com.br');
    userEvent.type(inputPassword, '1234567');
    userEvent.click(loginSubmitBtn);

    act(() => {
      history.push('/profile');
    });

    const email = screen.getByTestId('profile-email');
    expect(email).toBeInTheDocument();
    // const emailUsed = screen.findByText('alguem@alguem.com.br', {}, { timeout: 30000 });
    // expect(emailUsed).toBeInTheDocument();

    const btnDone = screen.getByTestId('profile-done-btn');
    expect(btnDone).toBeInTheDocument();

    const btnFav = screen.getByTestId('profile-favorite-btn');
    expect(btnFav).toBeInTheDocument();

    const btnLogout = screen.getByTestId('profile-logout-btn');
    expect(btnLogout).toBeInTheDocument();

    userEvent.click(btnDone);

    act(() => {
      history.push('/profile');
    });

    userEvent.click(btnFav);
  });
});
