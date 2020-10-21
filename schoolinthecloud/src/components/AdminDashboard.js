import React, {useEffect} from 'react'
import ClassForm from './ClassForm';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';
import {useRouteMatch, Link} from 'react-router-dom';


import {fetchAllClasses, addClass, deleteClass, editClass, fetchVolunteers } from '../actions';

import {connect} from 'react-redux';


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
        <div>
            <Link to='/admin-dashboard/add'>ADD A CLASS</Link>
            {props.classes.map(c => (
                <div key={c.id}>
                    <Link to={`/tasks/${c.id}`}>{c.name}</Link>
                </div>
            ))}
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