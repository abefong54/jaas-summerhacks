import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/dashboard'
import Login from './components/Login/login.js';


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
            <Login/>
              <p className="App-intro"> {this.state.apiResponse} </p>
          </div>
    );
  }
}

export default App;
