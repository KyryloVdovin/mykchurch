import AboutUsDescription from './aboutUs-description';
import OurMinistry from './our-ministry';
import './description.css';

const AboutUs = (props) => {
    return(
        <div>
            <div className='entry-title'>
                <p>О нас</p>
            </div>

            <AboutUsDescription aboutUsDescription={props.aboutUsDescription}/>
            <OurMinistry ourLocation={props.ourLocation} morningPrayer={props.morningPrayer} sundayMinistry={props.sundayMinistry} churchPhoto={props.churchPhoto}/>
        </div>
    )
}

export default AboutUs;