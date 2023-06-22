import photoAlbumData from '../data/photo-album-data';

const GET_ARTICLES = 'GET_ARTICLES';

const initialState = photoAlbumData;

const photoAlbumReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default photoAlbumReducer;