const localStorageInProgressRecipes = () => {
  const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (getLocal === null) {
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify({ drinks: {}, meals: {} }),
    );
  }

  const getLocalIn = JSON.parse(localStorage.getItem('inProgressRecipes'));
  return getLocalIn;
};

export default localStorageInProgressRecipes;
