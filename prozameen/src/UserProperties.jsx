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

import UserPropertyCard from './UserPropertyCard'

import Image1 from './assets/img/demo/property-3.jpg';
import Icon1 from "./assets/img/icon/bed.png";
import Icon2 from './assets/img/icon/shawer.png';
import Icon3 from './assets/img/icon/cars.png';

export default function UserProperties() {
    return (
        <Router>

            
        <div className="page-head"> 
            <div className="container">
                <div className="row">
                    <div className="page-head-content">
                        <h1 className="page-title">List Layout With Sidebar</h1>               
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End page header --> */}

        {/* <!-- property area --> */}
        <div className="content-area recent-property" style={{backgroundColor: '#FFF'}}>
            <div className="container">   
                <div className="row">

                    <div className="col-md-9 pr-30 padding-top-40 properties-page user-properties">

                        <div className="section"> 
                            <div className="page-subheader sorting pl0 pr-10">


                                <ul className="sort-by-list pull-left">
                                    <li className="active">
                                        <Link to="javascript:void(0);" className="order_by_date" data-orderby="property_date" data-order="ASC">
                                            Property Date <i className="fa fa-sort-amount-asc"></i>					
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="javascript:void(0);" className="order_by_price" data-orderby="property_price" data-order="DESC">
                                            Property Price <i className="fa fa-sort-numeric-desc"></i>						
                                        </Link>
                                    </li>
                                </ul>
                                {/* <!--/ .sort-by-list--> */}

                                <div className="items-per-page pull-right">
                                    <label for="items_per_page"><b>Property per page :</b></label>
                                    <div className="sel">
                                        <select id="items_per_page" name="per_page">
                                            <option value="3">3</option>
                                            <option value="6">6</option>
                                            <option value="9">9</option>
                                            <option selected="selected" value="12">12</option>
                                            <option value="15">15</option>
                                            <option value="30">30</option>
                                            <option value="45">45</option>
                                            <option value="60">60</option>
                                        </select>
                                    </div>
                                    {/* <!--/ .sel--> */}
                                </div>
                                {/* <!--/ .items-per-page--> */}
                            </div>

                        </div>
<br />
                        <div className="section"> 
                            <div id="list-type" className="proerty-th-list">
                            <UserPropertyCard title="Super nice villa" area={120} price={300000} desc="Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ..." image={Image1} icon1={Icon1} icon2={Icon2} icon3={Icon3} />
                            <UserPropertyCard title="Super nice villa" area={120} price={300000} desc="Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ..." image={Image1} icon1={Icon1} icon2={Icon2} icon3={Icon3} />
                            <UserPropertyCard title="Super nice villa" area={120} price={300000} desc="Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ..." image={Image1} icon1={Icon1} icon2={Icon2} icon3={Icon3} />
                            <UserPropertyCard title="Super nice villa" area={120} price={300000} desc="Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ..." image={Image1} icon1={Icon1} icon2={Icon2} icon3={Icon3} />
                            <UserPropertyCard title="Super nice villa" area={120} price={300000} desc="Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ..." image={Image1} icon1={Icon1} icon2={Icon2} icon3={Icon3} />
                            <UserPropertyCard title="Super nice villa" area={120} price={300000} desc="Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ..." image={Image1} icon1={Icon1} icon2={Icon2} icon3={Icon3} />
                            <UserPropertyCard title="Super nice villa" area={120} price={300000} desc="Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ..." image={Image1} icon1={Icon1} icon2={Icon2} icon3={Icon3} />
                                
                            </div>
                        </div>

                        <div className="section"> 
                            <div className="pull-right">
                                <div className="pagination">
                                    <ul>
                                        <li><Link to="#">Prev</Link></li>
                                        <li><Link to="#">1</Link></li>
                                        <li><Link to="#">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#">4</Link></li>
                                        <li><Link to="#">Next</Link></li>
                                    </ul>
                                </div>
                            </div>                
                        </div>

                    </div>       

                    <div className="col-md-3 p0 padding-top-40">
                        <div className="blog-asside-right">
                            <div className="panel panel-default sidebar-menu wow fadeInRight animated" >
                                <div className="panel-heading">
                                    <h3 className="panel-title">Hello Kimaro</h3>
                                </div>
                                <div className="panel-body search-widget">

                                </div>
                            </div>

                            <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Recommended</h3>
                                </div>
                                <div className="panel-body recent-property-widget">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





            
        </Router>
    );
}