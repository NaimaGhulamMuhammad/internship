
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {NavLink} from 'react-router-dom';
import Popper from 'popper.js';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import React from 'react';


const Header =()=>{
return(
    <>
    <div id="container">

    <div className="header-connect">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-8  col-xs-12">
                    <div className="header-half header-call">
                        <p>
                            <span><i className="pe-7s-call"></i> +1 234 567 7890</span>
                            <span><i className="pe-7s-mail"></i> your@company.com</span>
                        </p>
                    </div>
                </div>
                <div className="col-md-2 col-md-offset-5  col-sm-3 col-sm-offset-1  col-xs-12">
                    <div className="header-half header-social">
                        <ul className="list-inline">
                            <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-vine"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-dribbble"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
);

}
export default Header;