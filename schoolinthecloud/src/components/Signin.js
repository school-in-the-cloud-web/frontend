import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import './form.css'
import jwt_decode from "jwt-decode";
import {connect} from 'react-redux';
import {logIn} from '../actions';

import MissionStatement from './MissionStatement';

function Signin(props){
    const initialFormValues = {
        email: '',
        password: '',
    }
    const [formValues, setFormvalues] = useState(initialFormValues)
    const [quote, setQuote] = useState([])
    const [error, setError] = useState('');
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
            props.logIn(decoded.role);
            localStorage.setItem('token', token);
            localStorage.setItem('role', decoded.role);
            localStorage.setItem('loggedIn', 'true')
            if (localStorage.getItem('role') === 'volunteer') {
                push('volunteer-dashboard')
            } else if (localStorage.getItem('role') === 'student') {
                push('/student-dashboard')
            } else if (localStorage.getItem('role') === 'admin') {
                push('/admin-dashboard')
            }
            
        })
        .catch(err => {
            console.log(err.response);
            setError(err.response.data.message)
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
        <MissionStatement/>
        <br/>
        <form className='formSignIn' onSubmit={submit}>
            <br />
        <img id='image' src='https://i.pinimg.com/originals/e4/0e/aa/e40eaa8b9839461ea1c45889e5bfb7f9.jpg' />
            <label>E-mail</label>
            <input onChange={change} value={formValues.email} type='text' name='email'/>
            <label>Password</label>
            <input onChange={change} value={formValues.password} type='password' name='password'/>
            <br />
            <label></label>
            {error && <p style={{color: 'red', fontSize: '2.5rem'}}>{error}</p>}
            <input className='sesubmit' type='submit'/>
            <br />
        </form>
        <br />
        <br />
        <footer>
            <h2 className='randomq'>RANDOM QUOTE</h2>
            <p className='randomq'>Quote: {quote.quote}</p>
            <p className='randomq'>Author: {quote.author}</p>
        </footer>
    </div>
    )
}

export default connect(null, {logIn})(Signin)