import React, {useState} from 'react'
import '../components/Signup.css'

export default function Signup(){
    const initialFormValues = {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        role: '',
    }
    const [errors, setErrors] = useState(initialFormValues)
    const [formValues, setFormvalues] = useState(initialFormValues)
    return(
        <div className = 'MainDiv'> 
            <h1 className='cloud'>Cloud School</h1>
            <from className='form'>
                <label className='label'>First Name</label>
                <input type='text' name='firstName'/>
                <label className='label'>Last Name</label>
                <input type='text' name='lastName'/>
                <label className='label'>Email</label>
                <input type='text' name='email'/>
                <label className='label'>Role</label>
                <select name='role'>
                    <option value=''>---Select Role---</option>
                    <option value='student'>Student</option>
                    <option value='volunteer'>Volunteer</option>
                </select>
                <label className='label'>Password</label>
                <input type='password' name='password'/>
                <label className='label'>Confirm Password</label>
                <input type='password' name='confirmPassword'/>
                <label className='label'>
                    <input type='submit'/>
                </label>

            </from>
        </div>
    )
}