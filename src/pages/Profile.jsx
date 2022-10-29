import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const [validEmail, setValidEmail] = useState('');

  useEffect(() => {
    const callLocal = () => {
      const email = JSON.parse(localStorage.getItem('user'))
      ?? { email: '' };
      setValidEmail(email.email);
    };

    callLocal();
  }, []);

  const history = useHistory();

  const handleBtnDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const handleBtnFavoriteRecipes = () => {
    history.push('/favorite-recipes');
  };

  const handleBtnLogout = () => {
    localStorage.clear('user');
    history.push('/');
  };
  return (
    <>
      <div>
        <span data-testid="profile-email">
          email:
          {' '}
          {
            validEmail
          }
        </span>
      </div>
      <div>
        <button
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => handleBtnDoneRecipes() }
        >
          Done Recipes

        </button>

      </div>
      <div>
        <button
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => handleBtnFavoriteRecipes() }
        >
          Favorite Recipes

        </button>

      </div>
      <div>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => handleBtnLogout() }
        >
          Logout

        </button>

      </div>
    </>
  );
}
