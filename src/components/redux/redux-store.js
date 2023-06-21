import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import aboutUsReducer from './aboutUs-reducer';
import repentanceReducer from './repentance-reducer';

let reducer = combineReducers({
    aboutUsPage: aboutUsReducer,
    repentancePage: repentanceReducer,
});

const store = createStore(reducer);

export default store;