import React, { Component } from 'react';
import './Dashboard.css';
import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      
      
    },
    welcomBanner:{
        paddingLeft:'20' ,
            

    },
    dropdown:{

    }


  });


export default function Dashboard(){
    const classes= useStyles();

    return(
<div style={{paddingTop:'100px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className={classes.welcomeBanner}>
                            WELCOME BANNER
                        </div> 
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.dropdown}>
                            <ClassDropdown/>
                        </div> 
                    </Grid>
                    <Grid item xs={12}>
                        <div className="">
                            <h1>The Dashboard Body </h1>
                        </div>
                    </Grid>
                </Grid>
            </div>

    )
}


