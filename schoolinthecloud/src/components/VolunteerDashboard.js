import React, {useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const VolunteerDashboard = () => {

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

export default VolunteerDashboard
