import React from 'react';
import ReactDOM from 'react-dom';

import CounterApp from './CounterApp';
// import FirstApp from './FirstApp';

import './index.css';


const divRoot = document.querySelector('#root');
// <FirstApp saludo='Hello first app' />, 

ReactDOM.render(
  <CounterApp value={10} />,
  divRoot
);
