import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import aboutUsReducer from './aboutUs-reducer';

let reducer = combineReducers({
    aboutUsPage: aboutUsReducer,
});

const store = createStore(reducer);

export default store;