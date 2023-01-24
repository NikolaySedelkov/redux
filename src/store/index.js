import { legacy_createStore, combineReducers } from "redux";
import productListReducer from "../reducers/productList.js";
import productAddReducer from "../reducers/productAdd.js";
import filterChangeReducer from "../reducers/filterChange.js";
const reducer = combineReducers({
    productList: productListReducer,
    productAdd: productAddReducer,
    filterChange: filterChangeReducer
});

const store = legacy_createStore(reducer);
export default store;
