import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login.js';
import CanvasJSReact from './canvas/canvasjs.react.js';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



function App() {
  return (

    <Login/>
    );
}

export default App;
