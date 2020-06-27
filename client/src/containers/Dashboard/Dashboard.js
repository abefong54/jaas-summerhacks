import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Upload from './Upload/upload';
import ClassTable from '../../components/ClassTable/ClassTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
    root: {
    },
    welcomeBanner:{
        paddingLeft:'30px',
        border:'5px solid lightskyblue',
        borderRadius: '5px',
        padding:'20px',
    },
  });

export default function Dashboard(){
    const classes= useStyles();

    return(
<div style={{paddingTop:'100px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className={classes.welcomeBanner}>
                            Welcome back! -- Welcome Banner
                        </div> 
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.dropdown}>
                            <ClassDropdown/>
                            
                            <Link to="/analytics" ><button className={classes.dropdown}>---></button></Link>
                            
                        </div> 
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.dropdown}>
                            
                            <Upload />
                            
                            
                        </div> 
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{paddingLeft:'20px', paddingRight:'20px', paddingBottom:'20px',border:'2px solid lightskyblue',paddingBottom:'300px'}}>
                            <h1>The Dashboard Body </h1>
                            {/* CREATE DASHBOARD COMPONENT */}
                            <ClassTable/>
                        </div>
                    </Grid>
                </Grid>
            </div>

    )
}


