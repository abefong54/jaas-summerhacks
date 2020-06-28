import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Upload from './Upload/upload';
import ClassTable from '../../components/ClassTable/ClassTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
    root: {
    },
    welcomeBanner:{
        border:'5px solid lightskyblue',
        borderRadius: '5px',
        padding:'2em',
        marginLeft:'2em',
        marginBottom:'2em',
    },
  });
var testProfessor = 'Apple';

export default function Dashboard(){
    const classes= useStyles();

    return(
<div style={{paddingTop:'100px' }}>
                <Grid container spacing={12}>
                    <Grid item xs={4}>
                        <Paper className={classes.welcomeBanner} elevation={3}>
                            <div> Welcome back, Professor {testProfessor}</div>
                        </Paper> 
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={12}>
                            <Grid item xs={4}>
                                <ClassDropdown/>
                            </Grid>
                            <Grid item xs={4}>
                                <Upload />
                            </Grid>
                            <Grid item xs={4}>
                                <Link to="/analytics" ><button>Take me to dashboard</button></Link>
                            </Grid>
                        </Grid>
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


