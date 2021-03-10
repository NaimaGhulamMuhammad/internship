import React from 'react';
import JobData from './JobData';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col} from 'react-bootstrap';
const JobCards=(props)=>{
    return(
        <>
        <div className="item-click">
        <article>
        <Container>
        
            <Row className="brows-job-list">
                <Col md="1" sm="2" className="small-padding">
                    <div className="brows-job-company-img">
                        <a href="job-detail.html"><img src={props.img}/></a>
                    </div>
                </Col>
                <Col md="6" sm="5">
                    <div className="brows-job-position">
                        <a href="job-detail.html"><h3>{props.companyname}</h3></a>
                        <p>
                            <span>Autodesk</span><span className="brows-job-sallery"><i className="fa fa-money"></i>{props.salary}</span>
                            <span className="job-type cl-success bg-trans-success">{props.jobtype}</span>
                        </p>
                    </div>
                </Col>
                <Col md="3" sm="3">
                    <div className="brows-job-location">
                        <p><i className="fa fa-map-marker"></i>{props.location}</p>
                    </div>
                </Col>
                <Col md="2" sm="2">
                    <div className="brows-job-link">
                        <a href="job-detail.html" className="btn btn-default">Apply Now</a>
                    </div>
                </Col>
                </Row>
            <span className="tg-themetag tg-featuretag">Premium</span>
          
        
        </Container>
        </article>
    </div>

   
        </>
    )
}
export default JobCards;