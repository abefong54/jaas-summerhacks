import React from 'react';
import CanvasJSReact from '../../canvas/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function OverallStatsGraph({classAnalytics}){
    console.log("INSIDE OVERAALLSTATSGRAPH.js")

    //CHECKING THE PROPS PASSED INTO THIS COMPONENT
    console.log(classAnalytics)
    console.log(classAnalytics.sad_sum)
    console.log(typeof(classAnalytics.sad_sum))
    
    
    const options = {
    backgroundColor: "black",
    height:400,
    width:450,
    
      title: {
        text: "Overall stats",
        fontColor:"#87cefa",
      },
      axisX:{
        interval: 1,
        labelFontColor: "#87cefa",
      },
      axisY2:{
        title: "Scale",
        labelFontColor: "white",
      },
      data: [{
          type: "bar",
          axisYType: "secondary",
          color: "#87cefa",
                
          dataPoints: [
              { y: parseInt(classAnalytics.unknown_sum), label: "Unknown" },
              { y: parseInt(classAnalytics.fear_sum), label: "Fear" },
              { y: parseInt(classAnalytics.calm_sum), label: "Calm" },
              { y: parseInt(classAnalytics.surprised_sum), label: "Surprise" },
              { y: parseInt(classAnalytics.disgusted_sum), label: "Disgusted" },
              { y: parseInt(classAnalytics.angry_sum), label: "Angry" },
              { y: parseInt(classAnalytics.sad_sum), label: "Sad" },
              { y: parseInt(classAnalytics.happy_sum), label: "Happy"  },
           ]
       }],
      }
    return(
        <div className="overall" style={{height:"300px", width:"300px"}}>
            <CanvasJSChart options = {options} 
                /* onRef = {ref => this.chart = ref} */
            />
        </div>
        

    )
}


