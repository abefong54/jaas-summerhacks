import React, { Component } from 'react';
import './dashboard.css';
import Header from './Header/header';
import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';
//import DropdownClass from '../../components/Dropdown.js';


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
    
    render() {
        console.log(this.state);
        return (  
            <div>
                <p className="App-intro"> 
                    {this.state.apiResponse}
                    
                    hiii
                </p>
                <div>
                    <Header />
                </div>
                <div>
                    <ClassDropdown />
                    
                    
                </div>
                
                
                
            </div>
        );
    }

}

export default Dashboard;