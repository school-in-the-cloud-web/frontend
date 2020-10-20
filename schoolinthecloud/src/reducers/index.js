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
        DELETE_CLASS_FAILURE} from '../actions';


const initialState = {
    classes: [],
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}