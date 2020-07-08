import React from 'react';
import CanvasJSReact from '../../canvas/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function OverallStatsGraph(){
    const options = {
    backgroundColor: "black",
    height:200,
    width:900,
    border:2,
    
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
        labelFontColor: "#87cefa",
      },
      data: [{
          type: "bar",
          axisYType: "secondary",
          color: "#87cefa",
                
          dataPoints: [
              { y: 100, label: "Fear" },
              { y: 100, label: "Unknown" },
              { y: 100, label: "Calm" },
              { y: 100, label: "Surprise" },
              { y: 100, label: "Disgusted" },
              { y: 140, label: "Confused" },
              { y: 40, label: "Angry" },
              { y: 50, label: "Sad" },
              { y: 120, label: "Happy"  },
           ]
       }],
      }
    return(
        <div className="overall" >
            <CanvasJSChart options = {options}
                /* onRef = {ref => this.chart = ref} */
            />
        </div>
        

    )
}


