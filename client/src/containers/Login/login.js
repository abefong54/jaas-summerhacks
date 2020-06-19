import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";


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
                        <Link to="/dashboard" className="btn btn-primary">Log In</Link>
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
