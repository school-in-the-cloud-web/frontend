import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useParams, useHistory, Redirect} from 'react-router-dom';
import {editClass, deleteClass} from '../actions';

const Class = (props) => {

    const [toggleDelete, setToggleDelete] = useState(false);

    const {push} = useHistory();

    const {id} = useParams();

    const currentClass = props.classes.find(c=>{
        return c.id == id;
    }) || {};


    const handleDelete = async e => {
        e.preventDefault();
        await props.deleteClass(currentClass.id);
        push('/admin-dashboard');
        
    }

    return (
        <div>
            <p>CLASS NAME: {currentClass.name}</p>
            <p>SUBJECT: {currentClass.subject}</p>
            <p>DESCRIPTION: {currentClass.description}</p>
            {/* <p>INSTRUCTOR: {currentClass.instructor}</p> */}
            <p>START DATE: {currentClass.date}</p>
        
        <button onClick={() => {
            push(`/admin-dashboard/edit/${id}`)
        }}>EDIT CLASS</button>
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

    }
}

export default connect(mapStateToProps, {editClass, deleteClass})(Class)
