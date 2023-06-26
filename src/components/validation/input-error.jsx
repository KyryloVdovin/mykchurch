import './input-error.css';

const InputError = ({ message }) => {
    return (
        <div className="error">
            <p>{message}</p>
        </div>
    )
}

export default InputError;