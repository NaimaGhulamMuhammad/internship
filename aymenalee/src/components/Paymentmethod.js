import React, { Component} from 'react';
 import Ima from './img/payed.jpg';
 import IMA from './img/pay.PNG'
//  import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


class  Paymentmethod extends Component{



  render(){

   return(
        <div> 
        <div className="class-loader">    
        <div id="center2" >   
                           
             <img style={{position:"relative",opacity:"60%" ,color:'grey',textDecoration:'bold'}} border="5%" id="center" alt="100x100" src={Ima}/>
               <h2 id="txtoverimg" style={{fontSize:"700%"}} >PAYMENET METHOD</h2>
          </div>
        </div>
     
          <Container fluid>
            <Row md={5}>
            </Row>
            <br />
            <Row>
               
              <Col sm={6}  md={5}  style={{marginLeft:"10%" , backgroundColor:"ivory"}}>
              <br/><br/>
                <Card style={{marginLeft:'5%' , backgroundColor:"ivory"}}>
                
                  <Card.Body>
                    
                    <Card.Text>
                       
                <Card.Title>Billing Information</Card.Title>
              
                <hr/>
                <label>Name</label>
                  
                 <input  type="text" name="fullname" className="form-control" placeholder="Fullname" required />
                 
                  <label>Address</label>
                  
                 <input type="text" name="address" className="form-control" placeholder="Username" required />
                
                 <label>City</label>
                 
                 <input type="text" name="city" className="form-control" placeholder="Email address" required />
                  
        
                 {/* all one line input and label work start */}
                <label>state</label> <label style={{marginLeft:"62%"}}>zip</label> 
                

                   <Row>
        
                  <Col>  
                    
                   <Form.Control  as="select" required> 
                   
                  <option>-- Select State --</option>
                                <option>Sindh</option>
                                <option>Punjab</option>
                                <option>Balochistan</option>
                                <option>Khyber Pakhtoon Khwa</option>
                         
                                  
                 </Form.Control> 
               
                 </Col> 
                   
                 <span> <input type="text" name="zipcode" className="form-control" placeholder="zip" required />
                  </span>
                 </Row>                 
                   <Row>
                   <Col>        
                   </Col>
                   </Row>			
                     </Card.Text>       
                  </Card.Body>
                </Card>
              </Col>
              
              <Col sm={6} md={5} style={{marginRight:"5%",backgroundColor:"ivory"}}>

              <br/><br/>
                <Card style={{height:"90%"}}>
                
                  <Card.Body>
                     
                    <Card.Text>
                      
                    <Card.Title>Credit card Information</Card.Title>
       
                <hr/>
                 <label>Name of Card</label>
                 
                 <input type="cardname" id="inputEmail" className="form-control" placeholder="Email address" required />
                 
              

                <Row>
                
               <Col>
               <label>Card Number</label>
                 
                 <input type="cardnumber" id="inputcardnumber" className="form-control" required />
                   
        
            </Col>     
              <span> 
                  <img style={{height:"65%",width:"65%"}}  alt="" src={IMA}/>
               </span>
              </Row> 

              
                <Row>  
                 
               <Col> 
               <label>Expiration Date</label> 
                <br/>            
               <Form.Control as="select" required>
                             <option>jan</option>
                             <option>feb</option>
                             <option>march</option>                  
                 </Form.Control>  
          
              </Col> 
              <Col>
              <label>  
                <label></label>
                </label> 
              <br/>
              <Form.Control as="select" required>
            
                             <option>2022</option>
                             <option>2023</option>
                             <option>2024</option> 
                  </Form.Control>      
              </Col>
              <Col>            
              <label>CVC/CVV</label>
              <br/>
              <input type="text" name="" className="form-control" required />  
              </Col>  
              </Row> 


              
                 <label>Coupon Code(If Available)</label>
              <input type="text" name="" className="form-control" required />     
                 <Row>

								</Row>
                    </Card.Text>         
                  </Card.Body>
                </Card>  
                
              </Col>    
            </Row>
                
          </Container>
          <br/>
          <div style={{textAlign:'center'}}>
                
                <a  href="ab" id="proceedbtn" className="btn btn-success ml-1">Proceed</a>
                 <a href="ab" id="cancelbtn" className="btn btn-default ml-1">Cancel</a>

                 </div>
            </div>
      );
  }
}
export default Paymentmethod;
