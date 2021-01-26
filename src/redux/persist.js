export const load = (key, initialState) => {
  const valueInLocalStorage = window.localStorage.getItem(key);
  if (valueInLocalStorage) {
    return JSON.parse(valueInLocalStorage);
  }
  return initialState;
};

export const save = (key, state) => {
  window.localStorage.setItem(key, JSON.stringify(state));
};
