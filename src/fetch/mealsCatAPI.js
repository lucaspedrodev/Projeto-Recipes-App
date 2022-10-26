const getMealCategories = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const requestJson = await request.json();
  return requestJson.meals;
};
export default getMealCategories;
