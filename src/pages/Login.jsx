import React, { useState } from 'react';

const PASSWORD_MIN = 6;

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  return (
    <main>
      <form onSubmit={ handleSubmit }>
        <input
          type="email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
          data-testid="email-input"
        />
        <input
          type="password"
          value={ senha }
          onChange={ ({ target: { value } }) => setSenha(value) }
          data-testid="password-input"
        />
        <button
          type="submit"
          disabled={ !(senha.length > PASSWORD_MIN && /\S+@\S+\.\S+/.test(email)) }
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
