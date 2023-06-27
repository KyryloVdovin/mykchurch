import { useRef } from "react";
import './contact-us.css';
import Loading from './loading';
import { FormProvider, useForm } from "react-hook-form";
import Input, { Radio } from '../validation/input';
import { name_validation, email_validation, message_validation, radio_validation } from '../validation/input-validations';

const ContactUsForm = (props) => {
    const form = useRef();
    const methods = useForm();

    const onSubmit = methods.handleSubmit((data) => {
        sendEmail(data);
        methods.resetField("name");
        methods.resetField("email");
        methods.resetField("churchMember");
        methods.resetField("message");
    })

    const sendEmail = () => {
        props.sendEmail(form.current);
    }

    return (
        <FormProvider {...methods}>
            <div className="contactUs-container">
                <form ref={form} onSubmit={e => { e.preventDefault(); onSubmit(); }} >
                    <div className="form-container">
                        <Input {...name_validation} />
                    </div>
                    <div className="form-container">
                        <Input {...email_validation} />
                    </div>
                    <div className="form-container">
                        <Input {...message_validation} />
                    </div>
                    <div className="radio-options">
                        <Radio radioBtnValidation={radio_validation} />
                    </div>
                    <input onSubmit={onSubmit} className="submit-btn" disabled={props.isFetching} type="submit" value="Отправить" />
                </form>
                {props.isFetching && <Loading />}
            </div>
        </FormProvider>
    )
}

export default ContactUsForm;