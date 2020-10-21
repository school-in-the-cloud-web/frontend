import React, {useEffect, useState} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

import {connect} from 'react-redux';
import {logIn} from './actions';

import Signup from './components/Signup'
import Signin from './components/Signin'
import {Route, Link, useHistory} from 'react-router-dom'
import ClassForm from './components/ClassForm';
import EditClass from './components/EditClass';
import PrivateRoute from './utils/PrivateRoute';
import Class from './components/Class'

import axios from 'axios';
import VolunteerDashboard from './components/VolunteerDashboard';


function App(props) {

  const {push} = useHistory();
  console.log(props.isLoggedIn)
  
  return (
    <div>

      <Jumbotron>
  <Link to={localStorage.getItem('role') === 'admin' ? '/admin-dashboard' : localStorage.getItem('role') === 'student' ? '/student-dashboard' : localStorage.getItem('role') === 'volunteer' ? '/volunteer-dashboard' : ''}>{localStorage.getItem('role') ? 'DASHBOARD' : ''}</Link>
        <Link to='/signin'>LOG IN</Link>
        <Link to='/signup'>SIGN UP</Link>
        <Link to='/'>HOME</Link>
        {props.isLoggedIn && <a href='' onClick={e => {e.preventDefault(); localStorage.removeItem('token'); localStorage.removeItem('role'); push('/signin')}}>LOG OUT</a>}

        <Route path='/'>
        <div className="jumbotron">
          <h1 className="display-3">School in the Cloud</h1>
          <p>School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting. This helps kids in communities with high student to teacher ratios. It also provides retired volunteers a sense of purpose and meaning in their day to day life when they find themselves with more free time. The platform also connects volunteers with the students.</p>
        </div>
        </Route>
        
          <Route exact path='/signin' component={Signin}/>
          <Route exact path='/signup' component={Signup} />
          <PrivateRoute exact path='/admin-dashboard'component={AdminDashboard} />
          <PrivateRoute exact path='/admin-dashboard/edit/:id' component={EditClass} />    
          <PrivateRoute exact path='/admin-dashboard/add' component={ClassForm}/>
          <PrivateRoute exact path='/tasks/:id' component={Class} />
          <PrivateRoute exact path='/volunteer-dashboard' component={VolunteerDashboard} />
          </Jumbotron>
          

    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, {})(App);
