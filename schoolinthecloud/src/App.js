import React, {useEffect, useState} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import AdminDashboard from './components/AdminDashboard';
import './App.css';
import {axiosWithAuth} from './utils/axiosWithAuth'

import {connect} from 'react-redux';
import {logIn, logOut} from './actions';

import Signup from './components/Signup'
import Signin from './components/Signin'
import { Route, useHistory } from "react-router-dom";
import ClassForm from './components/ClassForm';
import EditClass from './components/EditClass';
import PrivateRoute from './utils/PrivateRoute';
import Class from './components/Class'

import StudentDashboard from './components/StudentDashboard';
import Navbar from "./components/Navbar";
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
    <div style={{ fontSize: "3rem" }}>
      <Jumbotron>
        <Navbar />
        <Route path="/">
          <div className="jumbotron">
            <h1 className="display-3">School in the Cloud</h1>
          </div>
          <br />
        </Route>

        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute
          exact
          path="/admin-dashboard"
          component={AdminDashboard}
        />
        <PrivateRoute
          exact
          path="/admin-dashboard/edit/:id"
          component={EditClass}
        />
        <PrivateRoute exact path="/admin-dashboard/add" component={ClassForm} />
        <PrivateRoute exact path="/tasks/:id" component={Class} />
        <PrivateRoute
          exact
          path="/volunteer-dashboard"
          component={VolunteerDashboard}
        />
        <PrivateRoute
          exact
          path="/student-dashboard"
          component={StudentDashboard}
        />
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
