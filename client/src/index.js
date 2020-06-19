import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


//https://www.youtube.com/watch?v=9Ka1fcn74Hg
//https://pages.awscloud.com/Search-Your-DynamoDB-Data-with-Amazon-Elasticsearch-Service_1103-ABD_OD.html
//https://www.npmjs.com/package/dashboards
ReactDOM.render(
  <BrowserRouter>
      <div className="App">
<<<<<<< HEAD:client/src/index.js
          <Routes />
=======
          <App />
>>>>>>> master:src/index.js
      </div>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
