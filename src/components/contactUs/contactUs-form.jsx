import { useRef } from "react";
import './contact-us.css';
import Loading from './loading';
import { FormProvider, useForm } from "react-hook-form";
import Input from '../validation/input';

// const emailRegexValidation = (email) => {
//     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     return regex.test(email);
// }
// const emptyFieldValidation = (field) => {
//     return field === '';
// }

const ContactUsForm = (props) => {
    const form = useRef();
    const methods = useForm();

    const onSubmit = methods.handleSubmit((data) => {
        sendEmail(data);
        methods.resetField("name");
        methods.resetField("email");
    })

    const sendEmail = () => {
        props.sendEmail(form.current);
    }

    return (
        <FormProvider {...methods}>
            <div className="contactUs-container">
                <form ref={form} onSubmit={e => { e.preventDefault(); onSubmit(); }} >
                    <div className="form-container">
                        <Input type="text" label="Имя" name="name" id="name" placeholder="type your name..." />
                    </div>
                    <div className="form-container">
                        <Input type="text" label="Email" name="email" id="email" placeholder="type your email..." />
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

                    <input onSubmit={onSubmit} className="submit-btn" disabled={props.isFetching} type="submit" value="Отправить" />
                </form>
                {props.isFetching && <Loading />}
            </div>
        </FormProvider>
    )
}

export default ContactUsForm;