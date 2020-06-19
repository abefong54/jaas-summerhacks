import React from 'react';
import './dashboard.css';
import Header from '/Users/almasfiza/Desktop/jaas-summerhacks/src/components/Dashboard/header/header.js';
import OverallStats from './overallStats/OverallStats';
import CanvasJSReact from '/Users/almasfiza/Desktop/jaas-summerhacks/src/canvas/canvasjs.react.js';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class dashboard extends React.Component{
    render(){
        return(
           <div id="NavBar">
           <h2 class="ui right floated header">Float Right</h2>
           <h2 class="ui left floated header">Float Left</h2>
           </div>,
           
           <div id="overall"><OverallStats/></div>   
            
        )
    }
}

export default dashboard;