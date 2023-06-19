import AboutUsDescription from './aboutUs-description';
import OurMinistry from './our-ministry';
import './description.css';
import LocationMap from './location-map';
import LikeButton from '../general-components/like-button';

const AboutUs = (props) => {
    return (
        <div>
            <div className='entry-title'>
                <p>О нас</p>
            </div>

            <AboutUsDescription aboutUsDescription={props.aboutUsDescription} />
            <OurMinistry ourLocation={props.ourLocation} morningPrayer={props.morningPrayer} sundayMinistry={props.sundayMinistry} churchPhoto={props.churchPhoto} />
            <LocationMap center={props.center} zoom={props.zoom} />
            <LikeButton />
        </div>
    )
}

export default AboutUs;