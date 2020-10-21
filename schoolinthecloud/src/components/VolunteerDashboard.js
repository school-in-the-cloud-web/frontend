import React, {useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {connect} from 'react-redux';

const VolunteerDashboard = (props) => {

    console.log(props.volunteerId)

    useEffect(() => {
        axiosWithAuth()
        .get('/user/volunteer')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            wow
        </div>
    )
}

const mapStateToProps = state => {
    return {
        volunteerId: state.volunteerId,
    }
}

export default connect(mapStateToProps, {})(VolunteerDashboard)
