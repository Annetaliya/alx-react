import Notifications from '../Notifications/Notifications'
import React from 'react';
import './App.css';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App({ isLoggedIn }) {

  return (
    <div>
        <Notifications />
      <div className="App">
        <Header />
      <div className= "App-body">
         {isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <div className="App-footer">
        <Footer />
      </div>
      
      
      </div>

    </div>
   
  );
}

App.defaultProps = {
  isLoggedIn: true,
};

App.propTypes = { 
  isLoggedIn: PropTypes.bool,
}

export default App;
