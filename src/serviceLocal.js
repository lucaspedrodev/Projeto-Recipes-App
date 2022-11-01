export const localStorageInProgressRecipes = () => {
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

export const localStorageDoneRecipes = () => {
  const getLocal = JSON.parse(localStorage.getItem('doneRecipes'));

  if (getLocal === null) {
    localStorage.setItem(
      'doneRecipes',
      JSON.stringify([]),
    );
  }

  const getLocalIn = JSON.parse(localStorage.getItem('doneRecipes'));
  return getLocalIn;
};
