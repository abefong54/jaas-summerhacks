import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import OverallStatsGraph from '../../components/OverallStatsGraph/OverallStatsGraph';
import Notebook from '../../components/Notebook/Notebook';
import { Component } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(25),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div style={{padding: '2% 2%'}, {margin: '5% 2% 2% 2%'}}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Notebook/>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>SHUBHA CODE HERE</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              ALMAS CODE HERE
  {/*             <OverallStatsGraph/> */}
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


