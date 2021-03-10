import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card} from 'react-bootstrap';
const NewSearchJob=(props)=>{
    return(
        <>
        
        <div class="clearfix"></div>

			<section class="inner-header-title no-br advance-header-title" >
            <Container>
                <h2><span>Work There.</span> Find the dream job</h2>
                <p><span>704</span> new job in the last <span>7</span> days.</p>
            </Container>
        </section>
        <div class="clearfix"></div>
        <section class="bottom-search-form">
            <Container>
            
                <form class="bt-form">
                <Row>
                <Col  sm="3">
                        <input type="text" class="form-control" placeholder="Skills, Designations, Keyword">
                    </input>
                        </Col>
                        <Col  sm="3">
                        <input type="text" class="form-control" placeholder="Searc By location">
                        </input>
                    </Col>
                    <Col  sm="3">
                        <select class="form-control">
                          <option>By Category</option>
                          <option>Information Technology</option>
                          <option>Mechanical</option>
                          <option>Hardware</option>
                        </select>
                    </Col>
                    <Col  sm="3">
                        <button type="submit" class="btn btn-primary">Search Job</button>
                    </Col>
                    </Row>
                </form>
                
            </Container>
        </section>
        <section class="brows-job-category gray-bg">
            <Container>
            <Row>
                <Col sm="12" md="9">
                    <div class="full-card">
                    
                        <div class="card-header">
                            <Row class=" mrg-0">
                            
                                <Col sm="4" md="4">
                                    <ol class="breadcrumb pull-right">
                                        <li><a href="#"><i class="fa fa-home"></i></a></li>
                                        <li><a href="#">Full Time</a></li>
                                        <li class="active">IT Jobs</li>
                                    </ol>
                                </Col>
                            </Row>
                        </div>
                        
                        <div class="card-body">
                        
                            <article class="advance-search-job">
                                <div class="row no-mrg">
                                    <div class="col-md-6 col-sm-6">
                                        <a href="new-job-detail.html" title="job Detail">
                                            <div class="advance-search-img-box">
                                                <img src="/img/com-2.jpg" class="img-responsive" alt=""/>
                                            </div>
                                        </a>
                                        <div class="advance-search-caption">
                                            <a href="new-job-detail.html" title="Job Dtail"><h4>Product Designer</h4></a>
                                            <span>Google Ltd</span>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                        <div class="advance-search-job-locat">
                                            <p><i class="fa fa-map-marker"></i>QBL Park, C40</p>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-2">
                                        <a href="javascript:void(0)"  data-toggle="modal" data-target="#apply-job" class="btn advance-search" title="apply">Apply</a>
                                    </div>
                                </div>
                                <span class="tg-themetag tg-featuretag">Premium</span>
                            </article>
                            
                         
                            
                        </div>
                    </div>
                    
                    <div class="row">
                        <ul class="pagination">
                            <li><a href="#">&laquo;</a></li>
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li> 
                            <li><a href="#">4</a></li> 
                            <li><a href="#"><i class="fa fa-ellipsis-h"></i></a></li> 
                            <li><a href="#">&raquo;</a></li> 
                        </ul>
                    </div>
                    
                    <div class="row">
                        <div class="ad-banner">
                            <img src="http://via.placeholder.com/728x90" class="img-responsive" alt=""/>
                        </div>
                    </div>
                </Col>
                
                <div class="col-md-3 col-sm-12">
                    <div class="sidebar right-sidebar">
                    
                        <div class="side-widget">
                            <h2 class="side-widget-title">Job Alert</h2>
                            <div class="job-alert">
                                <div class="widget-text">
                                    <form>
                                        <input type="text" name="keyword" class="form-control" placeholder="Job Keyword"></input>
                                        <input type="email" name="email" class="form-control" placeholder="Email ID"></input>
                                        <button type="submit" class="btn btn-alrt">Add Alert</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div class="side-widget">
                            <h2 class="side-widget-title">Advertisment</h2>
                            <div class="widget-text padd-0">
                                <div class="ad-banner">
                                    <img src="http://via.placeholder.com/320x285" class="img-responsive" alt=""/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="side-widget">
                            <h2 class="side-widget-title">Compensation</h2>
                            <div class="widget-text padd-0">
                                <ul>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="1"></input>
                                            <label for="1"></label>
                                        </span>
                                        Under $10,000
                                        <span class="pull-right">102</span>
                                    </li>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="2"></input>
                                            <label for="2"></label>
                                        </span>
                                        $10,000 - $15,000
                                        <span class="pull-right">78</span>
                                    </li>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="3"></input>
                                            <label for="3"></label>
                                        </span>
                                        $15,000 - $20,000
                                        <span class="pull-right">12</span>
                                    </li>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="4"></input>
                                            <label for="4"></label>
                                        </span>
                                        $20,000 - $30,000
                                        <span class="pull-right">85</span>
                                    </li>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="5"></input>
                                            <label for="5"></label>
                                        </span>
                                        $30,000 - $40,000
                                        <span class="pull-right">307</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="side-widget">
                            <h2 class="side-widget-title"><a href="#designation" data-toggle="collapse">Designation<i class="pull-right fa fa-angle-double-down" aria-hidden="true"></i></a></h2>
                            <div class="widget-text padd-0 collapse" id="designation">
                                <ul>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="1"></input>
                                            <label for="1"></label>
                                        </span>
                                        Web Designer
                                        <span class="pull-right">102</span>
                                    </li>
                                    
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="2"></input>
                                            <label for="2"></label>
                                        </span>
                                        Php Developer
                                        <span class="pull-right">78</span>
                                    </li>
                                    
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="3"></input>
                                            <label for="3"></label>
                                        </span>
                                        Project Manager
                                        <span class="pull-right">12</span>
                                    </li>
                                    
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="4"></input>
                                            <label for="4"></label>
                                        </span>
                                        Human Resource
                                        <span class="pull-right">85</span>
                                    </li>
                                    
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="5"></input>
                                            <label for="5"></label>
                                        </span>
                                        CMS Developer
                                        <span class="pull-right">307</span>
                                    </li>
                                    
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="6"></input>
                                            <label for="6"></label>
                                        </span>
                                        App Developer
                                        <span class="pull-right">256</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="side-widget">
                            <h2 class="side-widget-title"><a href="#job-location" data-toggle="collapse">Location<i class="pull-right fa fa-angle-double-down" aria-hidden="true"></i></a></h2>
                            <div class="widget-text padd-0 collapse" id="job-location">
                                <ul>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="1"></input>
                                            <label for="1"></label>
                                        </span>
                                        Mohali
                                        <span class="pull-right">102</span>
                                    </li>
                                    
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="2"></input>
                                            <label for="2"></label>
                                        </span>
                                        Chandigarh
                                        <span class="pull-right">78</span>
                                    </li>
                                    
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="3"></input>
                                            <label for="3"></label>
                                        </span>
                                        Chennai
                                        <span class="pull-right">12</span>
                                    </li>
                                    
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="4"></input>
                                            <label for="4"></label>
                                        </span>
                                        Delhi
                                        <span class="pull-right">85</span>
                                    </li>
                                    
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="5"></input>
                                            <label for="5"></label>
                                        </span>
                                        Noida
                                        <span class="pull-right">307</span>
                                    </li>
                                    
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="6"></input>
                                            <label for="6"></label>
                                        </span>
                                        Chhatisgarh
                                        <span class="pull-right">256</span>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        
                        <div class="side-widget">
                            <h2 class="side-widget-title"><a href="#job-type" data-toggle="collapse">Job type<i class="pull-right fa fa-angle-double-down" aria-hidden="true"></i></a></h2>
                            <div class="widget-text padd-0 collapse" id="job-type">
                                <ul>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="1"></input>
                                            <label for="1"></label>
                                        </span>
                                        Full Time
                                        <span class="pull-right">102</span>
                                    </li>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="2"></input>
                                            <label for="2"></label>
                                        </span>
                                        Part Time
                                        <span class="pull-right">78</span>
                                    </li>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="3"></input>
                                            <label for="3"></label>
                                        </span>
                                        Internship
                                        <span class="pull-right">12</span>
                                    </li>
                                    <li>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="4"></input>
                                            <label for="4"></label>
                                        </span>
                                        Freelancer
                                        <span class="pull-right">85</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Row>
                </Container>
            </section>
           
        
        </>

    );
    }
export default NewSearchJob;
