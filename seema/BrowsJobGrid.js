import React from 'react'
import BrowsJobCard from './BrowsJobCard';
import JobData from './JobData'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card} from 'react-bootstrap';
function nCards(val){
    return(
        <>
        
               <BrowsJobCard
               location={val.location}
        companyname={val.companyname}
        jobtype={val.jobtype}
        organization={val.organization}
        salary={val.salary}
       
               />
                

        </>
    );
}
const BrowsJobGrid=(props)=>{
   
    return(<>
        <div className="clearfix"></div>
			
			<section className="inner-header-title" style={{backgroundImage:'url(../img/banner-10.jpg)'}}>
				<Container>
					<h1>Browse Jobs</h1>
				</Container>
			</section>
			<div className="clearfix"></div>
        <section className="brows-job-category">
        <Container>
            
               
                <Row className="extra-mrg wrap-search-filter">
                        <Col md="4" sm="4">
                            <input type="text" className="form-control" placeholder="Keyword: Name, Tag">
                            </input>
                        </Col>
                        <Col md="3" sm="3">
                            <input type="text" className="form-control" placeholder="Location: City, State, Zip"></input>
                        </Col>
                        
                        <Col md="2" sm="2">
                            <button type="submit" className="btn btn-success full-width">Filter</button>
                        </Col>
                   
                        </Row>
           
            
{JobData.filter(JobData=> JobData.num==1).map(nCards) }
<div className="row">
						<ul className="pagination">
							<li><a >&laquo;</a></li>
							<li className="active"><a >1</a></li>
							<li><a >2</a></li>
							<li><a >3</a></li> 
							<li><a >4</a></li> 
							<li><a ><i className="fa fa-ellipsis-h"></i></a></li> 
							<li><a >&raquo;</a></li> 
						</ul>
					</div>
					
				</Container>
			</section>
        


        </>
        );
}
export default  BrowsJobGrid;