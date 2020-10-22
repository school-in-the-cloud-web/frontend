import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, useHistory, Redirect} from 'react-router-dom';
import {editClass, deleteClass, fetchAllClasses} from '../actions';

const Class = (props) => {

    const [toggleDelete, setToggleDelete] = useState(false);

    const {push} = useHistory();


    const {id} = useParams();

    useEffect(()=> {
        props.fetchAllClasses();
    }, [])

    const currentClass = props.classes.find(c=>{
        return c.id == id;
    }) || {};

    const volunteer = props.volunteers.find(c=>{
         return c.id == currentClass.volunteer_id
     }) || {};
     console.log('useParams', id)
     console.log(volunteer)
    console.log(props.volunteers)
    console.log(currentClass)


    const handleDelete = async e => {
        e.preventDefault();
        await props.deleteClass(currentClass.id);
        push('/admin-dashboard');
        
    }

    return (
        <div>
            <p>Class Name: {currentClass.name}</p>
            <p>Subject: {currentClass.subject}</p>
            <p>Description: {currentClass.description}</p>
            <p>Instructor: {volunteer.firstName} {volunteer.lastName}</p>
            <p>Start Date: {currentClass.date}</p> <br/>
        
        <button style={{margin: '0 5% 5% 0'}} onClick={() => {
            push(`/admin-dashboard/edit/${id}`)
        }}>༄ EDIT CLASS</button>
                    <button onClick={() => {setToggleDelete(!toggleDelete)}}>DELETE CLASS ༄</button>
            {toggleDelete && 
            <div>
                <p>ARE YOU SURE?</p>
                <button style={{margin: '0 5% 5% 0'}} onClick={handleDelete}>༄ YES</button>
                <button onClick={() => {
                    setToggleDelete(!toggleDelete)
                }}>NO ༄</button>
            </div>
            }
            <br/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,
        volunteers: state.volunteers,

    }
}

export default connect(mapStateToProps, {editClass, deleteClass, fetchAllClasses})(Class)
