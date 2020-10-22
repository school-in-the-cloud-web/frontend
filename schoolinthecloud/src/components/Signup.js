import React, {useState, useEffect} from 'react'
import './form.css'
import Schema from './Schema'
import * as yup from 'yup'
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {logIn, getVolunteerId} from '../actions';
import jwt_decode from 'jwt-decode'

import MissionStatement from './MissionStatement';

const Signup = (props) => {
    const initalTValue = true
    const initialFormValues = {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        role: '',
        country: '',
    }
    const [disabled, setDisabled] = useState(initalTValue)
    const [errors, setErrors] = useState(initialFormValues)
    const [formValues, setFormvalues] = useState(initialFormValues)
    const [quote, setQuote] = useState([])

    const {push} = useHistory();

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
        axios.post('https://cloud-school-api.herokuapp.com/auth/register', formValues)
        .then(res=>{
            axios
            .post('https://cloud-school-api.herokuapp.com/auth/login', {email: formValues.email, password: formValues.password})
            .then(res => {
                const token = res.data.token;
                const decoded = jwt_decode(token);
                props.logIn();
                localStorage.setItem('token', token);
                localStorage.setItem('role', decoded.role)
                if (localStorage.getItem('role') === 'volunteer') {
                    props.getVolunteerId(decoded.sub)
                    push('/volunteer-dashboard')
                } else if (localStorage.getItem('role') === 'student') {
                    push('/student-dashboard')
                } else if (localStorage.getItem('role') === 'admin') {
                    push('/admin-dashboard')
                }
            })

        })
        .catch(err => {
            console.log(err.response)
        })
        
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
            {/* <br />
            <br /> */}
            <MissionStatement />
            <br/>
            <form onSubmit={submit}>
            <img id='image' src='https://i.pinimg.com/originals/e4/0e/aa/e40eaa8b9839461ea1c45889e5bfb7f9.jpg' />
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
                <select className='role' onChange={change} value={formValues.role} name='role'>
                    <option value=''>---Select Role---</option>
                    <option value='student'>Student</option>
                    <option value='volunteer'>Volunteer</option>
                </select>
                <label className='label'> Country</label>
                <p className='auth'>{errors.country}</p>
                <input onChange={change} value={formValues.country} type='text' name='country'/>
                <label className='label'>Password</label>
                <p className='auth'>{errors.password}</p>
                <input  onChange={change} value={formValues.password} type='password' name='password'/>
                <label className='label'>Confirm Password</label>
                
                <input  onChange={change} value={formValues.confirmPassword} type='password' name='confirmPassword'/>
                <label className='label'>
                    <input disabled={disabled} type='submit'/>
                    <br />
                    <br />
                </label>
            </form>
            <br />
            <footer>
            <h2 className='randomq'>RANDOM QUOTE:</h2>
            <p className='randomq'>Quote: {quote.quote}</p>
            <p className='randomq'>Author: {quote.author}</p>
        </footer>
        </div>
    )
}

export default connect(null, {logIn, getVolunteerId})(Signup);