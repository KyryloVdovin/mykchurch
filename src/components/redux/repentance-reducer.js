import repentanceData from '../data/repentance-data';

const GET_ARTICLES = 'GET_ARTICLES';

const initialState = repentanceData;

const repentanceReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default repentanceReducer;