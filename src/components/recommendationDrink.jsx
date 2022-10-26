import React, { useEffect, useState } from 'react';
import './Recommendation.css';

const NUMBER_DRINKS = 6;

export default function RecommendationDrink() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      const endpoit = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const response = await (await fetch(endpoit)).json();

      setData(response.drinks.slice(0, NUMBER_DRINKS));
    };
    requestApi();
  }, [setData]);
  console.log(data);
  return (
    <div className="container-recomendation">
      {data.map((e, index) => (
        <div key={ index } data-testid={ `${index}-recommendation-card` }>
          <img
            src={ e.strDrinkThumb }
            alt={ e.strDrink }
            className="img-rec"
          />
          <p data-testid={ `${index}-recommendation-title` }>{e.strDrink}</p>
        </div>
      ))}
    </div>
  );
}
