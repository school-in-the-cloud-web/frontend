import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import './form.css'
import jwt_decode from "jwt-decode";

export default function Signin(){
    const initialFormValues = {
        email: '',
        password: '',
    }
    const [formValues, setFormvalues] = useState(initialFormValues)
    const [quote, setQuote] = useState([])

    const {push} = useHistory();

    const change = e => {
        const {checked, name, type, value} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormvalues({...formValues, [name]: valueToUse})
    }

    const submit = e => {
        e.preventDefault()
        axios
        .post('https://cloud-school-api.herokuapp.com/auth/login', formValues)
        .then(res => {
            const token = res.data.token;
            const decoded = jwt_decode(token);
            console.log(decoded)
            localStorage.setItem('token', token);
            localStorage.setItem('role', decoded.role)
            push('/admin-dashboard')
            
        })
        .catch(err => {
            console.log(err.response);
        })
    }

    useEffect(()=>{
        axios.get('http://quotes.stormconsultancy.co.uk/random.json')
        .then(res => {
            setQuote(res.data)
        }).catch(err => {
            console.log('error: ', err)})
    },[])

    return(
    <div className='MainDiv'>
        <h1>Cloud School</h1>
        <h2>Sign in</h2>
        <form className='formSignIn' onSubmit={submit}>
            <label>E-mail</label>
            <input onChange={change} value={formValues.email} type='text' name='email'/>
            <label>Password</label>
            <input onChange={change} value={formValues.password} type='password' name='password'/>
            <label></label>
            <input className='sesubmit' type='submit'/>
        </form>
        <footer>
            <h2 className='randomq'>RANDOM QUOTE:</h2>
            <h3><span>Author: </span>{quote.author}</h3>
            <h3><span>Quote: </span>{quote.quote}</h3>
        </footer>
    </div>)
}