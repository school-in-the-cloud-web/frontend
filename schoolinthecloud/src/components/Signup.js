import React, {useState, useEffect} from 'react'
import './form.css'
import Schema from './Schema'
import * as yup from 'yup'
import axios from 'axios'

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
    const [quote, setQuote] = useState([])

    useEffect(()=>{
        axios.get('http://quotes.stormconsultancy.co.uk/random.json')
        .then(res => {
            setQuote(res.data)
        }).catch(err => {
            console.log('error: ', err)})
    },[])

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
                
            }).catch(err => {
                console.log(err)
            })
    }, [formValues])

    const hadleSetErrors = (name, value) => {
        yup.reach(Schema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ''}))
            .catch(err => {setErrors({...errors, [name]: err.errors[0]})})
    }

    

    
    return(
        <div className = 'MainDiv'> 
            <h1>Cloud School</h1>
            <h2>Sign Up</h2>
            <form onSubmit={submit}>
                <label  className='label'>First Name</label>
                <p className='auth'>{errors.firstName}</p>
                <input onChange={change} value={formValues.firstName} type='text' name='firstName'/>
                <label className='label'>Last Name</label>
                <p className='auth'>{errors.lastName}</p>
                <input  onChange={change} value={formValues.lastName} type='text' name='lastName'/>
                <label className='label'>Email</label>
                <p className='auth'>{errors.email}</p>
                <input  onChange={change} value={formValues.email} type='text' name='email'/>
                <label className='label'>Role</label>
                <p className='auth'>{errors.role}</p>
                <select  onChange={change} value={formValues.role} name='role'>
                    <option value=''>---Select Role---</option>
                    <option value='student'>Student</option>
                    <option value='volunteer'>Volunteer</option>
                </select>
                <label className='label'>Password</label>
                <p className='auth'>{errors.password}</p>
                <input  onChange={change} value={formValues.password} type='password' name='password'/>
                <label className='label'>Confirm Password</label>
                
                <input  onChange={change} value={formValues.confirmPassword} type='password' name='confirmPassword'/>
                <label className='label'>
                    <input disabled={disabled} type='submit'/>
                </label>
            </form>
            <footer>
                <h2 className='randomq'>RANDOM QUOTE:</h2>
                <h3><span>Author: </span>{quote.author}</h3>
                <h3><span>Quote: </span>{quote.quote}</h3>
            </footer>
        </div>
    )
}