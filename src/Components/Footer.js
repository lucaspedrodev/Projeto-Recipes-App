import React from 'react';
import './footer.css';
import { useHistory } from 'react-router-dom';

export default function Footer() {
  const history = useHistory();

  const mealClick = () => {
    history.push('/meals');
  };

  const drinkClick = () => {
    history.push('/drinks');
  };

  return (
    <footer className="fixaFooter" data-testid="footer">
      <button
        onClick={ drinkClick }
        type="button"
        className="left"
      >
        <img
          data-testid="drinks-bottom-btn"
          src="images/drinkIcon.svg"
          alt="Drink icon"
        />
      </button>

      <button
        onClick={ mealClick }
        type="button"
        className="right"
      >
        <img
          src="images/mealIcon.svg"
          alt="Meal icon"
          data-testid="meals-bottom-btn"
        />
      </button>
    </footer>
  );
}
