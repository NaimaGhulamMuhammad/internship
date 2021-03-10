import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

export default function UserPropertyCard(props) {
    return (
        <Router>
                    <div class="col-md-4 p0">
                        <div class="box-two proerty-item">
                            <div class="item-thumb">
                                <Link to="property-1.html" ><img src={props.image} /></Link>
                            </div>
                            <div class="item-entry overflow">
                                <h5><Link to="property-1.html"> {props.title} </Link></h5>
                                <div class="dot-hr"></div>
                                <span class="pull-left"><b> Area :</b> {props.area}m </span>
                                <span class="proerty-price pull-right"> ${props.price}</span>
                                <p style={{ display: 'none' }}>{props.desc}</p>
                                <div class="property-icon">
                                    <img src={props.icon1} />(5)|
                                                <img src={props.icon2} />(2)|
                                                <img src={props.icon3} />(1)
                                                <div class="dealer-action pull-right">
                                        <Link to="submit-property.html" class="button">Edit </Link>
                                        <Link to="#" class="button delete_user_car">Delete</Link>
                                        <Link to="property-1.html" class="button">View</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <Switch>
                <Route exact path="/">
                </Route>

            </Switch>
        </Router>
    );
}