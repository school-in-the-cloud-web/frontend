import React, {useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {connect} from 'react-redux';
import {volunteerFetchClasses} from '../actions'

const VolunteerDashboard = (props) => {

    console.log(props.volunteerClasses)

    useEffect(() => {
        props.volunteerFetchClasses()
    }, [])

    return (
        <div className='volunteer-card' >
            <form>
            <img id='image' src='https://i.pinimg.com/originals/e4/0e/aa/e40eaa8b9839461ea1c45889e5bfb7f9.jpg' />
            {props.volunteerClasses.map(c => {
                return <p key={c.id}><span className='volunteer-card-big-text'>{c.name}</span><br/>{c.subject}<br/>
                {c.date}</p>
            })}
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        volunteerId: state.currentVolunteerId,
        volunteerClasses: state.volunteerClasses,
    }
}

export default connect(mapStateToProps, {volunteerFetchClasses})(VolunteerDashboard)
