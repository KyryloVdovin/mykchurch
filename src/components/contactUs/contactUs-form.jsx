import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './contact-us.css';
import process from '../../process.js';
import Loading from './loading';

const ContactUsForm = (props) => {
    const form = useRef();
    const [isFetching, setIsFetching] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsFetching(true);

        emailjs.sendForm(
            process.REACT_APP_SERVICE_ID,
            process.REACT_APP_TEMPLATE_ID,
            form.current,
            process.REACT_APP_USER_ID
        ).then((result) => {
            console.log(result.text);
            setIsFetching(false);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <div className="contactUs-container">
            {console.log('isFetching = ' + isFetching)}

            <form ref={form} onSubmit={sendEmail}>
                <div className="form-container">
                    <div><label>Имя(обязательно)</label></div>
                    <input type="text" name="name" />
                </div>
                <div className="form-container">
                    <div><label>Email(обязательно)</label></div>
                    <input type="email" name="email" />
                </div>
                <div className="form-container">
                    <div><label>Сообщение(обязательно)</label></div>
                    <textarea name="message" />
                </div>
                <div className="radio-options">
                    <div><label>Вы являетесь членом церкви?(обязательно)</label></div>
                    <div>
                        <input type="radio" value="он(она) член церкви" name="churchMember" />
                        <span>Да</span>
                    </div>
                    <div>
                        <input type="radio" value="он(она) не член церкви" name="churchMember" />
                        <span>Нет</span>
                    </div>
                </div>

                <input className="submit-btn" disabled={isFetching} type="submit" value="Отправить" />
            </form>

            {isFetching && <Loading />}
        </div>
    )
}

export default ContactUsForm;