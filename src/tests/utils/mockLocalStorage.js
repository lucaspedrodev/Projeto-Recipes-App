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
