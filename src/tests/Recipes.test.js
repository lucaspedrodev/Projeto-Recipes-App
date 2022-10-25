import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';


describe('Testando a tela de receitas', () => {
    test('Se o botão é desabilitado e habilitado quando digitado um email e senha ', async () => {
      const { history } = renderWithRouter(<App />);
      const inputEmail = screen.getByTestId('email-input');
      const inputPassword = screen.getByTestId('password-input');
      const loginSubmitBtn = screen.getByTestId('login-submit-btn');

      userEvent.type(inputEmail, 'test@test.com');
      userEvent.type(inputPassword, '1234567');
      userEvent.click(loginSubmitBtn)

      const emailLocal = JSON.parse(localStorage.getItem('user'));
      expect(history.location.pathname).toBe('/meals');
      expect(emailLocal.email).toBe('test@test.com');
      
//, screen.getByText('Goat'), screen.getByText('Dessert'), screen.getByText('Chicken'), screen.getByText('Breakfast')]
      const img = await screen.findByTestId('0-card-img', undefined, { timeout: 2000 });
      const button = await screen.findByRole('button', {name: /beef/i }, { timeout: 2000 });
      const buttons = await screen.findAllByRole('button', undefined, { timeout: 2000 });
      
      expect(img).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(buttons.length).toBe(Number(5));

      });
   
  });