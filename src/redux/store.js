import { createStore, applyMiddleware } from "redux";
import { formField } from "./form/reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(formField, applyMiddleware(thunkMiddleware));

export default store;
