import React, {useState, useEffect} from 'react'
import '../components/Signup.css'
import Schema from './Schema'
import * as yup from 'yup'
export default function Signup(){
    const initalTValue = true
    const initialFormValues = {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        role: '',
    }
    const [disabled, setDisabled] = useState(initalTValue)
    const [errors, setErrors] = useState(initialFormValues)
    const [formValues, setFormvalues] = useState(initialFormValues)

    const change = e => {
        const {checked, name, type, value} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormvalues({...formValues, [name]: valueToUse})
        hadleSetErrors(name, valueToUse)
    }

    const submit = e => {
        e.preventDefault()
        console.log(formValues)
    }

    useEffect(() => {
        Schema.isValid(formValues)
            .then(valid => {
                setDisabled(!valid)
                console.log(errors)
                
            }).catch(err => {
                console.log(err)
                console.log(errors)
            })
    }, [formValues])

    const hadleSetErrors = (name, value) => {
        yup.reach(Schema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ''}))
            .catch(err => {setErrors({...errors, [name]: err.errors[0]})})
    }

    

    
    return(
        <div className = 'MainDiv'> 
        <div>
            <p>{errors.firstName}</p>
            <p>{errors.lastName}</p>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.confirmPassword}</p>
        </div>
            <h1>Cloud School</h1>
            <h2>Sign Up</h2>
            <form onSubmit={submit}>
                <label  className='label'>First Name</label>
                <input onChange={change} value={formValues.firstName} type='text' name='firstName'/>
                <label className='label'>Last Name</label>
                <input  onChange={change} value={formValues.lastName} type='text' name='lastName'/>
                <label className='label'>Email</label>
                <input  onChange={change} value={formValues.email} type='text' name='email'/>
                <label className='label'>Role</label>
                <select  onChange={change} value={formValues.role} name='role'>
                    <option value=''>---Select Role---</option>
                    <option value='student'>Student</option>
                    <option value='volunteer'>Volunteer</option>
                </select>
                <label className='label'>Password</label>
                <input  onChange={change} value={formValues.password} type='password' name='password'/>
                <label className='label'>Confirm Password</label>
                <input  onChange={change} value={formValues.confirmPassword} type='password' name='confirmPassword'/>
                <label className='label'>
                    <input disabled={disabled} type='submit'/>
                </label>
            </form>
        </div>
    )
}