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
      <FormGroup>
        <Label for="additionalInfo">Additional Information</Label>
        <Input type="textarea" name="additionalInfo" id="additionalInfo" />
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText> */}
      {/* </FormGroup> */}
      {/* <FormGroup tag="fieldset">
        <legend>Grade Level</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1"  value=""/>{' '}
            1st - 4th Grade
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            5th - 8th Grade
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            9th - 12th Grade
          </Label>
        </FormGroup>
      </FormGroup> */}
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Make class private
        </Label>
      </FormGroup>
      <Button>Submit Class</Button>
    </Form>
  );
}

export default ClassForm;