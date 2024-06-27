export const useLocalStorage = (key) => {
  const setItem = (intVal) => {
    try {
      let currentArr = JSON.parse(window.localStorage.getItem(key)) || [];
      if (!Array.isArray(currentArr)) {
        currentArr = [];
      }

      if (!currentArr.includes(intVal)) {
        currentArr.push(intVal);
        window.localStorage.setItem(key, JSON.stringify(currentArr));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };
  return { setItem, getItem, removeItem };
};
