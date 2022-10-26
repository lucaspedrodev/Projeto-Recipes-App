const getMeals = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const requestJson = await request.json();
  return requestJson.meals;
};

export default getMeals;
