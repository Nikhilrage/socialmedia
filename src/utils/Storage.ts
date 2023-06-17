export const setLocalItem = (key: any, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
  return true;
};

export const getLocalItem = (key: any) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
};

export const removeAllItem = () => {
  localStorage.clear();
};
