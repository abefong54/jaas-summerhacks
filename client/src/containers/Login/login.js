import React, { Component } from 'react';
import { Link , BrowserRouter, Switch, Route} from 'react-router-dom';
import "./login.css";
import dashboard from "../Dashboard/dashboard.js";
import history from '../history';



class Login extends Component {
    render(){

        return (
          <div className="container">
              <div className="login-title">
                  <h1>Zoom You Analytics</h1>
                  <p>Not registered yet? <a id="reg"href="#">Register now!</a></p>
                  <br></br>
                  <div className="login">
                      <form>
                        <input id="email"type="email" required placeholder="Email id"></input>
                        <br></br>
                        <input id="password" type="password" required placeholder="Password"></input>
                        <br></br>

                        <a href="">  <button class="btn success" onClick={()=>history.push('/dashboard')}>Log In</button>   </a>
                        <br></br>
                        <a href="" class="forgotPass" > Forgot password? Click here.</a>
                      </form>
                  </div>
              </div>
          </div>
        );

    }
}


export default Login;
