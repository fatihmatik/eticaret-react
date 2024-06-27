export const useLocalStorageForProfile = (key) => {
  const setItem = (flag) => {
    try {
      window.localStorage.setItem(key, flag);
    } catch (error) {}
  };
  const removeItem = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing item from localStorage", error);
    }
  };

  return { setItem, removeItem };
};
