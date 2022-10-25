const getCocktails = async () => {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const requestJson = await request.json();
    return requestJson.drinks;
  };
  
  export default getCocktails;