import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Link,NavLink } from "react-router-dom";
// import Abc from "../"
import Register from './Register'
import "./assets/css/normalize.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/fontello.css";
import "./assets/fonts/icon-7-stroke/css/pe-icon-7-stroke.css";
import "./assets/fonts/icon-7-stroke/css/helper.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-select.min.css";
import "./bootstrap/css/bootstrap.min.css";
import "./assets/css/icheck.min_all.css";
import "./assets/css/price-range.css";
// import "../assets/css/owl.carousel.css";
// import "../assets/css/owl.theme.css";
import "./assets/css/owl.transitions.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

export default function NavBar() {

    return (
      <>
 
        <nav class="navbar navbar-default navbar-right navbar-expand-lg navbar-dark bg-dark pl-5 pr-5">
       <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
        <img  alt="timer" src={require('./imag/logo.png')} /></a>
                
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item " >
              <NavLink class="nav-link" to='/'> Home</NavLink>
            </li>
      
            
      <li class="nav-item ">
        <NavLink class="nav-link" to="/Property">Property <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Blog">Blog</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Profile">Profile</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/ChangePassword">ChangePassword</Link>
      </li>
      
    <li class="nav-item">
        <Link class="nav-link" to="/Contact">Contact</Link>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
     <Link to="/Register" className="navbar-btn nav-button wow bounceInRight login">Login</Link>
     <Link className="navbar-btn nav-button wow fadeInRight" to="/SubmitProperty">Submit</Link>
     
                                 </form>
  </div>
  </div>
</nav>


            <div id="container">

                    
               


                <nav className="navbar navbar-default ">
                    <div className="container">
                        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                       

                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
               
                            {/* <!-- /.navbar-collapse --> */}
                        </div>
                        {/* <!-- /.container-fluid --> */}
        </nav>
                    {/* <!-- End of nav bar --> */}

</div>
                        
      </>
  );
}
