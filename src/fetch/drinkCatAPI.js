const getDrinkCategories = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const requestJson = await request.json();
  return requestJson.drinks;
};
export default getDrinkCategories;
