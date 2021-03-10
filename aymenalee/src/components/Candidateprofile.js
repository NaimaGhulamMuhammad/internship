import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card,Col,Row,Button} from "react-bootstrap";
import Ima from './img/payed.jpg';
import ImageUploader from 'react-images-upload';
import EditIcon from "@material-ui/icons/EditRounded";
import  Facebook from "@material-ui/icons/Facebook"
import Instagram from "@material-ui/icons/Instagram"
import Twitter  from "@material-ui/icons/Twitter"
import Linkedin from "@material-ui/icons/LinkedIn"
// import DoneIcon from "@material-ui/icons/Done"
// import { Navbar } from "react-bootstrap";
// import { NavItem } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import LocationIcon from "@material-ui/icons/Place";
import AttachIcon from "@material-ui/icons/AttachFile";
import image from './img/Autodesk.png'
import Banner from 'react-js-banner';

import { Divider} from "@material-ui/core";
// import ShowMoreText from 'react-show-more-text';
// import createPagination from "./createPagination.js";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
 
  },


}));


    
 function Candidateprofile (){


  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);};

    
const [buttonText, setButtonText] = useState("Apply"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

const changeText = (text) => setButtonText(text);
   


  return(

 

            <div>
           <div className="class-loader">    
           <div id="center2" style={{backgroundColor:"ivory"}} >   
                              
                <img style={{opacity:"70%",position:"relative" ,textDecoration:'bold',backgroundColor:"green"}} border="5%" id="creatcompanyimg" alt="100x100" src={Ima}/>
                <h2 id="textoverimg" style={{fontSize:"700%"}} > CANDIDATE PROFILE </h2>
               
             </div>
           </div>
        
           <Card id="cardcompdetails" bg="ivory" text="white" style={{marginRight:"8%" ,marginLeft:"8%" ,width: '84%' }}>
       
              <img id="picture" src={Ima} style={{color:"green",width:"200px",height:"250px",borderRadius:"50%",marginLeft:"45%",marginTop:"-3%"}} />
              <a href="#" id="edit" style={{marginLeft:"2%"}}> <EditIcon id="editicon"></EditIcon></a> 
           <div id="activetime" className="cndt-status pending" style={{marginTop:"-7%"}}>Active Now</div>

            <div className="candidatesummary" >
              <Row>

         
                 {/* <h2 style={{color:"grey",marginLeft:"47%",marginTop:"12%"}}></h2> */}
                 <Card.Text style={{color:"grey",marginLeft:"47%",marginTop:"12%",fontSize:"200%"}}>James Colen</Card.Text>
                 <Card.Text style={{color:"grey",marginLeft:"48%",marginTop:"1%",fontSize:"150%"}}>Web Designer</Card.Text>
            
              </Row>
            </div>
               <div>
                 <Row>
                <Col>
                    
                <Card.Text style={{color:"#ff2194",marginLeft:"20%",marginTop:"1%",fontSize:"800%"}}>85</Card.Text>
                <Card.Text style={{color:"grey",marginLeft:"20%",marginTop:"1%",fontSize:"150%"}}>New Posts</Card.Text>
            
                    </Col>
                    <Col>
                <Card.Text style={{color:"#07e6fa",marginLeft:"35%",marginTop:"1%",fontSize:"800%"}}>110</Card.Text>
                <Card.Text style={{color:"grey",marginLeft:"40%",marginTop:"1%",fontSize:"150%"}}>Job Applied</Card.Text>
            
                    
                    </Col>
                    <Col>
                <Card.Text style={{color:"lawngreen",marginLeft:"10%",marginTop:"1%",fontSize:"800%"}}>120</Card.Text>
                <Card.Text style={{color:"grey",marginLeft:"20%",marginTop:"1%",fontSize:"150%"}}>Invitations</Card.Text>
            
                    </Col>
                 </Row>
               </div>

              
             <div className="icons" style={{marginTop:"5%"}}>
            <Row>
             <Col>  <Facebook   id="social" href="#" style={{marginTop:"0%"}}></Facebook> </Col>
             <Col>  <Instagram  id="social" href="#" style={{marginTop:"0%"}}></Instagram> </Col>
             <Col>  <Twitter  id="social" href="#" style={{marginTop:"0%"}}></Twitter>  </Col>
              <Col><Linkedin  id="social" href="#" style={{marginTop:"0%"}}></Linkedin> </Col>
              <Col> <a href="#" id="filterbtn"style={{marginTop:"0%"}} >Edit </a></Col>
              <Col><a href="#" id="savebtn" style={{marginTop:"0%"}}>Save</a></Col>
              </Row>
           </div>  
        </Card> 

        <br/> <br/> <br/>
          
      <div className={classes.root}>
      <TabContext value={value}>
        <AppBar style={{color:"lightgreen",marginLeft:"7%",width:"85%"}} position="static">
          <TabList style={{backgroundColor:"ivory",color:"Blue",height:"140%"}} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="About" value="1" />
            <Tab label="Address" value="2" />
            <Tab label="Matches Job" value="3" />
            <Tab label="Friends" value="4" />
            <Tab label="Messages" value="5" />
            <Tab label="Settings" value="6" />
          </TabList>
        </AppBar>
        <TabPanel style={{marginLeft:"7%",width:"85%"}} value="1">
       <br/> <br/> <br/>
        <h1>About Adam Colen</h1>
        <p style={{fontSize:"6mm",color:"grey"}}>
         Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
         Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco 
         Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In 
         Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat 
         Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.
        </p>
        <p style={{fontSize:"6mm",color:"grey"}}>
         Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
         Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco 
         Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In 
         Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat 
         Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.
        </p>
        <p style={{fontSize:"6mm",color:"grey"}}>
         Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
         Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco 
         Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In 
         Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat 
         Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.
        </p>
        
        </TabPanel>

        <TabPanel style={{marginLeft:"7%"} }value="2">
        <br/> <br/> <br/>
        <h3>Address Info</h3>
								<Row>   
                  <Col>
                  <label >Address:</label>
                  </Col>
                   <h6 style={{marginLeft:"-70%"}}>SCO 210, Neez Plaza</h6>
                 
                </Row>

                <Row>
                  <Col>
                  <label >City:</label>
                  </Col>
                  <h6 style={{marginLeft:"-70%"}}>Mohali</h6>
                </Row>

                <Row>
                  <Col>
                  <label >State:</label>
                  </Col>
                  <h6 style={{marginLeft:"-70%"}}>Punjab</h6>
                </Row>

                <Row>
                  <Col>
                  <label >Country:</label>
                  </Col>
                  <h6 style={{marginLeft:"-70%"}}>India</h6>
                </Row>

                
                <Row>
                  <Col>
                  <label >Zip:</label>
                  </Col>
                  <h6 style={{marginLeft:"-70%"}}>520 548</h6>
                </Row>

                <Row>
                  <Col>
                  <label >Telephone:</label>
                  </Col>
                  <h6 style={{marginLeft:"-70%"}}>+91 123 456 7854</h6>
                </Row>

                <Row>
                  <Col>
                  <label >Fax:</label>
                  </Col>
                  <h6 style={{marginLeft:"-70%"}}>(622) 123 456</h6>
                </Row>

                <Row>
                  <Col>
                  <label >Email:</label>
                  </Col>
                  <h6 style={{marginLeft:"-70%"}}>youremail@gmail.com</h6>
                </Row>
								
        </TabPanel>


        <TabPanel style={{marginLeft:"7%"}} value="3">
        
             <Card id="cardcomp" bg="ivory" text="white" style={{ marginLeft:"-1%" ,width: '95%' }}>
               <Card.Body>
               <Row>
                      <Banner style={{marginLeft:"0%",backgroundColor:"#ee4040",color:"white"}}
                        title="PREMIUM" 
                        id="banner" />
                
                  <img id="complogo"src={image} href="#"/>
                
                  <Col>
                   <h3 id="compname">  Autodesk </h3>
                      <span id="comptype">software company</span>  
                  </Col>
                   <Col id="maploc"><LocationIcon ></LocationIcon> Street #200, London</Col>

                    {/* <Col style={{marginTop:"3%"}}><a href="#" id="applybtn"  >Apply</a></Col> */}
            <Col style={{marginTop:"3%"}}> <Button id="applybtn" > Apply</Button></Col>
                    </Row>
               </Card.Body>
              </Card> 

           <br/> <br/>
              <Card id="cardcomp" bg="ivory" text="white" style={{ marginLeft:"-1%" ,width: '95%' }}>
               <Card.Body>
               <Row>
                    
                  <img id="complogo"src={image} href="#"/>
                
                  <Col>
                   <h3 id="compname">  Autodesk </h3>
                      <span id="comptype">software company</span>  
                  </Col>
                   <Col id="maploc"><LocationIcon ></LocationIcon> Street #200, London</Col>

                  {/* <Col><a href="#" id="applybtn">Applied</a></Col> */}
                  {/* <Col style={{marginTop:"3%"}}><a href="#" id="appliedbtn"  >✓ Applied</a></Col> */}
                  <Col style={{marginTop:"3%",marginLeft:"6%"}}> <Button id="appliedbtn" onClick={() => setButtonText("✓ Applied")}>{buttonText}</Button></Col>
                    </Row>
           
                    
               </Card.Body>
              </Card> 

        </TabPanel>

        <TabPanel style={{marginLeft:"7%"}} value="4">
        
         <br/><br/>
        <Row style={{width:"90%"}}>
            <Col>
            
            <Card>
              <br/>
              <Card.Header style={{color:"orange",backgroundColor:"#f2bf88",marginRight:"73%",position:"center",marginLeft:"2%",borderRadius:"5px",fontWeight:"bold"}}>Available</Card.Header>
               <br/>
               <img style={{marginLeft:"auto",marginRight:"auto",display:"block",width:"45%"}} id="roundimage" src={Ima}/>
               <br/>
               <Card.Text style={{color:"grey",textAlign:"center"}}>ADAM ACOLEN</Card.Text>
               <br/>
               <Card.Text style={{color:"lawngreen",textAlign:"center"}}> web disigner</Card.Text>
               <p style={{color:"grey",textAlign:"center"}}>Our Analysis Team At Megriosft Use End To End Innovation Proces</p>
               <br/>
                <Button id="viewbutton" href="#">View Profile</Button>
            </Card>
            </Col>



            <Col>
            
            <Card>
              <br/>
              <Card.Header style={{color:"orange",backgroundColor:"#f2bf88",marginRight:"73%",position:"center",marginLeft:"2%",borderRadius:"5px",fontWeight:"bold"}}>Available</Card.Header>
               <br/>
               <img style={{marginLeft:"auto",marginRight:"auto",display:"block",width:"45%"}} id="roundimage" src={Ima}/>
               <br/>
               <Card.Text style={{color:"grey",textAlign:"center"}}>ADAM ACOLEN</Card.Text>
               <br/>
               <Card.Text style={{color:"lawngreen",textAlign:"center"}}> web disigner</Card.Text>
               <p style={{color:"grey",textAlign:"center"}}>Our Analysis Team At Megriosft Use End To End Innovation Proces</p>
               <br/>
                <Button id="viewbutton" href="#">View Profile</Button>
            </Card>
            </Col>
            <Col>      
            <Card>
              <br/>
              <Card.Header style={{color:"green",backgroundColor:"lightgreen",marginRight:"73%",position:"center",marginLeft:"2%",borderRadius:"5px",fontWeight:"bold"}}>Pending</Card.Header>
               <br/>
               <img style={{marginLeft:"auto",marginRight:"auto",display:"block",width:"45%"}} id="roundimage" src={Ima}/>
               <br/>
               <Card.Text style={{color:"grey",textAlign:"center"}}>ADAM ACOLEN</Card.Text>
               <br/>
               <Card.Text style={{color:"lawngreen",textAlign:"center"}}> web disigner</Card.Text>
              
               <p style={{color:"grey",textAlign:"center"}}>Our Analysis Team At Megriosft Use End To End Innovation Proces</p>
               <br/>
                <Button id="viewbutton" href="#">View Profile</Button>
            </Card>
            </Col>  
        </Row> 
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
        </TabPanel> 

              {/* MSG START */}

        <TabPanel style={{marginLeft:"7%"}} value="5">Item five
         <br/>  <br/> <br/>
         <Card id="cardcomp" bg="ivory" text="white" style={{ height:"75ch",marginLeft:"1%" ,width: '95%' }}>
            <Row>
              <Col>
            
              <img style={{marginLeft:"5%",marginTop:"2%",width:"25%",height:"100%"}} id="roundimage" src={Ima}/>
              </Col>
              <Col>
              <label style={{color:"black",marginLeft:"-70%",marginTop:"10%"}}>Adam Colen</label><br/>
              <label style={{color:"black",marginLeft:"-70%",marginTop:"3%"}}>Today at 07:34 AM <span></span></label>
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           Hide
        </button> 
          </Col>
         </Row>
            
    <br/>
    <Divider/>
    <div   class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
    <div  class="card-body">
    <Row  >
    <Col>
    <label  style={{color:"black",marginLeft:"6%",marginTop:"8%",transition:"all"}}>From: diana@gmail.com</label>
    </Col>
    <Col>
    <label style={{color:"black",marginLeft:"-98%",marginTop:"3%",transition:"all"}}>To: subscriber@yahoo.com</label>
    </Col>
    </Row>
    </div>
</div>


<br/>

<div    class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
<div  class="card-body">
    <p  id="collapseOne" style={{color:"black",marginLef:"5%",marginRight:"5%",fontSize:"500"}}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    veniam,


    </p>
</div>
</div>
<Divider/>
 </Card>

 <br/> <br/> <br/> 
 
 <Divider/>

 <label style={{color:"black",fontSize:"700"}}>Attachements</label> <AttachIcon style={{color:"black",fontSize:"30"}}></AttachIcon>

<Row>
  <Col>
           
 <img style={{marginLeft:"2%",display:"block",width:"30%",height:"200%",borderColor:"black",borderRadius:"5px",border:"4px"}}  src={Ima}/>
 <a href="#" id="download" style={{marginLeft:"2%",width:"30%",height:"200%",backgroundColor:"none"}}>Download</a>
  </Col>

  <Col>
           
 <img style={{marginLeft:"-70%",display:"block",width:"30%",height:"200%"}}  src={Ima}/>
 <a href="#" id="download" style={{marginLeft:"-70%",width:"30%",height:"200%",backgroundColor:"none"}}>Download</a>
 
  </Col>
  <Col>
           
 <img style={{marginLeft:"-140%",display:"block",width:"30%",height:"200%"}}  src={Ima}/>
 <a href="#" id="download" style={{marginLeft:"-140%",width:"30%",height:"200%",backgroundColor:"none"}}>Download</a>

  </Col>
  <br/><br/>
</Row>
<br/><br/><br/><br/><br/><br/>
        </TabPanel>

        {/* MSG END */}


        <TabPanel style={{marginLeft:"7%"}} value="6">Item six
        <br/><br/>
        <h1>Edit Profile</h1>
        <br/>
        <Row>
          <Col>
         <label style={{fontSize:"20px"}}>First Name</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="E.g. Mathew"type="text" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>Middle Name</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="E.g. dan"type="text" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>Last Name</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="E.g. Colen"type="text" name="" className="form-control" required />

          </Col>
        </Row>

        <Row>
          <Col>
         <label style={{fontSize:"20px"}}>Email</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="E.g. Mathew"type="email" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>Phone</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="+92332442438"type="text" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>Zip Postal</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="546 890"type="text" name="" className="form-control" required />

          </Col>
        </Row>
        <Row>
          <Col>
         <label style={{fontSize:"20px"}}>Address</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="Street 200, NY"type="text" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>Address 2</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="street 100,NY"type="text" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>Organization</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="Sofware Developer"type="text" name="" className="form-control" required />

          </Col>
        </Row>
        <Row>
          <Col>
         <label style={{fontSize:"20px"}}>City</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="New York"type="text" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>State</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="Island"type="text" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>Country</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="America"type="text" name="" className="form-control" required />

          </Col>
        </Row>
        <Row>
          <Col>
         <label style={{fontSize:"20px"}}>Old Password</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="********"type="password" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>New Pasword</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="********"type="password" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>Old Password</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="********"type="password" name="" className="form-control" required />

          </Col>
        </Row>

        <Row>
          <Col>
         <label style={{fontSize:"20px"}}>About You</label>
         <input id="keywords"style={{marginLeft:"0%"}} Placeholder="write something..."type="text" name="" className="form-control" required />

          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>Upload Profile Pic</label>
          
            <div className="mb-1"> <label>Upload Profile Pic Here</label> <span className="font-css top"></span>
     <div className="">
         <input style={{backgroundColor:"lightblue",padding:"1em 2em"}} type="file" id="file-input" name="ImageStyle"/>
     </div>
     </div>
          </Col>
          <Col>
          <label style={{fontSize:"20px"}}>Upload Profile Cover Here</label>
             <div className="mb-1"><label>Upload Profile Cover Here</label> <span className="font-css top"></span>
     <div className="">
         <input placeholder="Upload Pic here" style={{backgroundColor:"lightblue",padding:"1em 2em"}} type="file" id="file-input" name="ImageStyle"/>
     </div>
     </div>

          </Col>
        </Row>
         <br/>   <br/>   <br/>
         <a href="#" id="submitcomp" style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"17%"}}>Update Now </a>
      
      
        </TabPanel>
      </TabContext>
    </div>      
        </div>

        );
        }
   export default Candidateprofile;
