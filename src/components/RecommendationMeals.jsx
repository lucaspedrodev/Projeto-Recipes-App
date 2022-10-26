import React, { useEffect, useState } from 'react';

export default function RecommendationMeals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      const endpoit = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await (await fetch(endpoit)).json();

      setData(response.meals);
    };
    requestApi();
  }, [setData]);
  console.log(data);
  return (
    <div>RecommendationMeals</div>
  );
}
