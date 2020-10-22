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

  const handleSubmit =  e => {
    e.preventDefault();
    props.addClass({...formValues, volunteer: Number(formValues.volunteer)});
    push('/admin-dashboard');
  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }


  return (
    <Form onSubmit={handleSubmit} style={{width: '60%', margin: '4% auto', fontFamily: 'Montserrat, sans-serif'}}>
      <h2 style={{marginBottom: '3%', fontWeight: 'bold'}}>Add Class</h2>
      <FormGroup>
        <Label>Class Name 
          <Input style={{margin: '0 10px'}} placeholder='Name of the class' type="text" name="name" id="name" onChange={handleChange} value={formValues.name}/>
        </Label>
      </FormGroup>
      <br />
      <FormGroup>
        <Label htmlFor="volunteer">Instructor 
          <Input style={{margin: '0 10px'}} type='select' placeholder='Name of the volunteer/instructor' onChange={handleChange} name="volunteer" value={formValues.volunteer} id="volunteer">
            <option value=''>SELECT AN INSTRUCTOR</option>
            {props.volunteers.map(vol => {
              return(
              <option key={vol.id} value={vol.id}>{vol.firstName} {vol.lastName}</option>
              )
            })}
          </Input>
        </Label>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="subject">Subject 
          <Input style={{margin: '0 10px'}} placeholder='Subject of the class' onChange={handleChange} type="text" name="subject" id="subject" value={formValues.subject}/>
        </Label>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="date">Class Date 
          <Input style={{margin: '0 10px'}} onChange={handleChange} value={formValues.date} type="text" name="date" id="date" placeholder='Start date (YYYY-MM-DD)'/>
        </Label>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="description">Additional Information 
          <Input style={{margin: '0 10px'}} placeholder='Additional information' onChange={handleChange} type="textarea" name="description" id="description" value={formValues.description}/>
        </Label>
      </FormGroup>
      <br />
      <Button style={{marginBottom: '20px'}} type='submit'>Submit Class</Button>
      {props.isFetching && <p>One moment please...</p>}
    </Form>
  );
}

const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      error: state.error,
      classes: state.classes,
      volunteers: state.volunteers,
    }
}

export default connect(mapStateToProps, {addClass})(ClassForm);