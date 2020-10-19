import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ClassForm = (props) => {
  return (
    <Form>
      <h2>Add Class</h2>
      <FormGroup>
        <Label>Class Name</Label>
        <Input type="text" name="className" id="className"/>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="instructor">Instructor</Label>
        <Input type="select" name="instructor" id="instructor">
          <option>Samuel L Jackson</option>
          <option>Wile E. Coyote</option>
          <option>Morticia Adams</option>
          <option>Michael Jordan</option>
          <option>Professor Moriarty</option>
        </Input>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="subject">Subject</Label>
        <Input type="select" name="subject" id="subject">
          <option>English</option>
          <option>Geography</option>
          <option>History</option>
          <option>Mathematics</option>
          <option>Science</option>
        </Input>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="classDate">Class Date (YYYY-MM-DD)</Label>
        <Input type="select" name="classDate" id="classDate">
          <option>2020-11-02</option>
          <option>2020-12-07</option>
          <option>2021-01-04</option>
          <option>2021-02-01</option>
          <option>2021-03-01</option>
        </Input>
      </FormGroup>
      <br />
      <FormGroup>
        <Label for="additionalInfo">Additional Information</Label>
        <Input type="textarea" name="additionalInfo" id="additionalInfo" />
      </FormGroup>
      <br />
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Make class private
        </Label>
      </FormGroup>
      <br />
      <Button>Submit Class</Button>
    </Form>
  );
}

export default ClassForm;