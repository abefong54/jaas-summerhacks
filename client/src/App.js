import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header/Header.js';
import Login from './containers/Login/Login.js';
import Dashboard from './containers/Dashboard/Dashboard.js';
import Footer from './containers/Footer/Footer.js';


class App extends Component {


  // INITIALIZE DEFAULT STATE
  constructor(props) {
      super(props);
      this.state = {apiResponse: ""};
  }

  // FETCH DATA
  callAPI() {
      fetch("http://localhost:9000/resources")
          .then(res=>res.text())
          .then(res=>this.setState( {apiResponse: res}))
          .catch(err => err);
  }

  // ONCE COMPONENT MOUNTS, CALL API
  conponentDidMount() {
     this.callAPI();
  }

  render() {
      return (  
          <div>
            <nav>
              <Header/>
            </nav>
            {/*    

            ADDED SETTINGS AND LOGOUT BUTTONS TO THE HEADER
            WILL ADD HEADER TO THE APP.JS LOGIN SCREEN ONCE I FIGURE OUT HOW TO
            
            */}
            

            {/* ROUTES TO PAGES */}
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />

            <nav>
               <Footer/>
            </nav>


          </div>

          
    );
  }
}

export default App;
