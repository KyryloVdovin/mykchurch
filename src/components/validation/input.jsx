import { findInputError, isFormInvalid } from './validation';
import { useFormContext } from "react-hook-form";
import InputError from './input-error';

export const Input = ({ label, name, type, id, placeholder }) => {
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
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                name={name}
                {...register(name, {
                    required: {
                        value: true,
                        message: 'required',
                    },
                })}
            />
        </div>
    )
}

export default Input;