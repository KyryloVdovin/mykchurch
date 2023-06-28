import { findInputError, isFormInvalid } from './validation';
import { useFormContext } from "react-hook-form";
import './input-error.css';
export const Input = ({ label, name, type, id, placeholder, validation }) => {
    const { register, formState: { errors } } = useFormContext();

    const inputError = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputError);

    return (
        <div className='input-container'>
            <div >
                <label className={isInvalid && "error"} htmlFor={id}>
                    {!isInvalid ? label : `${label}(обзательно)`}
                </label>
            </div>
            {type === "text" ? <input
                id={id}
                type={type}
                placeholder={placeholder}
                name={name}
                {...register(name, validation)}
            /> : <textarea
                id={id}
                type={type}
                placeholder={placeholder}
                name={name}
                {...register(name, validation)}
            />}

        </div>
    )
}

export const Radio = (props) => {
    const { register, formState: { errors } } = useFormContext();

    const inputError = findInputError(errors, "churchMember");
    const isInvalid = isFormInvalid(inputError);

    const radioBtns = props.radioBtnValidation.map(r => {
        return (
            <div>
                <input label={r.label} id={r.id} type={r.type} value={r.value} name={r.name}
                    {...register(r.name, r.validation)} />
                <span>{r.label}</span>
            </div>)
    });

    return (
        <div >
            <div>
                <label className={isInvalid && "error"}> {!isInvalid ? "Вы являетесь членом церкви?" : `Вы являетесь членом церкви?(обязательно)`}</label>
            </div>
            <div className='radio-container'>{radioBtns}</div>
        </div>
    )
}

export default Input;