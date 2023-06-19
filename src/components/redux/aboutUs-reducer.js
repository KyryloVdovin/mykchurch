import aboutUsData from '../data/aboutUs-data';

const GET_ARTICLES = 'GET_ARTICLES';

const initialState = aboutUsData;

const aboutUsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default aboutUsReducer;