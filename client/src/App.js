import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbar from './components/layout/Navbar';
import File from './components/File'
import Dashboard from './components/layout/Dashboard'
import VideoUpload from './components/layout/VideoUpload'
import AddCourse from './components/layout/AddCourse'
import MyCourses from './components/layout/MyCourses'
import CourseDetails from './components/layout/CourseDetails'

function App() {
  useEffect(() => {
    //Initializes materialize js
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/file' component={File} />
          <Route exact path='/video' component={VideoUpload} />
          <Route exact path='/addCourse' component={AddCourse} />
          <Route exact path='/myCourses' component={MyCourses} />
          <Route exact path='/courseDetail' component={CourseDetails} />

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
