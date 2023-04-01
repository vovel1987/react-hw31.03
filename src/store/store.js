import { createStore, combineReducers } from "redux";
import { productReducer } from "./productReducer/productReducer";

const rootReducer = combineReducers({
  product: productReducer,
});

export const store = createStore(rootReducer);
