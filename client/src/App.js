import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/dashboard'
import Login from './components/Login/login.js';
=======
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header/Header.js';
import Login from './containers/Login/Login.js';
import Dashboard from './containers/Dashboard/Dashboard.js';

>>>>>>> master


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
<<<<<<< HEAD
            <Login/>
              <p className="App-intro"> {this.state.apiResponse} </p>
=======
            <nav>
              <Header/>
            </nav>

            {/* ROUTES TO PAGES */}
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
>>>>>>> master
          </div>
    );
  }
}

export default App;
