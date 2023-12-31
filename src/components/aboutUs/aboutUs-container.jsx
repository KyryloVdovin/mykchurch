import { connect } from 'react-redux';
import AboutUs from './aboutUs';

let mapStatetoProps = (state) => {
    return {
        aboutUsDescription: state.aboutUsPage.aboutUsDescription,
        ourLocation: state.aboutUsPage.ourLocation,
        morningPrayer: state.aboutUsPage.morningPrayer,
        sundayMinistry: state.aboutUsPage.sundayMinistry,
        youthMinistry: state.aboutUsPage.youthMinistry,
        churchPhoto: state.aboutUsPage.churchPhoto,
        center: state.aboutUsPage.center,
        zoom: state.aboutUsPage.zoom,
        entryTitle: state.aboutUsPage.entryTitle,
    }
}

const AboutUsContainer = connect(mapStatetoProps, {})(AboutUs);

export default AboutUsContainer;