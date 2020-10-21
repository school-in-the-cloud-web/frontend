import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {studentFetchClasses} from '../actions';

const StudentDashboard = (props) => {

    console.log(props.studentClasses);

    useEffect(()=> {
        props.studentFetchClasses()
    })
    return (
        <div>
            wow
        </div>
    )
}

const mapStateToProps = state => {
    return {
        studentClasses: state.studentClasses,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapStateToProps, {studentFetchClasses})(StudentDashboard)
