import * as yup from 'yup'
export default yup.object().shape({
    firstName: yup.string().required('Name is required')
    .min(3, 'firstName length must be at least 3 characters long')
    .max(30, 'firstName length must be less than or equal to 30 characters long'),
    // .matches(/^[A-Z0-9]+$/i),
    lastName: yup.string().required('Name is required').min(3, 'lastName length must be at least 3 characters long')
    .max(30, 'lastName length must be less than or equal to 30 characters long'),
    email: yup.string().required('email is required').email('email must be a valid email'),
    role: yup.string().required().oneOf(['student', 'volunteer'], 'must select a role'),
    password: yup.string().required('Password is required').min(6, 'password length must be at least 6 characters long')
    .max(30, 'password length must be less than or equal to 30 characters long'),
    // .matches(/^[A-Z0-9]+$/i),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], ' '),
})