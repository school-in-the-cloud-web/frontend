import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import {addClass} from '../actions';
import {useHistory} from 'react-router-dom';

const initialFormValues = {
  name: '',
  volunteer: '',
  subject: '',
  date: '',
  description: ''
}

const ClassForm = (props) => {

  const {push} = useHistory();
  
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleSubmit = async e => {
    e.preventDefault();
    await props.addClass({...formValues, volunteer: Number(formValues.volunteer)});
    push('/admin-dashboard');
  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }


  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Class</h2>
      <FormGroup>
        <Label>Class Name
          <Input placeholder='Name of the class' type="text" name="name" id="name" onChange={handleChange} value={formValues.name}/>
        </Label>
      </FormGroup>
      <br />
      <FormGroup>
        <Label htmlFor="volunteer">Instructor ID
          <Input placeholder='Name of the volunteer/instructor' onChange={handleChange} type="text" name="volunteer" id="volunteer">
          </Input>
        </Label>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="subject">Subject
          <Input placeholder='Subject of the class' onChange={handleChange} type="text" name="subject" id="subject" value={formValues.subject}/>
        </Label>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="date">Class Date
          <Input onChange={handleChange} value={formValues.date} type="text" name="date" id="date" placeholder='Start date (YYYY-MM-DD)'/>
        </Label>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="description">Additional Information
          <Input placeholder='Additional information' onChange={handleChange} type="textarea" name="description" id="description" value={formValues.description}/>
        </Label>
      </FormGroup>
      <br />
      <Button type='submit'>Submit Class</Button>
    </Form>
  );
}

const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      error: state.error,
      classes: state.classes
    }
}

export default connect(mapStateToProps, {addClass})(ClassForm);