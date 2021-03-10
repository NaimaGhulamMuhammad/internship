import React from 'react'
import {Link } from 'react-router-dom'

import FacebookIcon from '@material-ui/icons/Facebook'; 
import TwitterIcon from '@material-ui/icons/Twitter';  
import LinkedInIcon from '@material-ui/icons/LinkedIn';  
import MailIcon from '@material-ui/icons/Mail';  
import InstagramIcon from '@material-ui/icons/Instagram'; 
//import MarkerIcon from '@material-ui/icons/Marker'; 
//import EnvelopeIcon from '@material-ui/icons/Envelope'; 
import MoneyIcon from '@material-ui/icons/Money'; 
//import GlobeIcon from '@material-ui/icons/Globe'; 
import PhoneIcon from '@material-ui/icons/Phone'; 
import './style.css'
import 'react-bootstrap'
const google = "../img/com-2.jpg";
const JobDetails=()=>{
    return(
		<>
	
						
        <div className="Loader"></div>
		<div className="wrapper">  
			
		<div className="clearfix"></div>
			
		
			<section className="inner-header-title" style={{backgroundImage:"url(.../img/banner-10.jpg)"}}>
				<div className="container">
					<h1>Job Detail</h1>
				
				</div>
			</section>
			<div className="clearfix"></div>
			<section className="detail-desc">
				<div className="container white-shadow">
				
					<div className="row">
					
						<div className="detail-pic">
							<img src={google} className="img" alt="" />
							<a to="#" className="detail-edit" title="edit" ><i className="fa fa-pencil"></i></a>
						</div>
						
						<div className="detail-status">
							<span>2 Days Ago</span>
						</div>
						
					</div>
					
					<div className="row bottom-mrg">
						<div className="col-md-8 col-sm-8">
							<div className="detail-desc-caption">
								<h4>Google </h4>
								<span className="designation">Software Development Company</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<ul>
									<li><i className="fa fa-briefcase"></i><span>Full time</span></li>
									<li><i className="fa fa-flask"></i><span>3 Year Experience</span></li>
								</ul>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-4">
							<div className="get-touch">
								<h4>Get in Touch</h4>
								<ul>
									<li><span>Menlo Park, CA</span></li>
									<li><span>danieldax704@gmail.com</span></li>
									<li><span>microft.com</span></li>
									<li><PhoneIcon/> <span>0 123 456 7859</span></li>
									<li><MoneyIcon/><span>$1000 -$1200/Month</span></li>
								</ul>
							</div>
						</div>
						
					</div>
					
					<div className="row no-padd">
						<div className="detail pannel-footer">
							<div className="col-md-5 col-sm-5">
								<ul className="detail-footer-social">
								
								<li><a href="#" className='fa fa-facebook'><FacebookIcon/></a></li>
								
								<li><a href="#"><MailIcon/></a></li>
									<li><a href="#"><TwitterIcon/></a></li>
									<li><a href="#"><LinkedInIcon/></a></li>
									
									<li><a href="#"><InstagramIcon/></a></li>
								</ul>
							</div>
							
							<div className="col-md-7 col-sm-7">
								<div className="detail-pannel-footer-btn pull-right">
									<a href="#" className="footer-btn grn-btn" title="">Quick Apply</a>
									<a href="#" className="footer-btn blu-btn" title="">Save Draft</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="full-detail-description full-detail">
				<div className="container">
					<div className="row row-bottom">
						<h2 className="detail-title">Job Responsibilities</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
					
					<div className="row row-bottom">
						<h2 className="detail-title">Skill Requirement</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<ul className="detail-list">
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
						</ul>
					</div>
					
					<div className="row row-bottom">
						<h2 className="detail-title">Qualification</h2>

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<ul className="detail-list">
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
					
				</div>
			</section>
			
</div>
        </>
    )
}
export default JobDetails;