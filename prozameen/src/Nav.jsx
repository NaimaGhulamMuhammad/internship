import React from "react"
import NavBar from './Navbar.jsx';

import Home from "./Home"
import Property from "./Property.jsx"
import ChangePassword from "./ChangePassword"
import Profile from "./Profile"
import SubmitProperty from "./SubmitProperty"
import Single from "./Single"
import Error from "./Error"

import Register from "./Register"
import Contact from "./Contact"
import MainPage from "./MainPage.jsx"
import Dashboard from "./admin dashboard/views/Dashboard";


import UserProperties from "./UserProperties.jsx"
import Faq from "./Faq"
import {Route,Switch} from "react-router";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
const Nav=()=>{
    return(

<>

<NavBar />
<Switch>

<Route exact path="/" component={Home}/> 

<Route exact path="/Home" component={Home}/>
<Route exact path="/Blog" component={MainPage}/> 
<Route exact path="/Property" component={Property}/> 
<Route exact path="/SubmitProperty" component={SubmitProperty}/> 
<Route exact path="/Faq" component={Faq}/> 
<Route exact path="/ChangePassword" component={ChangePassword}/>
<Route exact path="/Profile" component={Profile}/>
<Route exact path="/Single" component={Single}/>
<Route exact from="/admin" render={props => <Dashboard {...props}/> } />
<Route exact path="/Register" component={Register}/>



<Route exact Path="/Contact" component={Contact}/>
<Route exact Path="/UserProperties" component={UserProperties}/>

<Route exact path="/Error" component={Error}/>

<Route component={Error}/>
</Switch>
</>

    );
}
export default Nav;