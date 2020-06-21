import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Header from './containers/Header/Header.js';
import Login from './containers/Login/Login.js';
import Dashboard from './containers/Dashboard/Dashboard.js';
import Footer from './containers/Footer/Footer.js';
import Grid from '@material-ui/core/Grid';



class App extends Component {
  render() {
      return (  
          <div>
            <Grid container spacing={3}>
              
              {/* HEADER */}
              <Grid item xs={12}>
                  <nav>
                    <Header/>
                  </nav>
              </Grid>
              
              {/* ROUTES TO PAGES */}
              <Grid container spacing={3}>
                <Grid item xs={12}> 
                    <Route path="/" exact component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" exact component={Login}/>
                </Grid>
              </Grid>

              {/* FOOTER */}
              <Grid item xs={12}>
                  <nav>
                    <Footer/>
                  </nav>
              </Grid>
            </Grid>


          </div>

          
    );
  }
}

export default App;
