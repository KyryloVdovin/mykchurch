import { connect } from 'react-redux';
import ContactUs from './contactUs';
import { sendEmail } from '../redux/contactUs-reducer';

const mapStateToProps = (state) => {
    return {
        shareButtons: state.repentancePage.shareButtons,
        isFetching: state.contactsUsPage.isFetching,
    }
}

const ContactUsContainer = connect(mapStateToProps, { sendEmail })(ContactUs);

export default ContactUsContainer;