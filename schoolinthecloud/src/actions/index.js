import {axiosWithAuth} from '../utils/axiosWithAuth';

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

//VOLUNTEER ACTIONS

export  const GET_VOLUNTEER_ID = 'GET_VOLUNTEER_ID';



// TEACHER/STUDENT ACTIONS

export const FETCH_OWN_CLASSES_START = 'FETCH_OWN_CLASSES_START';
export const FETCH_OWN_CLASSES_SUCCESS = 'FETCH_OWN_CLASSES_SUCCESS';
export const FETCH_OWN_CLASSES_FAILURE = 'FETCH_OWN_CLASSES_FAILURE';



// STUDENT ACTIONS

export const FETCH_AVAILABLE_CLASSES_START = 'FETCH_AVAILABLE_CLASSES_START';
export const FETCH_AVAILABLE_CLASSES_SUCCESS = 'FETCH_AVAILABLE_CLASSES_SUCCESS';
export const FETCH_AVAILABLE_CLASSES_FAILURE = 'FETCH_AVAILABLE_CLASSES_FAILURE';

export const ENROLL_CLASS_START = 'ENROLL_CLASS_START';
export const ENROLL_CLASS_SUCCESS = 'ENROLL_CLASS_SUCCESS';
export const ENROLL_CLASS_FAILURE = 'ENROLL_CLASS_FAILURE';

export const UNENROLL_CLASS_START = 'UNENROLL_CLASS_START';
export const UNENROLL_CLASS_SUCCESS = 'UNENROLL_CLASS_SUCCESS';
export const UNENROLL_CLASS_FAILURE = 'UNENROLL_CLASS_FAILURE';



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
        console.log(err);
        dispatch({type: FETCH_ALL_CLASSES_FAILURE, payload: err.message})
    })
}

export const addClass = newClass => dispatch => {
    console.log(newClass)
    dispatch({type: ADD_CLASS_START});
    axiosWithAuth()
    .post('/tasks', newClass)
    .then(res => {
        console.log(res);
        dispatch({type: ADD_CLASS_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err.response);
        dispatch({type: ADD_CLASS_FAILURE, payload: err.response})
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

export const logIn = () => dispatch => {
    dispatch({type: LOG_IN});
}

export const logOut = () => dispatch => {
    dispatch({type: LOG_OUT})
}

export const getVolunteerId = id => dispatch => {
    dispatch({type: GET_VOLUNTEER_ID, payload: id});
}


// STUDENT/TEACHER

// export const fetchOwnClasses = () => dispatch => {
//     dispatch({type: FETCH_OWN_CLASSES_START});
//     axiosWithAuth()
//     .get('/')
// }
