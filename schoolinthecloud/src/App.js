import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './App.css';
import ClassForm from './ClassForm'
import Signup from './components/Signup'

function App() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">School in the Cloud</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting. This helps kids in communities with high student to teacher ratios. It also provides retired volunteers a sense of purpose and meaning in their day to day life when they find themselves with more free time. The platform also connects volunteers with the students.</p>
        <p className="lead">
          <Button>Display Classes</Button>
          <ClassForm />
        </p>
      </Jumbotron>
 
    </div>
  );
};

export default App;
