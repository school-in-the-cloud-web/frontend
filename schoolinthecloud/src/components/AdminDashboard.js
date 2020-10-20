import React, {useEffect} from 'react'
import ClassForm from './ClassForm';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';
import {useRouteMatch, Link} from 'react-router-dom';


import {fetchAllClasses, addClass, deleteClass, editClass } from '../actions';

import {connect} from 'react-redux';


export const AdminDashboard = (props) => {

    const {url} = useRouteMatch();


    useEffect(()=>{
        props.fetchAllClasses()
    }, [])

    console.log(props.classes)

    return (
        <div>
            <Link to='/class-form'>ADD A CLASS</Link>
            {props.classes.map(c => (
                <div>
                    <Link to={`/${url}/${c.id}`}>{c.name}</Link>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        classes: state.classes
    }
}

export default connect(mapStateToProps, {fetchAllClasses, addClass, editClass, deleteClass})(AdminDashboard);