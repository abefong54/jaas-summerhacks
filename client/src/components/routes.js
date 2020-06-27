

import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history"
import Login from "./Login/login";
import Dashboard from "./Dashboard/Sashboard";
import Analytics from "./Analytics/Analytics"


export default class Routes extends Component {
    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/analytics" component={Analytics}/>
                </Switch>
            </Router>
        )
    }
}

