import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, useHistory, Redirect} from 'react-router-dom';
import {editClass, deleteClass, fetchAllClasses} from '../actions';

import styled from 'styled-components';


const Div = styled.div`
    text-align: center;
    width: 50%;
    margin: auto;

    span {
        font-weight: bold;
    }
`

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


    const handleDelete = e => {
        e.preventDefault();
        props.deleteClass(currentClass.id);
        push('/admin-dashboard');
        
    }

    return (
        <Div>
            <p><span>Class Name: </span>{currentClass.name}</p>
            <p><span>Subject: </span>{currentClass.subject}</p>
            <p><span>Description: </span>{currentClass.description}</p>
            <p><span>Instructor: </span>{volunteer.firstName} {volunteer.lastName}</p>
            <p><span>Start Date: </span>{currentClass.date}</p> <br/>
        
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
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,
        volunteers: state.volunteers,

    }
}

export default connect(mapStateToProps, {editClass, deleteClass, fetchAllClasses})(Class)
