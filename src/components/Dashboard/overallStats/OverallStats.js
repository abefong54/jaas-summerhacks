
import React from 'react';
import CanvasJSReact from '/Users/almasfiza/Desktop/jaas-summerhacks/src/canvas/canvasjs.react.js';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;




class OverallStats extends React.Component{

    render() {

        
        const options = {
        backgroundColor: "black",
        height:200,
        width:1000,
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
            
            gridColor: "black",
            title: "Scale",
            labelFontColor: "#87cefa",
        },
          data: [{				
                    type: "bar",
                    axisYType: "secondary",
		color: "#87cefa",
                    
                    dataPoints: [
                        { y: 200, label: "Surprised" },
                        { y: 140, label: "Confused" },
                        { y: 40, label: "Sad" },
                        { y: 50, label: "Neutral" },
                        { y: 120, label: "Happy"  },
                    ]
           }]
       }
            
       return (
          <div  className="overall">
            <CanvasJSChart options = {options}
                /* onRef = {ref => this.chart = ref} */
            />
          </div>
        );
      }


}
export default OverallStats;