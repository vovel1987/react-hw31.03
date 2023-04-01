const ADD_PRODUCT = "ADD_PRODUCT";
const SEARCH = "SEARCH";
const SORT_ITEM = "SORT_ITEM";
const RESET_FILTER = " RESET_FILTER";
const RESET = "RESET";

export const addProduct = (title, price, discount) => {
  return {
    type: ADD_PRODUCT,
    payload: { id: Date.now(), title, price, discount, show: true },
  };
};

export const searchItem = (title) => {
  return {
    type: SEARCH,
    payload: { title },
  };
};

export const resetFilter = () => ({
  type: RESET_FILTER,
});
export const reset = () => ({
  type: RESET,
});

export const sortItems = (payload) => {
  return {
    type: SORT_ITEM,
    payload,
  };
};

const defaultState = JSON.parse(localStorage.getItem("basket")) ?? [];

const saveLocalStorage = (basket) =>
  localStorage.setItem("basket", JSON.stringify(basket));

const products = [
  { id: 1, title: "Skeit", price: 100, discount: 5, show: true },
  { id: 2, title: "Samokat", price: 120, discount: 10, show: true },
  { id: 3, title: "Roliki", price: 80, discount: 5, show: true },
  { id: 4, title: "Velo", price: 150, discount: 8, show: true },
  { id: 5, title: "Koniki", price: 70, discount: 5, show: true },
];
// saveLocalStorage(products);
export const productReducer = (state = products, action) => {
  if (action.type === ADD_PRODUCT) {
    const newState = [...state, action.payload];
    // saveLocalStorage(newState);

    return newState;
  } else if (action.type === SEARCH) {
    // const item = state.filter((elem) => {
    //   return elem.title.toLowerCase() === action.payload.title.toLowerCase();
    // });
    // saveLocalStorage(item);

    const item = state.map((item) => ({
      ...item,
      show: item.title
        .toLocaleLowerCase()
        .startsWith(action.payload.title.toLowerCase()),
    }));

    return item;
  } else if (action.type === SORT_ITEM) {
    if (action.payload === "1") {
      // const item = state.sort((a, b) => (a.title < b.title ? 1 : -1));
      const item = state.sort((a, b) => a.price - b.price);

      return [...item];
    } else if (action.payload === "-1") {
      const item = state.sort((a, b) => b.price - a.price);

      return [...item];
    }
  } else if (action.type === RESET_FILTER) {
    return state.map((item) => ({
      ...item,
      show: "true",
    }));
  } else if (action.type === RESET) {
   
    return []
  }

  return state;
};
