import { connect } from 'react-redux';
import ContactUs from './contactUs';

const mapStateToProps = (state) => {
    return {
        shareButtons: state.repentancePage.shareButtons,
    }
}

const ContactUsContainer = connect(mapStateToProps, {})(ContactUs);

export default ContactUsContainer;