import React, {useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {connect} from 'react-redux';
import {volunteerFetchClasses} from '../actions'

const VolunteerDashboard = (props) => {

    console.log(props.volunteerId)

    useEffect(() => {
        props.volunteerFetchClasses()
    }, [])

    return (
        <div>
            {props.volunteerClasses.map(c => {
                return <p key={c.id}>{c.name}</p>
            })}
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
