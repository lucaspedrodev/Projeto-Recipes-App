import React from 'react';

export default function Login() {
  return (
    <main>
      <form>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="submit" data-testid="login-submit-btn">Entrar</button>
      </form>
    </main>
  );
}
