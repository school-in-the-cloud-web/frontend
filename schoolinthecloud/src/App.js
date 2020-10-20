import React, {useEffect, useState} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

import Signup from './components/Signup'
import Signin from './components/Signin'
import {Route} from 'react-router-dom'
import ClassForm from './components/ClassForm';
import EditClass from './components/EditClass';
import PrivateRoute from './utils/PrivateRoute';
import {Link} from 'react-router-dom';
import axios from 'axios';


function App() {
  const [classes, setClasses] = useState(null)
  useEffect(()=>{
    axios.post('https://cloud-school-api.herokuapp.com/auth/login', {email: "starullo@email.com", password: "gRh06ZYT1gSB"})
    .then(res=>{
      console.log(res);
      localStorage.setItem('token', res.data.token);
    })
    .catch(err => {
      console.log(err.response)
    })
    // axios.get('https://cloud-school-api.herokuapp.com/tasks')
    // .then(res=>{
    //   console.log(res)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })
  }, [])
  
  return (
    <div>

      <Jumbotron>
        <Link to='/admin-dashboard'>DASHBOARD</Link>
        <div className="jumbotron">
          <h1 className="display-3">School in the Cloud</h1>
          <p>School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting. This helps kids in communities with high student to teacher ratios. It also provides retired volunteers a sense of purpose and meaning in their day to day life when they find themselves with more free time. The platform also connects volunteers with the students.</p>
        </div>
          {/* <Button>Display Classes</Button> */}
          <hr />
          <PrivateRoute exact path='/admin-dashboard'component={AdminDashboard} />
          <PrivateRoute exact path='/admin-dashboard:id' component={EditClass} />    
          <PrivateRoute exact path='/class-form' component={ClassForm}/>
          </Jumbotron>
          

    </div>
  );
};

export default App;
