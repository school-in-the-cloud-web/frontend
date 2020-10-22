import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {studentFetchClasses} from '../actions';

const StudentDashboard = (props) => {
    const [searchedClasses, setSearchedClasses] = useState([]);
    const [searchValue, setSearchValue] = useState({value: ''})

    console.log(props.studentClasses);

    // SUBJECT

    const handleChange = e => {
        setSearchValue({value: e.target.value})
    }

    const handleSubmit = e => {
        
    }

    useEffect(()=> {
        props.studentFetchClasses()
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                value={searchValue.value}
                onChange={handleChange} />
            </form>
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
