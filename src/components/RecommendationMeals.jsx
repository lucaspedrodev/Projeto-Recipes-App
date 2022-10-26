import React, { useEffect, useState } from 'react';
import './Recommendation.css';

const NUMBER_DRINKS = 6;

export default function RecommendationMeals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      const endpoit = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await (await fetch(endpoit)).json();

      setData(response.meals.slice(0, NUMBER_DRINKS));
    };
    requestApi();
  }, [setData]);
  return (
    <div className="container-recomendation">
      {data.map((e, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recommendation-card` }
          className="recommendation-card"
        >
          <img
            src={ e.strMealThumb }
            alt={ e.strMeal }
            className="img-rec"
          />
          <p
            data-testid={ `${index}-recommendation-title` }
            className="recommendation-title"
          >
            {e.strMeal}
          </p>
        </div>
      ))}
    </div>
  );
}
