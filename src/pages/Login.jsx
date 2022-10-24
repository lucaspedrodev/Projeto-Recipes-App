import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PASSWORD_MIN = 6;

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const { history } = props;

    history.push('meals');
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
