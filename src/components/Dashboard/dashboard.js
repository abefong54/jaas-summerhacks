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
           <div id="NavBar"><Header/></div>,
            <div id="overall"><OverallStats/></div>   
            
        )
    }
}

export default dashboard;