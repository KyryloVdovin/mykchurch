import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import aboutUsReducer from './aboutUs-reducer';
import repentanceReducer from './repentance-reducer';
import photoAlbumReducer from './photo-album-reducer';
import mainConetntReducer from './main-content-reducer';
import contactUsReducer from '../redux/contactUs-reducer';
import { reducer as formReducer } from 'redux-form';
import thunkMddleware from 'redux-thunk';

let reducer = combineReducers({
    aboutUsPage: aboutUsReducer,
    repentancePage: repentanceReducer,
    photoAlbumPage: photoAlbumReducer,
    mainPage: mainConetntReducer,
    contactsUsPage: contactUsReducer,
    form: formReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMddleware));

export default store;