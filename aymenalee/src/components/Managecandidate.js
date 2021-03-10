import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 import {Card, Button, Dropdown, DropdownButton, InputGroup,Col,Row,Image} from "react-bootstrap";
// // import {FaFacebook,FaInstagram, FaTwitter, FaLinkedinIn,FaGooglePlus,} from "react-icons/fa";
//  import MailIcon from "@material-ui/icons/Mail";
// import PendingIcon from "@material-ui/icons/pending"
//  import { Alert } from "material-ui-bootstrap";
// import { BsThreeDotsVertical } from "react-icons/bs";
import Ima from './img/payed.jpg';
import createPagination from "./createPagination.js";
// import "./style.css";



function Managecandidate() {
    const [currentPage, setCurrentPage] = React.useState(1);

    const { pagination } = createPagination ({
      numberOfArticles: 10,
      articlesPerPage: 12,
      numberOfButtons: 10,
      currentPage
    });
    const handleClick = page => setCurrentPage(page);
  
  return (
      
    <div>
     
     <div className="class-loader">    
        <div id="center2" >   
                           
             <img style={{position:"relative",opacity:"60%" ,textDecoration:'bold'}} border="5%" id="center" alt="100x100" src={Ima}/>
               <h2 id="txtoverimg" style={{fontSize:"700%"}} >MANAGE CANDIDATE</h2>
          </div>
        </div>
    
      <br/><br/>
      {/* Search and dropdown */}         
        <Row>           
  <Col>
     <input style={{marginLeft:"15%"}} Placeholder="search..."type="text" name="" className="form-control" required />
      </Col>    
    <Col><Button style={{marginLeft:"10%", marginTop:"1.5%",backgroundColor:"green" ,borderBlockColor:"green"}} className="dd-list-item">search here</Button> </Col>
    <Col><label  style={{marginLeft:"82%", marginTop:"2.5%"}} >SORT BY</label></Col>
    <Col>
    <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Dropdown"
              className="ManageEmpDropdown"
            >
              <Dropdown.Item href="#">Sort By</Dropdown.Item>
              <Dropdown.Item href="#">Sort By date</Dropdown.Item>
              <Dropdown.Item href="#">Sort By View</Dropdown.Item>
            </DropdownButton>
            </Col>
         </Row> 
  
      {/* -----end of dropdown----- */}

      <div className="wholecontainer">
        <div className="ManageEmployee-round-1">              
        <div id="pointer" className="cndt-status pending">Pending</div>  
             <br/>
             <br/>
          {/* <ReactRoundedImage
          id="images"
          display="flex"
          image={Ima}
          roundedColor="green"
          imageWidth="170"
          imageHeight="170"
          roundedSize="8"
          marginLeft="40%"
         
        /> */}
        <img id="roundimage" src={Ima}/>
         <div className="round-heading">
            <h3> Adam Declizer</h3>
            <p>CEO & Founder</p>
            <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
     
      <a href="#" title="" class="cndt-profile-btn">View Profile</a>
          </div>
          {/* --- icons --- */}
       
        </div>
        <div className="ManageEmployee-round-1">
               
        <div id="pointer" className="cndt-status pending">Pending</div>
           <br/>
  
          {/* <ReactRoundedImage
          id="images"
          image={Ima}
          roundedColor="green"
          imageWidth="170"
          imageHeight="170"
          roundedSize="8"
          imageAkignment="center"
        /> */}

          <img id="roundimage" src={Ima}/>

         <div className="round-heading">
            <h3> Adam Declizer</h3>
            <p>CEO & Founder</p>
            <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
     \
      <a href="#" title="" class="cndt-profile-btn">View Profile</a>
          </div>
         
        </div>
    
        <div className="ManageEmployee-round-1">
              
            <div id="pointer" className="cndt-status pending">Pending</div>
           <br/>
           <br/>
          {/* -- dotted -- */}

        
          {/* <ReactRoundedImage
          id="images"
          image={Ima}
          roundedColor="green"
          imageWidth="170"
          imageHeight="170"
          roundedSize="8"
          imageAkignment="center"
        /> */}
        <img id="roundimage" src={Ima}/>
     
         <div className="round-heading">
            <h3> Adam Declizer</h3>
            <p>CEO & Founder</p>      
             <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
     
      <a href="#" title="" class="cndt-profile-btn">View Profile</a>
      
          </div>
        
        </div>

        {/* ----456 containers ----*/}

        <div className="ManageEmployee-round-4">
               
        <div id="pointer2" className="cndt-status pending">Available</div>
           <br/>

          {/* <ReactRoundedImage          
          image={Ima}
          roundedColor="green"
          imageWidth="170"
          imageHeight="170"
          roundedSize="8"
          Align-Item="center"
      
        /> */}
        <img id="roundimage" src={Ima}/>
        <div className="round-heading">
            <h3> Adam Declizer</h3>
            <p>CEO & Founder</p>
            <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
     
      <a href="#" title="" class="cndt-profile-btn">View Profile</a>
          </div>
          {/* --- icons --- */}
         
        </div>
        <div className="ManageEmployee-round-4">            
        <div id="pointer2" className="cndt-status pending">AVailable</div>
           <br/>         
          {/* <ReactRoundedImage style={{marginLeft:"30%"}}
          id="images"
          image={Ima}
          roundedColor="green"
          imageWidth="170"
          imageHeight="170"
          roundedSize="8"
          
        /> */}
        <img id="roundimage" src={Ima}/>
          <div className="round-heading">
            <h3> Adam Declizer</h3>
            <p>CEO & Founder</p>
            <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <a href="#" title="" class="cndt-profile-btn">View Profile</a>
          </div>
         
        </div>
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
export default Managecandidate;