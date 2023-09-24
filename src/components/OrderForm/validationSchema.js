import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = () => {
    return Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Please write your name'),
        surname: Yup.string()
            .min(2, 'Too Short!')
            .max(40, 'Too Long!')
            .required('Please write your surname'),
        age: Yup.number()
            .positive()
            .integer('There must be an integer number!')
            .min(18, "You're too young!")
            .max(150, 'Are you a vampire?')
            .required('Please write your age'),
        address: Yup.string()
            .min(10, 'Too Short!')
            .max(100, 'Too Long!')
            .required('Please write your address'),
        phone: Yup.string()
            .matches(phoneRegExp, 'Please write only numbers')
            .min(8, "too short")
            .max(10, "too long")
            .required("Please write your phone number")
    });
}

export default validationSchema;