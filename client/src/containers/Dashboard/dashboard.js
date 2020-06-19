import React, { Component } from 'react';
import './Dashboard.css';
import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';
//import DropdownClass from '../../components/Dropdown.js';
import Header from '../Header/Header.js';


class Dashboard extends Component{
        







    // INITIALIZE DEFAULT STATE
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }

    // FETCH DATA
    callAPI() {
        fetch("http://localhost:9000/resources/dashboard")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res["classes"] }))
            .catch(err => err);
    }

    // ONCE COMPONENT MOUNTS, CALL API
    componentDidMount() {
        this.callAPI();
    }

    // //* <p className="App-intro"> 
    //     {this.state.apiResponse}
        
    //     hiii
    // </p> */
    
    render() {
        console.log(this.state);

        
        // SHOULD BE A HUGE DIV WITH A BANNER FOR USER GREETING, 
        // A DROPDOWN FOR CLASS SELECTION
        // A BUTTON FOR VIDEO UPLOADING FORM
        // AND A TABLE WITH VIDEOS BELONGING TO A CLASS
        return (  
            <div>
                <Header/>
                <div className="dropdown">
                <ClassDropdown/>
                </div>


                
                <div className="bodyDashboard">
                <h1>The Dashboard Body</h1>

                </div>
                
            </div>
        );
    }

}

export default Dashboard;