import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import OverallStatsGraph from '../../components/OverallStatsGraph/OverallStatsGraph';
import Notebook from '../../components/Notebook/Notebook';
import { Component } from 'react'
import PlayVid from '../../components/PlayVid/PlayVid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Analytics(props) {
  const classes = useStyles();

  const style=useStyles();
  const [classAnalytics, setVideoAnalyticsData] = React.useState({});
  const [notebookData, setNotebookData] = React.useState({});
  const {videoName} = props.location.state;
  console.log('video name here: ' + videoName);

  console.log("Progs:");
  console.log(props.match.params.classID);

  React.useEffect(() => {
      fetch(`http://localhost:9000/resources/analytics/class-analytics?classID=${props.match.params.classID}`)
        .then(results => results.json())
        .then(data => {
          console.log("in client:");
          console.log(data);
          setVideoAnalyticsData(data.video);
          setNotebookData(data.notebook);
        });
    }, []);

  return (
    <div style={{padding: '2% 2%'}, {margin: '5% 2% 2% 2%'}}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Notebook notebookData={notebookData}/>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
                <PlayVid vid_name={videoName}/>
            </Paper>
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


