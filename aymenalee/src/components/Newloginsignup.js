import React, { Component} from 'react';
 import Ima from './img/register.jpg';
//  import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


class  Newloginsignup extends Component{



  render(){

   return(
        <div> 
        <div className="class-loader">    
        <div id="center2" >   
                           
             <img style={{position:"relative",opacity:"60%" ,color:'grey',textDecoration:'bold'}} border="5%" id="center" alt="100x100" src={Ima}/>
               <h2 id="txtoverimg" style={{fontSize:"700%"}} >REGISTER HERE</h2>
          </div>
        </div>
     
          <Container fluid>
            <Row md={4}>
            </Row>
            <br />
            <Row>
          
              <Col sm={20}  md={5}  style={{marginLeft:"10%" , backgroundColor:"ivory"}}>
             
                <Card style={{marginLeft:'5%' , backgroundColor:"ivory"}}>
                
                  <Card.Body>
                    
                    <Card.Text>
                       
                <Card.Title>Create Account</Card.Title>
              
                <hr/>
                <label>Full name</label>
                  
                 <input  type="text" name="fullname" className="form-control" placeholder="Fullname" required />
                 
                  <label>Username</label>
                  
                 <input type="text" name="username" className="form-control" placeholder="Username" required />
                
                 <label>Email</label>
                 
                 <input type="email" name="email" className="form-control" placeholder="Email address" required />
                  
                 <label>Password</label>
                  
                  <input type="password" name="password" className="form-control" placeholder="Password" required />
                  
                  <label>Confirm Password</label>
                  
                  <input type="password" name="password2" className="form-control" placeholder="Confirm Password" required />
                  
                   <checkbox type="fill" id="tobefilled" class Name="form-control" required/>
                   <Row>
                   <Col>
                     <span class="custom-checkbox">
                       <input type="checkbox" id="1"></input>
                       <label for="1"></label>
                     </span> I give my consent to Job Stock to collect my data with GDPR regulation
                   </Col>
                   </Row>
										<a href="ab" className="btn btn-success center">SignUp</a>
										<a href="ab" style={{outlineWidth:'5%'}} className="btn btn-default ml-1 center">Cancel</a>
                     </Card.Text> 
                   
                  </Card.Body>
                </Card>
              </Col>
            
              <Col sm={2} md={5} style={{marginRight:"5%",backgroundColor:"ivory"}}>

                   
                <Card style={{height:"100%"}}>
                  {/* <Card.Img id="card" variant="top" src={image} style= { {width: '50rem' ,height:"50%"}} /> */}
                  <Card.Body>
                     
                    <Card.Text>
                      
                    <Card.Title>Login Here</Card.Title>
                 {/* <h3 id="weltxt" className="container">Login Here</h3> */}
                <hr/>
                 <label>email</label>
                 
                 <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                 
                 <label>password</label>
                 
                 <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                 
                 <checkbox type="fill" id="tobefilled" class Name="form-control" required/>
                 <Row>
									<Col className=" mrg-top-5">
										<span class="custom-checkbox">
											<input type="checkbox" id="1"></input>
											<label for="1"></label>
										</span> Forgat Password? <a href="ab" class="cl-success">Click Here</a>
									</Col>
								</Row>
                 <a href="ab" className="btn btn-success ml-1">LogIn</a>
                 <a href="ab" className="btn btn-default ml-1">Cancel</a>
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
              
              
            </Row>

          </Container>
            </div>
      );
  }
}
export default Newloginsignup;