import React, {useEffect, useState} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import AdminDashboard from './components/AdminDashboard';
import './App.css';
import {axiosWithAuth} from './utils/axiosWithAuth'

import {connect} from 'react-redux';
import {logIn, logOut} from './actions';

import Signup from './components/Signup'
import Signin from './components/Signin'
import {Route, Link, useHistory} from 'react-router-dom'
import ClassForm from './components/ClassForm';
import EditClass from './components/EditClass';
import PrivateRoute from './utils/PrivateRoute';
import Class from './components/Class'

import StudentDashboard from './components/StudentDashboard';

import Footer from './components/Footer'


import axios from 'axios';
import VolunteerDashboard from './components/VolunteerDashboard';


function App(props) {
  const [token, setToken] = useState('')

  const {push} = useHistory();
  console.log(props.isLoggedIn);

  useEffect(()=>{
    setToken(localStorage.getItem('token'))
  }, [token])

  console.log(props.role)
  
  return (
    <div style={{fontSize: '3rem'}}>

      <Jumbotron>
        <div className='nav'>
        {props.isLoggedIn && <Link className="links" to={props.role === 'admin' ? '/admin-dashboard' : props.role === 'student' ? '/student-dashboard' : props.role === 'volunteer' ? '/volunteer-dashboard': ''}>DASHBOARD</Link>}
        {!props.isLoggedIn && <Link className="links" to='/signin'>LOG IN</Link>}
        {!props.isLoggedIn && <Link className="links" to='/signup'>SIGN UP</Link>}
        {!props.isLoggedIn && <Link className="links" to='/'>HOME</Link>}
        {props.isLoggedIn && <a className="links" href='' onClick={e => {e.preventDefault(); localStorage.removeItem('token'); localStorage.removeItem('role'); localStorage.removeItem('loggedIn'); props.logOut(); push('/signin')}}>LOG OUT</a>}
        </div>
        <Route path='/'>
        <div className="jumbotron">
          <h1 className="display-3">School in the Cloud</h1>
        </div>
        <br />
        </Route>
        
          <Route exact path='/signin' component={Signin}/>
          <Route exact path='/signup' component={Signup} />
          <PrivateRoute exact path='/admin-dashboard'component={AdminDashboard} />
          <PrivateRoute exact path='/admin-dashboard/edit/:id' component={EditClass} />    
          <PrivateRoute exact path='/admin-dashboard/add' component={ClassForm}/>
          <PrivateRoute exact path='/tasks/:id' component={Class} />
          <PrivateRoute exact path='/volunteer-dashboard' component={VolunteerDashboard} />
          <PrivateRoute exact path='/student-dashboard' component={StudentDashboard} />
          </Jumbotron>
          <Footer />

    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    role: state.role
  }
}

export default connect(mapStateToProps, {logOut})(App);
