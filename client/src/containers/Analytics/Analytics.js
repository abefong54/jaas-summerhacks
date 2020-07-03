import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import OverallStatsGraph from '../../components/OverallStatsGraph/OverallStatsGraph';
import { Link } from 'react-router-dom';
import { Component } from 'react'
import MaterialTable from 'material-table'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(25),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    backbutton:{
        background: 'black',
        border: 0,
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color:'#87cefa' ,
        height: 48,
        padding: '0 30px',
        weight: 'bold',
    }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
      <div style={{padding: '2% 2%'}, {margin: '5% 2% 2% 2%'}}>
          <div className={classes.root}>
            <Link to="/dashboard" ><button className={classes.backbutton}>BACK</button></Link>
                                
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div style={{ maxWidth: '100%'}}>
                            <MaterialTable
                              columns={[
                                { title: 'Class Section', field: 'name' },
                                { title: 'Note', field: 'name' },
                                { title: 'Class Section', field: 'name' }

                              ]}
                              data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                              title="Notes"
                            />
                          </div>
                  </Grid>
                  <Grid item xs={8}>
                      <Paper className={classes.paper}>SHUBHA CODE HERE</Paper>
                  </Grid>
                  <Grid item xs={4}>
                      <Paper className={classes.paper}>
                        ALMAS CODE HERE
                        {/*<OverallStatsGraph/> */}
                      </Paper>
                   </Grid>
                  <Grid item xs={8}>
                      <Paper className={classes.paper}>GRAPH</Paper>
                  </Grid>
                </Grid>
          </div>
      </div>
  );
}


