

import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history"
import Login from "./Login/login";
import dashboard from "./Dashboard/dashboard";


export default class Routes extends Component {
    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/dashboard" component={dashboard} />
                </Switch>
            </Router>
        )
    }
}

