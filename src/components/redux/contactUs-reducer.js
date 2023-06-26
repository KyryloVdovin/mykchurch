import process from '../../process';
import emailjs from '@emailjs/browser';

const IS_FETCHING = 'IS_FETCHING';

const initialState = {
    isFetching: false,
};

const contactUsReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}
export const sendEmailSuccess = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
};

export const sendEmail = (currentForm) => (dispatch) => {
    dispatch(sendEmailSuccess(true));
    emailjs.sendForm(
        process.REACT_APP_SERVICE_ID,
        process.REACT_APP_TEMPLATE_ID,
        currentForm,
        process.REACT_APP_USER_ID
    ).then((result) => {
        console.log(result.text);
        dispatch(sendEmailSuccess(false));
    }, (error) => {
        console.log(error.text);
        dispatch(sendEmailSuccess(false));
    });
}
export default contactUsReducer;