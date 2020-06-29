/* import React from 'react';
import OverallStatsGraph from '../../components/OverallStatsGraph/OverallStatsGraph';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import RealTimeStats from '../../components/RealTimeStats/RealTimeStats';
import PlayVid from '../../components/PlayVid/PlayVid';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        marginTop: '50px',
        padding:"30px"
    },
    vid:{
        marginTop:"30px",
        border:"1px solid lightskyblue",
        padding:"150px",
       
        

    },
    realtime:{
        marginTop:'10px',
        border:"1px solid lightskyblue",
        padding:"100px",
        marginBottom:'10px',
        

    },
    backbutton:{
      border: 0,
      borderRadius: 5,
      backgroundColor:"black",
      color:"white",
     
      height: 48,
      padding: '0 30px',
      weight: 'bold',
      marginTop:"70px",
      marginLeft:"30px"

    }
    
    
      
    
    

  });

export default function Analytics(){
    const style=useStyles();
    return(
        <div>
        
   <Link to="/dashboard" ><button className={style.backbutton}>Back</button></Link>

        

        <div className={style.root}>
            <div className={style.vid}>
                <PlayVid/>
            </div>
            <div className={style.realtime}>
                <RealTimeStats/>

            </div>
            <div className={style.overall}>
            <OverallStatsGraph/>

             </div>
             </div>
        
        
        
        </div>
        
    )

} */
 
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import OverallStatsGraph from '../../components/OverallStatsGraph/OverallStatsGraph';



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
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div style={{padding: '2% 2%'}, {margin: '5% 2% 2% 2%'}}>
      <div className={classes.root}>
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


