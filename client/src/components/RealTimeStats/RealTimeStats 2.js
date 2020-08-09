import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CanvasJSReact from '../../canvas/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const useStyles = makeStyles({
    graph: {
      
      position: "absolute",
      top: "65%",
      left:"35%",
  
      
    },
   
    
  });

export default function RealTimeStats(){
    const styles = useStyles()
    const options = {
        theme: "light",
        backgroundColor:'white',
        
        
        animationEnabled: true,
        zoomEnabled: true,
        title:{
            text: "Emotions vs Time",
            color:"black"
        },
        axisX: {
            title:"Time in ms",
            color: "black",
            suffix: "°C",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY:{
            title: "Emotion",
            color: "black",
            includeZero: false,
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        data: [{
            type: "scatter",
            markerSize: 15,
            color:"lightskyblue",
            toolTipContent: "<b>Temperature: </b>{x}°C<br/><b>Sales: </b>{y}",
            dataPoints: [
                { x: 14.2, y: 215},
                { x: 12.9, y: 175},
                { x: 16.4, y: 325},
                { x: 26.9, y: 635},
                { x: 32.5, y: 464},
                { x: 22.1, y: 522},
                { x: 19.4, y: 412},
                { x: 25.1, y: 614},
                { x: 34.9, y: 374},
                { x: 28.7, y: 625},
                { x: 23.4, y: 544},
                { x: 31.4, y: 502},
                { x: 40.8, y: 262},
                { x: 37.4, y: 312},
                { x: 42.3, y: 202},
                { x: 39.1, y: 302},
                { x: 17.2, y: 408}
            ]
        }]
    }
    
    return(
        <div className={styles.graph} style={{width:"900px",height:"100px"}}>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>

        
    )
}