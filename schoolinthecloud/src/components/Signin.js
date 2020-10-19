import React, {useState} from 'react'
export default function Signin(){
    const initialFormValues = {
        email: '',
        password: '',
    }
    const [formValues, setFormvalues] = useState(initialFormValues)

    const change = e => {
        const {checked, name, type, value} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormvalues({...formValues, [name]: valueToUse})
    }

    const submit = e => {
        e.preventDefault()
        console.log(formValues)
    }

    return(
    <div className='MainDiv'>
        <h1>Cloud School</h1>
        <h2>Sign in</h2>
        <form onSubmit={submit}>
            <label>E-mail</label>
            <input onChange={change} value={formValues.email} type='text' name='email'/>
            <label>Password</label>
            <input onChange={change} value={formValues.password} type='password' name='password'/>
            <label></label>
            <input type='submit'/>
        </form>
    </div>)
}