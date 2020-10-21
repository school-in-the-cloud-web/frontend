import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';

import {editClass, deleteClass} from '../actions';


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
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor='name'>NAME
                    <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={handleChange} />
                </label><br/>
                
                <label htmlFor='volunteer'>VOLUNTEER
                    <input
                    type='text'
                    name='volunteer'
                    value={formValues.volunteer}
                    onChange={handleChange} />
                </label><br/>

                <label htmlFor='subject'>SUBJECT
                    <input
                    type='text'
                    name='subject'
                    value={formValues.subject}
                    onChange={handleChange} />
                </label><br/>

                <label htmlFor='description'>DESCRIPTION
                    <input
                    type='text'
                    name='description'
                    value={formValues.description}
                    onChange={handleChange} />
                </label><br/>

                <label htmlFor='date'>DATE
                    <input
                    type='text'
                    name='date'
                    value={formValues.date}
                    onChange={handleChange} />
                </label><br/>
                
                <button type='submit'>SUBMIT CHANGES</button>

            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,
        error: state.error,
        isFetching: state.isFetching,
    }
}

export default connect(mapStateToProps, {editClass, deleteClass})(EditClass)
