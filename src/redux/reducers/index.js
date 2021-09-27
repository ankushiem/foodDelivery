import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productReducer";
import changeTheNumber from "./upDown";

 const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    changeTheNumber,
});

export default reducers;
