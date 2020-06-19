import React, { Component } from 'react';
import './Dashboard.css';
import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';


class Dashboard extends Component{
    render() {
        // SHOULD BE A HUGE DIV WITH A BANNER FOR USER GREETING, 
        // A DROPDOWN FOR CLASS SELECTION
        // A BUTTON FOR VIDEO UPLOADING FORM
        // AND A TABLE WITH VIDEOS BELONGING TO A CLASS
        return (  
            <div>
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