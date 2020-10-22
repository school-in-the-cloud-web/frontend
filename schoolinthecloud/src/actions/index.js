import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';

//ALL USER ACTIONS

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';


// ADMIN ACTIONS

export const FETCH_ALL_CLASSES_START = 'FETCH_ALL_CLASSES_START';
export const FETCH_ALL_CLASSES_SUCCESS = 'FETCH_ALL_CLASSES_SUCCESS';
export const FETCH_ALL_CLASSES_FAILURE = 'FETCH_ALL_CLASSES_FAILURE';

export const ADD_CLASS_START = 'ADD_CLASS_START';
export const ADD_CLASS_SUCCESS = 'ADD_CLASS_SUCCESS';
export const ADD_CLASS_FAILURE = 'ADD_CLASS_FAILURE';

export const EDIT_CLASS_START = 'EDIT_CLASS_START';
export const EDIT_CLASS_SUCCESS = 'EDIT_CLASS_START';
export const EDIT_CLASS_FAILURE = 'EDIT_CLASS_FAILURE';

export const DELETE_CLASS_START = 'DELETE_CLASS_START';
export const DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS';
export const DELETE_CLASS_FAILURE = 'DELETE_CLASS_FAILURE';

export const FETCH_VOLUNTEERS_START = 'FETCH_VOLUNTEERS_START';
export const FETCH_VOLUNTEERS_SUCCESS = 'FETCH_VOLUNTEERS_SUCCESS';
export const FETCH_VOLUNTEERS_FAILURE = 'FETCH_VOLUNTEERS_FAILURE';

//VOLUNTEER ACTIONS

export const VOLUNTEER_FETCH_CLASSES_START = 'VOLUNTEER_GET_CLASSES';
export const VOLUNTEER_FETCH_CLASSES_SUCCESS = 'VOLUNTEER_GET_CLASSES_SUCCESS';
export const VOLUNTEER_FETCH_CLASSES_FAILURE = 'VOLUNTEER_GET_CLASSES_FAILURE';



// STUDENT ACTIONS

export const STUDENT_FETCH_CLASSES_START = 'STUDENT_FETCH_CLASSES_START';
export const STUDENT_FETCH_CLASSES_SUCCESS = 'STUDENT_FETCH_CLASSES_SUCCESS';
export const STUDENT_FETCH_CLASSES_FAILURE = 'STUDENT_FETCH_CLASSES_FAILURE';




//ADMIN

export const fetchAllClasses = () => dispatch => {
    dispatch({type: FETCH_ALL_CLASSES_START});
    axiosWithAuth()
    .get('/tasks')
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_ALL_CLASSES_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err.message);
        dispatch({type: FETCH_ALL_CLASSES_FAILURE, payload: err.message})
    })
}

export const addClass = newClass => dispatch => {
    console.log(newClass)
    dispatch({type: ADD_CLASS_START});
    axiosWithAuth()
    .post('/tasks', newClass)
    .then(async res => {
        const {push} = useHistory();
        console.log(res);
        dispatch({type: ADD_CLASS_SUCCESS, payload: res.data});
        // push('/admin-dashboard')
    })
    .catch(err => {
        console.log(err.response);
        dispatch({type: ADD_CLASS_FAILURE, payload: err.response.data.error[0]})
    })
}

export const editClass = (id, info) => dispatch => {
    dispatch({type: EDIT_CLASS_START});
    axiosWithAuth()
    .put(`/tasks/${id}`, info)
    .then(res => {
        console.log(res);
        dispatch({type: EDIT_CLASS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err.response);
        dispatch({type: EDIT_CLASS_FAILURE, payload: err.message})
    })
}

export const deleteClass = id => dispatch => {
    dispatch({type: DELETE_CLASS_START});
    axiosWithAuth()
    .delete(`/tasks/${id}`)
    .then(res => {
        console.log(res);
        dispatch({type: DELETE_CLASS_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err.response);
        dispatch({type: DELETE_CLASS_FAILURE, payload: err.message});
    })
}

export const fetchVolunteers = () => dispatch => {
    dispatch({type: FETCH_VOLUNTEERS_START})
    axiosWithAuth()
    .get('/user/getVolunteers')
    .then(res=>{
        console.log(res)
        dispatch({type: FETCH_VOLUNTEERS_SUCCESS, payload: res.data})
    })
    .catch(err=>{
        console.log(err.message)
        dispatch({type: FETCH_VOLUNTEERS_FAILURE, payload: err.message})
    })
}





//VOLUNTEER

export const volunteerFetchClasses = () => dispatch => {
    dispatch({type: VOLUNTEER_FETCH_CLASSES_START});
    axiosWithAuth()
    .get('/user/volunteer')
    .then(res=>{
        console.log(res)
        dispatch({type: VOLUNTEER_FETCH_CLASSES_SUCCESS, payload: res.data})
    })
    .catch(err=>{
        console.log(err.message);
        dispatch({type: VOLUNTEER_FETCH_CLASSES_FAILURE, payload: err.message});
    })
}





// STUDENT

export const studentFetchClasses = () => dispatch => {
    dispatch({type: STUDENT_FETCH_CLASSES_START});
    axiosWithAuth()
    .get('/user/student')
    .then(res=>{
        console.log(res)
        dispatch({type: STUDENT_FETCH_CLASSES_SUCCESS, payload: res.data})
    })
    .catch(err=>{
        console.log('errorrrr', err.response)
        dispatch({type: STUDENT_FETCH_CLASSES_FAILURE, payload: {response: err.response.statusText, status: err.response.status}})
    })
}


//ALL

export const logIn = role => dispatch => {
    dispatch({type: LOG_IN, payload: role});
}

export const logOut = () => dispatch => {
    dispatch({type: LOG_OUT})
}
