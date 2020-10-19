import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import AdminDashboard from './AdminDashboard';
import './App.css';
import ClassForm from './ClassForm'

function App() {
  return (
    <div>
      <Jumbotron>
        <div className="jumbotron">
          <h1 className="display-3">School in the Cloud</h1>
          <p>School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting. This helps kids in communities with high student to teacher ratios. It also provides retired volunteers a sense of purpose and meaning in their day to day life when they find themselves with more free time. The platform also connects volunteers with the students.</p>
        </div>
          {/* <Button>Display Classes</Button> */}
          <hr />
          <AdminDashboard />
      </Jumbotron>
    </div>
  );
};

export default App;
