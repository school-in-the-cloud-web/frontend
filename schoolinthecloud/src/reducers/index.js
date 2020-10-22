import {FETCH_ALL_CLASSES_START,
        FETCH_ALL_CLASSES_SUCCESS,
        FETCH_ALL_CLASSES_FAILURE,
        ADD_CLASS_START,
        ADD_CLASS_SUCCESS,
        ADD_CLASS_FAILURE,
        EDIT_CLASS_START,
        EDIT_CLASS_SUCCESS,
        EDIT_CLASS_FAILURE,
        DELETE_CLASS_START,
        DELETE_CLASS_SUCCESS,
        DELETE_CLASS_FAILURE,
        LOG_IN,
        LOG_OUT,
        FETCH_VOLUNTEERS_START,
        FETCH_VOLUNTEERS_SUCCESS,
        FETCH_VOLUNTEERS_FAILURE,
        STUDENT_FETCH_CLASSES_START,
        STUDENT_FETCH_CLASSES_SUCCESS,
        STUDENT_FETCH_CLASSES_FAILURE,
        VOLUNTEER_FETCH_CLASSES_START,
        VOLUNTEER_FETCH_CLASSES_SUCCESS,
        VOLUNTEER_FETCH_CLASSES_FAILURE} from '../actions';


const initialState = {
    //admin
    classes: [],
    volunteers: [],
    //volunteer
    currentVolunteerId: '',
    volunteerClasses: [],
    //student
    studentClasses: [],
    //all
    isFetching: false,
    error: '',
    isLoggedIn: false,
    role: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        // ALL

        case LOG_IN:
            return {
                 ...state,
                 isLoggedIn: true,
                 role: action.payload
             }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
            }

        // VOLUNTEER

        case VOLUNTEER_FETCH_CLASSES_START:
            return {
                ...state,
                isFetching: true,
            }
        case VOLUNTEER_FETCH_CLASSES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                volunteerClasses: action.payload,
            }
        case VOLUNTEER_FETCH_CLASSES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }

        // ADMIN

        case FETCH_VOLUNTEERS_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_VOLUNTEERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                volunteers: action.payload,
            }
        case FETCH_VOLUNTEERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case FETCH_ALL_CLASSES_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_ALL_CLASSES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                classes: action.payload
            }
        case FETCH_ALL_CLASSES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_CLASS_START:
            return {
                ...state,
                isFetching: true,
            };
        case ADD_CLASS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                classes: state.classes
            };
        case ADD_CLASS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case EDIT_CLASS_START:
            return {
                ...state,
                isFetching: true,
            };
        case EDIT_CLASS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                classes: [...state.classes, action.payload]
            };
        case EDIT_CLASS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case DELETE_CLASS_START:
            return {
                ...state,
                isFetching: true,
            };
        case DELETE_CLASS_SUCCESS:
            return {
                ...state,
                isfetching: false,
            }
        case DELETE_CLASS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        // STUDENT

        case STUDENT_FETCH_CLASSES_START:
            return {
                ...state,
                isFetching: true,
            }
        case STUDENT_FETCH_CLASSES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                studentClasses: action.payload
            }
        case STUDENT_FETCH_CLASSES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: '' + action.payload.status + ': ' + action.payload.response
            }
        default:
            return state;
    }
}