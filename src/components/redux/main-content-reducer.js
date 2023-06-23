import ministryPostData from '../data/sunday-ministry-post-data';

const GET_ARTICLES = 'GET_ARTICLES';

const initialState = ministryPostData;

const mainConetntReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default mainConetntReducer;