import React, { useEffect, useState } from 'react';

export default function RecommendationDrink() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      const endpoit = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const response = await (await fetch(endpoit)).json();

      setData(response.drinks);
    };
    requestApi();
  }, [setData]);
  console.log(data);
  return (
    <div>RecommendationDrink</div>
  );
}
