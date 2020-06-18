import React, { Component } from 'react';
import Upload from './upload/upload'
import './dashboard.css';


class Dashboard extends Component{
    // INITIALIZE DEFAULT STATE
    constructor(props) {
        super(props);
        this.state = {
            apiResponse:"","other": "other stuff"
        };
    }

    // FETCH DATA
    callAPI() {
        fetch("http://localhost:9000/resources/dashboard")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res["classes"] }))
            .catch(err => err);
    }

    // ONCE COMPONENT MOUNTS, CALL API
    conponentDidMount() {
        this.callAPI();
    }
    
    render() {
        console.log(this.state);
        return (  
            <Upload/>
            // <div>
            //     <p className="App-intro"> 
            //         {this.state.apiResponse}
            //         {this.state.other}
            //         hiii
            //     </p>
            // </div>
        );
    }

}

export default Dashboard;