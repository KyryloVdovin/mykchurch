export const name_validation = {
    name: 'name',
    label: 'Имя',
    type: 'text',
    id: 'name',
    placeholder: 'write your name...',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 30,
            message: '30 characters max',
        },
    },
}
export const email_validation = {
    name: 'email',
    label: 'Email',
    type: 'text',
    id: 'email',
    placeholder: 'write your email...',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        pattern: {
            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            message: "invalid email address"
        }
    },
}
export const message_validation = {
    name: 'message',
    label: 'Сообщение',
    type: 'textarea',
    id: 'text',
    placeholder: 'write your message...',
    validation: {
        required: {
            value: true,
            message: 'required',
        }
    },
}
export const radio_validation = [
    {
        name: 'churchMember',
        label: 'Да',
        type: 'radio',
        id: 'radio',
        value: "он(она) член церкви",
        validation: {
            required: {
                value: true,
                message: 'required',
            }
        }
    },
    {
        name: 'churchMember',
        label: 'Нет',
        type: 'radio',
        id: 'radio',
        value: "он(она) не член церкви",
        validation: {
            required: {
                value: true,
                message: 'required',
            }
        }
    },
]