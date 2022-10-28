import React from 'react';
import './footer.css';
import { useHistory } from 'react-router-dom';

export default function Footer() {
  const history = useHistory();

  return (
    <footer className="fixaFooter" data-testid="footer">
      <button
        onClick={ () => history.push('/drinks') }
        type="button"
        className="left"
      >
        <img
          src="images/drinkIcon.svg"
          alt="Drink icon"
          data-testid="drinks-bottom-btn"
        />
      </button>

      <button
        onClick={ () => history.push('/meals') }
        type="button"
        className="right"
      >
        <img
          data-testid="meals-bottom-btn"
          src="images/mealIcon.svg"
          alt="Meal icon"
        />
      </button>
    </footer>
  );
}
