import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './contact-us.css';

const ContactUs = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_44of08p', 'template_zmn0lp8', form.current, 'qcW_OTTNssRvtBHS6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-container">
                    <div><label>Name</label></div>
                    <input placeholder="Enter name" type="text" name="name" />
                </div>
                <div className="form-container">
                    <div><label>Email</label></div>
                    <input placeholder="Enter email" type="email" name="email" />
                </div>
                <div className="form-container">
                    <div><label>Message</label></div>
                    <textarea placeholder="Enter message" name="message" />
                </div>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default ContactUs;