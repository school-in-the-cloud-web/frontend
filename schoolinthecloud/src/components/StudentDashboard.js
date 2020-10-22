import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {studentFetchClasses} from '../actions';
import styled from 'styled-components';


const Div = styled.div`
width: 80%;
margin: auto;
text-align: center;
font-family: 'Montserrat', sans-serif;

    h2 {
        margin-bottom: 3%;
    }
    
    form {
        margin: auto;
        box-shadow: none;

        input {
            margin: 7% auto;
        }
    }

    div {

        div {
            width: 60%;
            margin: 5% auto;
            border: solid white 2px;
            line-height: 5rem;
        }

        p {
            margin: 3% auto;
        }
    }
`

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
            const subArr = c.class_subject.split(/\W/).map(subject=>subject.toLowerCase())
            return subArr.some(sub => {
                return keyword.toLowerCase().split(/\W/).some(word=>{
                    return word === sub
                })
            })
        }))
    }

    useEffect(()=> {
        props.studentFetchClasses()
    }, [])
    return (
        <Div>
            <h2>Search for Classes by Subject</h2>
            {props.error && <p>We failed to retrieve the available classes due to an error of {props.error}</p>}
            
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
                {toggleSearch && searched.length >= 1 ? searched.map(c => {
                    return (
                        <div key={Math.random() * 100000}>
                            <p><span style={{fontWeight: 'bold'}}>Class:</span> {c.class_name}</p>
                            <p><span style={{fontWeight: 'bold'}}>Subject:</span> {c.class_subject}</p>
                            <p><span style={{fontWeight: 'bold'}}>Instructor:</span> {c.instructor_firstName} {c.instructor_lastName}</p>
                            <p><span style={{fontWeight: 'bold'}}>Start Date:</span> {c.class_date}</p>
                        </div>
                    )
                }) : toggleSearch && searched.length < 1 ? <p>We didn't find any classes matching that keyword</p> : ''}
            </div>
        </Div>
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
