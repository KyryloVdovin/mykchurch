const GET_ARTICLES = 'GET_ARTICLES';

const initialState = {
    articles: [
        {
            id: 1,
            title: "Воскресное служение 02.08.20",
            published: "02.08.20",
            videoSource: "https://www.youtube.com/embed/zDj0Rd5V7tE?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=ru&autohide=2&wmode=transparent",
            likes: 0
        }
    ]
}

const AboutUsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}