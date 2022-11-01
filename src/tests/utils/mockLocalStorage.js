export const mockLocalInProgress = {
  drinks: {
    179319: [],
  },
  meals: {
    52772: [],
  },
};

export const mockFavoriteLocal = [{
  id: '52772',
  type: '',
  nationality: '',
  category: '',
  alcoholicOrNot: '',
  name: '',
  image: '',
}];

export const mockFavRecipeLocal = [{
  alcoholicOrNot: '',
  category: 'Vegetarian',
  id: '52772',
  image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  name: 'Spicy Arrabiata Penne',
  nationality: 'Italian',
  type: 'meal',
}, {
  alcoholicOrNot: 'Optional alcohol',
  category: 'Ordinary Drink',
  id: '15997',
  image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
  name: 'GG',
  nationality: '',
  type: 'drink',
}];

export const mockEmail = { email: 'alguem@alguem.com.br' };

export const setLocalStorage = (id, data) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

export const removeLocalStorage = (id) => {
  window.localStorage.removeItem(id);
};

export const clearLocalStorage = (id) => {
  window.localStorage.clear(id);
};

export const getLocalStorage = (id) => {
  window.localStorage.getItem(id);
};
