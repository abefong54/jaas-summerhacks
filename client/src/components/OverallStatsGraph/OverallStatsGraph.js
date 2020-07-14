import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CanvasJSReact from '../../canvas/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



const useStyles = makeStyles({
  graph: {
    
    position: "absolute",
    top: "70%",
    left:"1%",

    
    
  },
 
  
});


export default function OverallStatsGraph({classAnalytics}){
    const styles = useStyles()
    console.log("INSIDE OVERAALLSTATSGRAPH.js")

    //CHECKING THE PROPS PASSED INTO THIS COMPONENT
    console.log(classAnalytics)
    console.log(classAnalytics.sad_sum)
    console.log(typeof(classAnalytics.sad_sum))
    
    
    const options = {
    backgroundColor: "white",
    height:400,
    width:450,
    
      title: {
        text: "Overall stats",
        fontColor:"black",
      },
      axisX:{
        interval: 1,
        labelFontColor: "black",
      },
      axisY2:{
        title: "Scale",
        labelFontColor: "black",
      },
      data: [{
          type: "bar",
          axisYType: "secondary",
          color:"lightskyblue",
          
                
          dataPoints: [
              { y: parseInt(classAnalytics.unknown_sum), label: "Unknown" },
              { y: parseInt(classAnalytics.fear_sum), label: "Fear" },
              { y: parseInt(classAnalytics.calm_sum), label: "Calm" },
              { y: parseInt(classAnalytics.surprised_sum), label: "Surprise" },
              { y: parseInt(classAnalytics.disgusted_sum), label: "Disgusted" },
              { y: parseInt(classAnalytics.angry_sum), label: "Angry" },
              { y: parseInt(classAnalytics.sad_sum), label: "Sad" },
              { y: parseInt(classAnalytics.happy_sum), label: "Happy"},
           ]
       }],
      }
    return(
      <Grid item xs={4}>
            <Paper >
            <div className={styles.graph} style={{width:"50px", height:"50px"}}>
                <CanvasJSChart options = {options} 
                /* onRef = {ref => this.chart = ref} */
                />
            </div>
            </Paper>
      </Grid>
        
        

    )
}


