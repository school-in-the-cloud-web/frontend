import React, {useEffect} from 'react'
import ClassForm from './ClassForm';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';
import {useRouteMatch, Link} from 'react-router-dom';
import styled from 'styled-components';


import {fetchAllClasses, addClass, deleteClass, editClass, fetchVolunteers } from '../actions';

import {connect} from 'react-redux';



const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    a {
        border-bottom: solid transparent 2px;
        text-decoration: none;
        font-family:'Montserrat', sans-serif;
        color: white;
        margin: 1% auto;
        transition-property: transform;
        transition-duration: .7s;
        transition-delay: .08s;
        transform: scale(1);

        &:hover {
            transform: scale(1.3)
        }
    }

`



export const AdminDashboard = (props) => {


    useEffect(()=>{
        props.fetchAllClasses()
        props.fetchVolunteers()
        // axiosWithAuth()
        // .get('/user/student')
        // .then(res=>{
        //     console.log(res)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })

    }, [])

    console.log(props.classes)
    console.log(props.volunteers)

    return (
        <div style={{textAlign: 'center'}}>
            <Link className='add-class-link' to='/admin-dashboard/add'>ADD A CLASS</Link><br/><br/><br/>
            <Div>
            {props.classes.map(c => (
                    <Link key={c.id} to={`/tasks/${c.id}`}><span>༄ </span>{c.name}</Link>
            ))}
            </Div>
            {props.isFetching && <p>One moment please...</p>}
            {props.error && <p style={{color: 'red'}}>{props.error}</p>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        classes: state.classes,
        volunteers: state.volunteers
    }
}

export default connect(mapStateToProps, {fetchAllClasses, addClass, editClass, deleteClass, fetchVolunteers})(AdminDashboard);