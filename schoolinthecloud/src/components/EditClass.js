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
        volunteer: volunteer,
        subject: currentClass.subject,
        date: currentClass.date,
    })

    const [toggleDelete, setToggleDelete] = useState(false);

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        editClass(id, formValues);
        push('/admin-dashboard');
    }

    const handleDelete = e => {
        e.preventDefault();
        deleteClass(id);
        push('admin-dashboard');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor='name'>
                    <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={handleChange} />
                </label>
                
                <label htmlFor='volunteer'>
                    <input
                    type='text'
                    name='volunteer'
                    value={formValues.volunteer}
                    onChange={handleChange} />
                </label>

                <label htmlFor='subject'>
                    <input
                    type='text'
                    name='subject'
                    value={formValues.subject}
                    onChange={handleChange} />
                </label>

                <label htmlFor='description'>
                    <input
                    type='text'
                    name='description'
                    value={formValues.description}
                    onChange={handleChange} />
                </label>

                <label htmlFor='date'>
                    <input
                    type='text'
                    name='date'
                    value={formValues.date}
                    onChange={handleChange} />
                </label>
                
                <button type='submit'>SUBMIT CHANGES</button>

            </form>
            <button onClick={() => {setToggleDelete(!toggleDelete)}}>DELETE CLASS</button>
            {toggleDelete && 
            <div>
                <p>ARE YOU SURE?</p>
                <button onClick={handleDelete}>YES</button>
                <button onClick={() => {
                    setToggleDelete(!toggleDelete)
                }}>NO</button>
            </div>
            }
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
