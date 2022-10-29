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

export const setLocalStorage = (id, data) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

export const removeLocalStorage = (id) => {
  window.localStorage.removeItem(id);
};
