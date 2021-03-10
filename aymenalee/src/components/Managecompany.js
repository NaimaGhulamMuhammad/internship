import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 import {Col, Row,Card,Form,DropdownButton,Dropdown,InputGroup} from "react-bootstrap";
 import LocationIcon from "@material-ui/icons/Place";
 import DeleteIcon from "@material-ui/icons/Delete";
 import UpdateIcon from "@material-ui/icons/Update";
 import Ima from './img/payed.jpg';
 import image from './img/Autodesk.png'
 import createPagination from "./createPagination.js";
import { Button } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';
import Tooltip from '@material-ui/core/Tooltip';

 function Browsecompany() {
     
    const [currentPage, setCurrentPage] = React.useState(1);

    const { pagination } = createPagination ({
      numberOfArticles: 223,
      articlesPerPage: 12,
      numberOfButtons: 12,
      currentPage
    });
  
    const handleClick = page => setCurrentPage(page);
    return(
        <div id="colorrow">
        <div>
                 
        <div className="class-loader">  
        <h2 id="txtoverimg" style={{fontSize:"700%"}} >BROWSE COMPANY</h2>  
        <div id="center2" >   
       
             <img style={{opacity:"70%" ,textDecoration:'bold',strokeOpacity:"grey"}} border="5%" id="center" src={Ima}/>
               <h2 id="txtoverimg" style={{fontSize:"700%"}} >MANAGE COMPANY</h2>
          </div>
        </div>
    
      <br/><br/>
       
       <Card id="topcard" bg="ivory" text="white" style={{ marginLeft:"5%" ,width: '90%'}}>
       
     <Card.Body>
        <Row>           
  <Col>
     <input id="Search"style={{marginLeft:"10%"}} Placeholder="  Search here......"type="text" name="" className="form-control" required />
   
      </Col>    
    <Col><Button style={{marginBottom:"10px"}} href="#" id="gobtn" >GO </Button> </Col>
   
    
        <label id="sortby">Sort By</label>
     
     <Col>
     <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Dropdown"
              id="dropdownbtn"
              
              
            >
              <Dropdown.Item id="dropdownlist"  href="#">Sort By data</Dropdown.Item>
              <Dropdown.Item id="dropdownlist" href="#">Sort By view</Dropdown.Item>
              <Dropdown.Item id="dropdownlist" href="#">Sort By popular</Dropdown.Item>
            </DropdownButton>
     </Col>
         </Row>
         </Card.Body>
         </Card>

         <br/><br/>


     <Card id="cardcomp" bg="ivory" text="white" style={{ marginLeft:"5%" ,width: '90%' }}>

    <Card.Body>


      <Row>
      <img id="complogo"src={image} href="#a"/>
   
      <Col>
      <h3 id="compname">  Autodesk </h3>
      <span id="comptype">10 hours Ago</span>  
      </Col>
      <Col id="maploc"><LocationIcon ></LocationIcon> Street #200, London</Col>

     
      <Col >
      <Tooltip title="Update">
    <UpdateIcon data-tip="Update" id="update" >Update</UpdateIcon>
    </Tooltip>
    <Tooltip title="Delete">
    <DeleteIcon  data-tip="Delete" id="delete">Delete</DeleteIcon>
    </Tooltip>
        </Col>
     
    
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
  <span id="comptype">10 Hours Ago</span>  
  </Col>
  <Col id="maploc"><LocationIcon ></LocationIcon> Street #200, London</Col>


  <Col >
      <Tooltip title="Update">
    <UpdateIcon data-tip="Update" id="update" >Update</UpdateIcon>
    </Tooltip>
    <Tooltip title="Delete">
    <DeleteIcon  data-tip="Delete" id="delete">Delete</DeleteIcon>
    </Tooltip>
        </Col>
  </Row>
</Card.Body>
</Card> 
<Row>
<div className="pagination">
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

        </Row>



         </div>
         </div>
  

    );
     
 }

 export default Browsecompany;