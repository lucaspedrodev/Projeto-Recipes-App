import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  const handleBtnDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const handleBtnFavoriteRecipes = () => {
    history.push('/favorite-recipes');
  };

  // const handleBtnLogout = () => {
  //   history.push('/favorite-recipes');
  // };
  return (
    <>
      <div>
        <span data-testid="profile-email">
          email:
          {' '}
          {
            email
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
        <button type="button" data-testid="profile-logout-btn">Logout</button>

      </div>
    </>
  );
}
