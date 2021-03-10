import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 import {Col, Row,Card} from "react-bootstrap";
 import LocationIcon from "@material-ui/icons/Place";

 import Ima from './img/payed.jpg';
 import image from './img/Autodesk.png'


 function Browsecompany() {

    return(
        <div>
                 
        <div className="class-loader">  
        <h2 id="txtoverimg" style={{fontSize:"700%"}} >BROWSE COMPANY</h2>  
        <div id="center2" >   
       
             <img style={{opacity:"60%" ,textDecoration:'bold'}} border="5%" id="center" src={Ima}/>
               <h2 id="txtoverimg" style={{fontSize:"700%"}} >BROWSE COMPANY</h2>
          </div>
        </div>
    
      <br/><br/>
       
        <Row>           
  <Col>
     <input id="keywords"style={{marginLeft:"15%"}} Placeholder="Keywords:Name,tag"type="text" name="" className="form-control" required />
      </Col>    
    <Col><input id="location"style={{marginLeft:"15%"}} Placeholder="Location:City,State,Zip"type="text" name="" className="form-control" required /> </Col>
   
    <Col> <br/><a href="#" id="filterbtn" >FILTER </a></Col>
         </Row>
         <br/><br/>
         <Card id="cardcomp" bg="ivory" text="white" style={{ marginLeft:"5%" ,width: '90%' }}>

    <Card.Body>


      <Row>
      <img id="complogo"src={image} href="#a"/>
   
      <Col>
      <h3 id="compname">  Autodesk </h3>
      <span id="comptype">software company</span>  
      </Col>
      <Col id="maploc"><LocationIcon ></LocationIcon> Street #200, London</Col>

      <Col id="opening">10 Opening</Col>
      </Row>
    </Card.Body>
  </Card> 
  <br/>

  <Card id="cardcomp" bg="ivory" text="white" style={{ marginLeft:"5%" ,width: '90%' }}>

<Card.Body>


  <Row>
  <img id="complogo"src={image} href="#a"/>

  <Col>
  <h3 id="compname">  Autodesk </h3>
  <span id="comptype">software company</span>  
  </Col>
  <Col id="maploc"><LocationIcon ></LocationIcon> Street #200, London</Col>

  <Col id="opening">10 Opening</Col>
  </Row>
</Card.Body>
</Card> 

<div className="pagination" style={{marginLeft:"5cm"}}>
              <a href="#">❮</a>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
              <a href="#">7</a>
              <a href="#">8</a>
              <a href="#">9</a>
              <a href="#">10</a>
              <a href="#">11</a>  
              <a href="#">12</a>
              <a href="#">13</a>
              <a href="#">14</a>
              <a href="#">15</a>
               <a href="#">❯</a>
               </div>



         </div>
  

    );
     
 }

 export default Browsecompany;