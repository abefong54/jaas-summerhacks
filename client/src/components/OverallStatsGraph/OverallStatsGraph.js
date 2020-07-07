import React from 'react';
import CanvasJSReact from '../../canvas/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function OverallStatsGraph({classAnalytics}){
  console.log("INSIDE OVERAALLSTATSGRAPH.js")
  //CHECKING THE PROPS PASSED INTO THIS COMPONENT
  console.log({classAnalytics})
  
  console.log("ANGRY")
  //STORING THE VALUES OF THE classAnalytics props passed IN ARRAY FORMAT CHANGES THE ORDER OF THE KEYS
  const arr=Object.values(classAnalytics)
  console.log(arr)
  //TRYING TO FIND A WAY TO GET THE VALUE OF THIS OBJECT ARR[6] METHOD 1
  console.log(arr[6])
  //TRYING ANOTHER WAY  METHOD 2- MAPPING THE OBJECT TO ARRAY BUT STILL HAVE THE NUMERIC VALUE IN OBJECT FORM INSIDE
  function convertObjectToList(obj) {
    return Object.keys(obj).map(function(key){
      let currElement = [key, obj[key]];
      return currElement
    });
   }
   
   var res = convertObjectToList(classAnalytics);
   console.log("RES AFTER MAPPING")
   console.log(res)
   
  
  
  //TO CHECK THE DATA TYPE
  console.log(typeof(classAnalytics.lecture_name) )
 
  
 
  
  
  

  //TRY TO CONVERT THE OBJECT TO A NUMBER
  /* console.log(JSON.stringify(emo[0].S)) */
  
  /* console.log({classAnalytics["angry_sum"]}) */
  
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
              { y: 100, label: "Angry" },
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


