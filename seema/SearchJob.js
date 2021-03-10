import React from 'react'
import JobCards from './JobCards';
import JobData from './JobData'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col} from 'react-bootstrap';
function nCards(val){
    return(
        <>
        
               <JobCards
               location={val.location}
        companyname={val.companyname}
        jobtype={val.jobtype}
        organization={val.organization}
        salary={val.salary}
        img={val.img}
               />
                

        </>
    );
}
const SearchJob=(props)=>{
   
    return(<>
        <div className="clearfix"></div>
			
      
        <section className="inner-header-title" style={{backgroundImage:'url(../img/banner-10.jpg);'}}>
            <Container>
                <h1>Browse Jobs</h1>
            </Container>
        </section>
        <div className="clearfix"></div>
        <section className="brows-job-category">
            <Container>
                
                    <div className="wrap-search-filter">
                    <Row className="extra-mrg">
                            <Col   sm="6">
                               <input type="text" className="form-control" placeholder="Location: City, State, Zip">
                               </input>
                            </Col>
                        
                            
                            <Col sm="6">
                                <div className="job-types">
                                    <label>
                                        <input type="checkbox" className="full-time check-option checkbox" CHECKED ></input>
                                        Full Time
                                    </label>
                                    
                                    <label>
                                        <input type="checkbox" className="part-time check-option checkbox" ></input>
                                        Part Time
                                    </label>
                                    
                                    <label>
                                        <input type="checkbox" className="freelancer check-option checkbox" ></input>
                                        Freelancer
                                    </label>
                                    
                                    <label>
                                        <input type="checkbox" className="internship check-option checkbox"></input>
                                        Internship
                                    </label>
                                    
                                </div>
                            </Col>
                            
                            </Row>
                    </div>
                
                
        

{JobData.filter(JobData=> JobData.num==1).map(nCards) }
<Row>
                    <ul className="pagination">
                        <li><a>&laquo;</a></li>
                        <li className="active"><a>1</a></li>
                        <li><a>2</a></li>
                        <li><a>3</a></li> 
                        <li><a>4</a></li> 
                        <li><a><i className="fa fa-ellipsis-h"></i></a></li> 
                        <li><a>&raquo;</a></li> 
                    </ul>
                </Row>
                
            </Container>
        </section>
        


        </>
        );
}
export default SearchJob;