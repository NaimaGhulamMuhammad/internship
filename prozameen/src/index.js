import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";

import './index.css';

import Sdata from "./Sdata";
import Cards from "./Cards";

 ReactDOM.render(
  <BrowserRouter>
   
  
   <App />
  

    
   </BrowserRouter>
   ,
  document.getElementById('root')
);
