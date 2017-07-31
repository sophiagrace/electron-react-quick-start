import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, IndexRoute } from 'react-router-dom';


/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})


ReactDOM.render(<Time/>,
   document.getElementById('root'));
