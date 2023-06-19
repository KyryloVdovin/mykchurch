import { connect } from 'react-redux';
import AboutUs from './aboutUs';

let mapStatetoProps = (state) => {
    return {
        aboutUsDescription: state.aboutUsPage.aboutUsDescription,
        ourLocation: state.aboutUsPage.ourLocation,
        morningPrayer: state.aboutUsPage.morningPrayer,
        sundayMinistry: state.aboutUsPage.sundayMinistry,
        churchPhoto: state.aboutUsPage.churchPhoto
    }
}

const AboutUsContainer = connect(mapStatetoProps, {})(AboutUs);

export default AboutUsContainer;