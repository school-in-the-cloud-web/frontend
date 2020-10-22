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
            {props.error && <p>We aren't able to display your classes: {props.error}</p>}
            <form>
            <img id='image' src='https://i.pinimg.com/originals/e4/0e/aa/e40eaa8b9839461ea1c45889e5bfb7f9.jpg' />
            {props.volunteerClasses.map(c => {
                return <p key={c.id}><span className='volunteer-card-big-text'>{c.name}</span><br/>{c.subject}<br/>
                {c.date}</p>
            })}
            </form>
            {props.isFetching && <p>One moment please...</p>}
            {props.volunteerClasses.length < 1 && !props.isFetching && <p>You aren't assigned to teach any classes yet. Check back at another time.</p>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        volunteerId: state.currentVolunteerId,
        volunteerClasses: state.volunteerClasses,
        error: state.error,
        isFetching: state.isFetching,
    }
}

export default connect(mapStateToProps, {volunteerFetchClasses})(VolunteerDashboard)
