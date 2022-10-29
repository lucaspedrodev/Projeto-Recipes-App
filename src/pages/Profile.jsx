import React from 'react';

export default function Profile() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  console.log(email);
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
        <button data-testid="profile-done-btn" type="button">Done Recipes</button>

      </div>
      <div>
        <button data-testid="profile-favorite-btn" type="button">Favorite Recipes</button>

      </div>
      <div>
        <button type="button" data-testid="profile-logout-btn">Logout</button>

      </div>
    </>
  );
}
