import AboutUsDescription from './aboutUs-description';
import OurMinistry from './our-ministry';
import LocationMap from './location-map';
import LikeButton from '../general-components/like-button';
import EntryTitle from '../general-components/entry-title';
import './description.css';

const AboutUs = (props) => {
    return (
        <div>
            <EntryTitle entryTitle={props.entryTitle}/>

            <AboutUsDescription aboutUsDescription={props.aboutUsDescription} />
            <OurMinistry ourLocation={props.ourLocation} morningPrayer={props.morningPrayer} youthMinistry={props.youthMinistry} sundayMinistry={props.sundayMinistry} churchPhoto={props.churchPhoto} />
            <LocationMap center={props.center} zoom={props.zoom} />
            <LikeButton />
        </div>
    )
}

export default AboutUs;