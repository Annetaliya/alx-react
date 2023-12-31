import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications'
// import React from 'react';
import './App.css';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listCourses: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          credit: 40,
        },
      ],
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "default", html: getLatestNotification() },
      ],
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;
    const { listCourses, listNotifications } = this.state;

    return (
      <div>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">         
            <BodySectionWithMarginBottom title="Course list">
              {isLoggedIn ? <CourseList listCourses={listCourses} /> : null}
            </BodySectionWithMarginBottom>
            
            <BodySectionWithMarginBottom title="Log in to continue">
              {!isLoggedIn ? <Login /> : null}
            </BodySectionWithMarginBottom>
            <BodySection title="News from the School">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis leo et dolor tincidunt, eu
                pharetra velit facilisis. Ut euismod tortor in metus varius auctor. In ac enim ullamcorper, feugiat justo
                non, bibendum lectus. Vestibulum posuere magna sit amet nunc congue, non feugiat metus posuere. Vestibulum
                dapibus ut quam non auctor. Sed eget felis aliquet, egest
              </p>
            </BodySection>
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {}
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;

