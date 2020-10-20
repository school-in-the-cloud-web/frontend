import React from 'react';
import {connect} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {editClass, deleteClass} from '../actions';

const Class = (props) => {

    const {push} = useHistory();

    const {id} = useParams();

    const currentClass = props.classes.find(c=>{
        return c.id == id;
    }) || {};


    return (
        <div>
            {currentClass.name}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,

    }
}

export default connect(mapStateToProps, {editClass, deleteClass})(Class)
