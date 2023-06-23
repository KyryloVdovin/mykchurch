import ContactUsForm from "./contactUs-form";
import ShareButtonsContainer from '../repentance/share-buttons-container';
import './contact-us.css';

const ContactUs = (props) => {
    return (
        <div>
            <ContactUsForm />
            <div className="share-buttons">
                <ShareButtonsContainer shareButtons={props.shareButtons} />
            </div>
        </div>
    )
}

export default ContactUs;