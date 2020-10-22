import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {studentFetchClasses} from '../actions';

const StudentDashboard = (props) => {
    const [keyword, setKeyword] = useState('');
    const [searched, setSearched] = useState('');
    const [toggleSearch, setToggleSearch] = useState(false)

    console.log(props.studentClasses);

    // SUBJECT

    const handleChange = e => {
         setKeyword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setToggleSearch(true)
        setSearched(props.studentClasses.filter(c => {
            return c.class_subject.toLowerCase() === keyword.toLowerCase()
        }))
    }

    useEffect(()=> {
        props.studentFetchClasses()
    }, [])
    return (
        <div>
            <h2>Search for Classes by Subject</h2>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor='keyword'>
                    <input
                    name='keyword'
                    type='text'
                    value={keyword}
                    onChange={handleChange}
                    placeholder='Enter a Subject'
                     />
                </label>
                <button type='submit'>SEARCH</button>
            </form>
            <div>
                {toggleSearch && searched.map(c => {
                    return (
                        <p key={Math.random() * 100000}>{c.class_name}</p>
                    )
                })}
            </div>
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
