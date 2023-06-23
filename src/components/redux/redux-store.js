import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import aboutUsReducer from './aboutUs-reducer';
import repentanceReducer from './repentance-reducer';
import photoAlbumReducer from './photo-album-reducer';
import mainConetntReducer from './main-content-reducer';
import { reducer as formReducer } from 'redux-form';

let reducer = combineReducers({
    aboutUsPage: aboutUsReducer,
    repentancePage: repentanceReducer,
    photoAlbumPage: photoAlbumReducer,
    mainPage: mainConetntReducer,
    form: formReducer,
});

const store = createStore(reducer);

export default store;