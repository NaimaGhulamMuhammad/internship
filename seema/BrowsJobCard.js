import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card} from 'react-bootstrap';
import JobData from './JobData';
const BrowsJobCard=(props)=>{
    return(<>
       <Container>
        <Row className="extra-mrg">
					
        <Col md="6" sm="3">
            <div className="grid-view brows-job-list">
                <div className="brows-job-company-img">
                    <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                </div>
                <div className="brows-job-position">
                    <h3><a href="job-detail.html">{props.companyname}</a></h3>
                    <p><span>{props.organization}</span></p>
                </div>
                <div className="job-position">
                    <span className="job-num">5 Position</span>
                </div>
                <div className="brows-job-type">
                    <span className="full-time">{props.jobtype}</span>
                </div>
                <ul className="grid-view-caption">
                    <li>
                        <div className="brows-job-location">
                            <p><i className="fa fa-map-marker"></i>{props.location}</p>
                        </div>
                    </li>
                    <li>
                        <p><span className="brows-job-sallery"><i className="fa fa-money"></i>{props.salary}</span></p>
                    </li>
                </ul>
                <span className="tg-themetag tg-featuretag">Premium</span>
            </div>
        </Col>
        </Row>
        </Container>
        </>
        )
}
export default BrowsJobCard;