import React from 'react';
import './App.css';
import Dashboard from "./admin dashboard/views/Dashboard";

import Header from "./Header";
import Nav from "./Nav";
import Footer from'./Footer';
import {useHistory} from "react-router-dom"

function App(props) {
  
    const history = useHistory()
   const admin = history.location('/admin')
   console.log(admin)
   if (history.location === "/admin")
  return (
    <>
     <Header/>
     {/* <NavBar/> */}
     <Nav/>

<Footer/>

 </>
  ) 
  else
  return(
    <>
      <Dashboard/>
    </>
  )
}

export default App;

