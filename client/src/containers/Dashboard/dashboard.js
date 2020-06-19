import React, { Component } from 'react';
import './Dashboard.css';
import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';
import Grid from '@material-ui/core/Grid';


class Dashboard extends Component{
    render() {
        // SHOULD BE A HUGE DIV WITH A BANNER FOR USER GREETING, 
        // A DROPDOWN FOR CLASS SELECTION
        // A BUTTON FOR VIDEO UPLOADING FORM
        // AND A TABLE WITH VIDEOS BELONGING TO A CLASS
        return (  
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className="">
                            WELCOME BANNER
                        </div> 
                    </Grid>
                    <Grid item xs={6}>
                        <div className="">
                            <ClassDropdown/>
                        </div> 
                    </Grid>
                    <Grid item xs={12}>
                        <div className="">
                            <h1>The Dashboard Body</h1>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default Dashboard;