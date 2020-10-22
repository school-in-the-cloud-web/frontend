import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';

import {editClass, deleteClass} from '../actions';

import styled from 'styled-components';

const Div = styled.div`
    form {
        margin: 0 auto;
        width: 60%;
        margin-bottom: 4%;
        padding-bottom: 3%;
    }
`


const EditClass = (props) => {

    const {push} = useHistory();

    const {id} = useParams();

    const currentClass = props.classes.find(c=>{
        return c.id == id;
    }) || {};

    const volunteer = props.classes.filter(c => {
        return c.id === id
    }).map(vol => {
        return vol.name
    })

    const [formValues, setFormValues] = useState({
        name: currentClass.name,
        volunteer: currentClass.volunteer,
        subject: currentClass.subject,
        date: currentClass.date,
        description: currentClass.description,
    })



    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.editClass(currentClass.id, formValues);
        push('/admin-dashboard');
    }



    return (
        <Div>
            <form onSubmit={handleSubmit}>

                <label htmlFor='name'>Name: 
                    <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={handleChange} />
                </label><br/>
                
                <label htmlFor='volunteer'>Volunteer: 
                    <select placeholder='Name of the volunteer/instructor' onChange={handleChange} name="volunteer" value={formValues.volunteer} id="volunteer">
                    <option value=''>Instructor: </option>
                        {props.volunteers.map(vol => {
                            return(
                            <option key={vol.id} value={vol.id}>{vol.firstName} {vol.lastName}</option>
                            )
                        })}
                    </select>
                </label><br/>

                <label htmlFor='subject'>Subject: 
                    <input
                    type='text'
                    name='subject'
                    value={formValues.subject}
                    onChange={handleChange} />
                </label><br/>

                <label htmlFor='description'>Description: 
                    <input
                    type='text'
                    name='description'
                    value={formValues.description}
                    onChange={handleChange} />
                </label><br/>

                <label htmlFor='date'>Date: 
                    <input
                    type='text'
                    name='date'
                    value={formValues.date}
                    onChange={handleChange} />
                </label><br/>
                
                <button type='submit'>SUBMIT CHANGES</button>

            </form>
            {props.isFetching && <p>One moment please...</p>}
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,
        error: state.error,
        isFetching: state.isFetching,
        volunteers: state.volunteers,
    }
}

export default connect(mapStateToProps, {editClass, deleteClass})(EditClass)
