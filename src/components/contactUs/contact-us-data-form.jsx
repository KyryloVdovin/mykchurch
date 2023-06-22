import { Field } from "redux-form";
import { useRef, useState } from "react";

const ContactUsDataForm = (props) => {
    const { handleSubmit, profile, error } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Имя(обязательно):</b> {createField("Name", "name", [], Input)}
            </div>
            <div>
                <b>Email(обязательно):</b> {createField("Email", "email", [], Input)}
            </div>
            <div>
                <b>Сообщение(обязательно):</b> {createField("message", "message", [], Textarea)}
            </div>

            <div><button>Отправить</button></div>
        </form>
    )
}

export default ContactUsDataForm;