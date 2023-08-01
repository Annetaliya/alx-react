import Notifications from '../Notifications/Notifications'
import React from 'react';
import './App.css';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <div>
        <Notifications />
      <div className="App">
        <Header />
      <div className= "App-body">
        <Login />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
      
      
      </div>

    </div>
   
  );
}

export default App;
