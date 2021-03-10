import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Ima from './img/payed.jpg';
import EditIcon from "@material-ui/icons/EditRounded";
import  Facebook from "@material-ui/icons/Facebook"
import Instagram from "@material-ui/icons/Instagram"
import Twitter  from "@material-ui/icons/Twitter"
import Linkedin from "@material-ui/icons/LinkedIn"
import CallIcon from "@material-ui/icons/Call"
import MailIcon from "@material-ui/icons/Mail"
import PlaceIcon from "@material-ui/icons/Place"
import PublicIcon from "@material-ui/icons/Public"
import GroupIcon from "@material-ui/icons/Group"


import {Card,Col,Row} from "react-bootstrap";
import { Divider } from "@material-ui/core";


function Companydetails()
{
    return(
      
         <div>
        <div className="class-loader">    
           <div id="center2" style={{backgroundColor:"ivory"}} >   
                              
                <img style={{position:"relative",opacity:"60%" ,textDecoration:'bold'}} border="5%" id="backpic" alt="100x100" src={Ima}/>
                  <h2 id="textoverimg" style={{fontSize:"700%"}} >COMPANY DETAILS</h2>
             </div>
           </div>

           
     <Card id="cardcompdetails" bg="ivory" text="white" style={{marginRight:"8%" ,marginLeft:"8%" ,width: '84%' }}>
     <div id="activetime" className="cndt-status pending">10 min Days Ago</div>
     <img id="roundimagecomp" src={Ima} style={{marginLeft:"43%",marginTop:"-10%"}}/>
               <a href="#" id="edit"> <EditIcon id="editicon"></EditIcon></a> 

    <Row>
    <Col>
    <Card.Title as="h1" style={{color:"grey",marginTop:"10%", marginLeft:"6%"}}>Microfoft</Card.Title>
    <Card.Subtitle as="h4" style={{color:"grey",marginTop:"2%", marginLeft:"6%"}}>software company</Card.Subtitle>
    <Card.Text> 
        <p>
<p style={{color:"grey",marginLeft:"6%",marginRight:"10%",fontSize:"20pt"}}>
 Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
  Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation.
  </p>
        </p>
    </Card.Text>
    </Col>
    <Col>
      <Card.Body>
      <Card.Title as="h1" style={{color:"grey",marginTop:"10%"}}>Get in Touch</Card.Title>
      <Card.Text as="h6" style={{color:"grey",marginTop:"4%"}} >
       <CallIcon style={{color:"grey",marginTop:"5%"}}></CallIcon><h6 style={{color:"grey", marginLeft:"10%",marginTop:"-3%"}}>8778799999</h6>
   
       <PublicIcon style={{color:"grey",marginTop:"5%"}}></PublicIcon><h6 style={{color:"grey",marginLeft:"10%",marginTop:"-3%"}}>ww.microsoft.com</h6>
    
       <MailIcon style={{color:"grey",marginTop:"5%"}}></MailIcon><h6 style={{color:"grey",marginLeft:"10%",marginTop:"-3%"}}>microfoct.co@microsoft.com</h6>
   
       <GroupIcon style={{color:"grey",marginTop:"5%"}}></GroupIcon><h6 style={{color:"grey",marginLeft:"10%",marginTop:"-3%"}}>1000-1200</h6>

       <PlaceIcon style={{color:"grey",marginTop:"5%"}}></PlaceIcon><h6 style={{color:"grey",marginLeft:"10%",marginTop:"-3%"}}>street #200 ,NY</h6>
      </Card.Text>
      </Card.Body>
    </Col>
  </Row>
  <Divider/>
                
            <div className="icons" style={{marginTop:"5%"}}>
            <Row>
             <Col>  <Facebook   id="social" href="#" style={{marginTop:"0%"}}></Facebook> </Col>
             <Col>  <Instagram  id="social" style={{marginTop:"0%"}}></Instagram> </Col>
             <Col>  <Twitter  id="social" style={{marginTop:"0%"}}></Twitter>  </Col>
              <Col><Linkedin  id="social" style={{marginTop:"0%"}}></Linkedin> </Col>
              <Col> <a href="#" id="filterbtn"style={{marginTop:"0%"}} >Favourites </a></Col>
              <Col><a href="#" id="savebtn" style={{marginTop:"0%"}}>Save</a></Col>
              </Row>
           </div>  
           
        </Card> 

        
        <br/>
        <br/>
 <Card id="headings" bg="ivory" text="white" style={{ marginLeft:"5%" ,width: '90%' }}>
 
<Card.Body>
<Row>

 <Col>
  <h3 style={{color:"black" }}>  About Company</h3> 


 </Col>

</Row>
</Card.Body>
</Card> 

<p style={{color:"grey",marginLeft:"10%",marginRight:"10%",fontSize:"20pt"}}>
Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut
 Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation
  Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
  </p>
  <p style={{color:"grey",marginLeft:"10%",marginRight:"10%",fontSize:"20pt"}}>
 Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
  Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation.
  </p>
 <br/>
  <Card id="headings" text="white" style={{ marginLeft:"5%" ,width: '90%'}}>
 
 <Card.Body>
 <Row>
 
  <Col>
  <h3 style={{color:"black" }}> Company REquirements</h3> 
  </Col>
 </Row>
 </Card.Body>
 </Card> 
 <p style={{color:"grey",marginLeft:"10%",marginRight:"10%",fontSize:"20pt"}}>
 Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
  </p>
 
        <li id="list" style={{marginLeft:"12%",marginRight:"10%",fontSize:"20pt"}}> Lorem Ipsum Dolor Sit Amet,
         Consectetur Adipiscing Elit.Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. </li> 

        <li id="list" style={{marginLeft:"12%",marginRight:"10%",fontSize:"20pt"}}> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</li> 
      
        <li id="list" style={{marginLeft:"12%",marginRight:"10%",fontSize:"20pt"}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</li>


        <Card id="headings" text="white" style={{ marginLeft:"5%" ,width: '90%'}}>
 
 <Card.Body>
 <Row>
 
  <Col>
  <h3 style={{color:"black" }}> Company Policy</h3> 
  </Col>
 </Row>
 </Card.Body>
 </Card> 
 <p style={{color:"grey",marginLeft:"10%",marginRight:"10%",fontSize:"20pt"}}>
 Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
  </p>
 
        <li id="list" style={{marginLeft:"12%",marginRight:"10%",fontSize:"20pt"}}> Lorem Ipsum Dolor Sit Amet,
         Consectetur Adipiscing Elit.Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. </li> 

        <li id="list" style={{marginLeft:"12%",marginRight:"10%",fontSize:"20pt"}}> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</li> 
      
        <li id="list" style={{marginLeft:"12%",marginRight:"10%",fontSize:"20pt"}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</li>



 


</div>


    );

}
export default Companydetails;