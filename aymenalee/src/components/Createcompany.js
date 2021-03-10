import React,{Component,PropTypes} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card,Col,Row} from "react-bootstrap";
import { Divider} from "@material-ui/core";
import Ima from './img/greenbg.png';
import ImageUploader from 'react-images-upload';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import MailIcon from '@material-ui/icons/Mail';
import DateIcon from '@material-ui/icons/Cake';
import PublicIcon from  '@material-ui/icons/Public';
import CallIcon from '@material-ui/icons/Call';
import EmployeeIcon from '@material-ui/icons/Group';
import PlaceIcon from '@material-ui/icons/Place';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import {FaGooglePlus,FaDribbble} from "react-icons/fa";
import { Editor } from '@tinymce/tinymce-react';



class Createcompany extends React.Component{  

    constructor(props) {
       
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this); 
        
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),});
    }
    
      handleChange(event) {
        console.log(event.target.value)
      }

      handleEditorChange = (e) => {
        console.log(
          'Content was updated:',
          e.target.getContent()
        );
      }


   
 
render() { 
 
  
 return(
   <div>
         <div className="class-loader">    
           <div id="center2" style={{backgroundColor:"ivory"}} >   
                              
                <img style={{position:"relative" ,textDecoration:'bold',backgroundColor:"green"}} border="5%" id="creatcompanyimg" alt="100x100" src={Ima}/>
                <h2 id="textoverimg" style={{fontSize:"700%"}} > CREATE COMPANY </h2>
               
             </div>
           </div>

           
     <Card id="cardcompdetails" bg="ivory" text="white" style={{marginRight:"8%" ,marginLeft:"8%" ,width: '84%' }}>

<PublishRoundedIcon type="file" style={{border:"double" ,color:"white",backgroundColor:"green",fontSize:"60mm",marginLeft:"43%",borderRadius:"110px",marginTop:"-2cm"}}> Upload Image </PublishRoundedIcon>
 
<ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                style={{opacity:"2%",marginTop:"-5.5cm"}}
    >


</ImageUploader>

    <Row>
    <Col>
    <input id="keywords"style={{width:"95%",marginTop:"10%",marginLeft:"3%"}} Placeholder="Company Name"type="text" name="" className="form-control" required />
    </Col>
    <Col>
    <input id="keywords"style={{width:"95%",marginTop:"10%",marginLeft:"1%"}} Placeholder="Company Tgline"type="text" name="" className="form-control" required />
    </Col>
  </Row>
  <Row>
  <Col>
    <input id="keywords"style={{width:"95%",marginTop:"5%",marginLeft:"3%"}} Placeholder="Company CEO Name"type="text" name="" className="form-control" required />
    </Col>
    <Col>
    {/* <input id="keywords"style={{width:"95%",marginTop:"5%",marginLeft:"1%"}} Placeholder="Keywords:Name,tag"type="text" name="" className="form-control" required /> */}
    <select id="keywords" style={{width:"95%",marginTop:"5%",marginLeft:"1%"}} Placeholder="Keywords:Name,tag"type="text" name="" className="form-control" required  class="form-control input-lg">
										<option>All Categories</option>
										<option>Software</option>
										<option>Hardware</option>
										<option>Machanical</option>
										<option>HR/Manager</option>
									</select>
    </Col>
  </Row>
  {/* <input id="keywords" type="textarea" placeholder ="Company Description" style={{row:"5",width:"97%",marginTop:"3%",marginLeft:"1%",marginRight:"10%"}} onChange={this.handleChange}/> */}
  {/* <textarea value={this.state.value} onChange={this.handleChange} cols={40} rows={10} /> */}
  <Row>
  <form onSubmit={this.handleSubmit}>
        
            <textarea id="textarea"type="textarea" placeholder ="Company Description" style={{width:"95%",marginTop:"3%",marginLeft:"2%"}} onChange={this.handleChange} value={this.state.value} cols={400} rows={8} />
        </form>
  </Row>
                
            <div className="icons" style={{marginTop:"1%",marginLeft:"57%"}}>
            <Row> 
           
            <Divider/>
              <Col> <a href="#" id="filterbtn" >Choose cover Image </a></Col>
          
              </Row>
           </div>  
        </Card> 

        <br/>
        <br/>  
         <br/>
        <br/>

 <Card id="headings" text="white" style={{ marginLeft:"5%" ,width: '90%'}}>
 
 <Card.Body>
 <Row>
 
  <Col>
  <h3 style={{color:"grey" }}>   Work Experience</h3> 
  </Col>
 </Row>
 </Card.Body>
 </Card>
   
<br/>
<div style={{position: 'relative', display: 'inline-block'}}>
    <Row>
        <Col>
       <MailIcon style={{position: 'absolute', width:"50%", height:"71%",marginTop:"9%",marginLeft:"30%",color:"white",backgroundColor:"green"}}/>
  
            <input id="keywords"style={{width:"250%",marginTop:"10%",marginLeft:"90%"}} Placeholder="Emal Address"type="text" name="" className="form-control" required />
        </Col>    
        <Col>
        
        <CallIcon style={{position: 'absolute', width:"50%", height:"71%",marginTop:"9%",marginLeft:"260%",color:"white",backgroundColor:"green"}}/>
  
        <input id="keywords"style={{width:"250%",marginTop:"10%",marginLeft:"350%"}} Placeholder="Phone Number"type="text" name="" className="form-control" required />
        </Col>
        </Row>

        <Row>

            <Col>                 
                   {/* <MultipleDatePicker onSubmit={dates => console.log("selected dates ", dates)}  /> */}
                   <DateIcon style={{position: 'absolute', width:"50%", height:"75%",marginTop:"9%",marginLeft:"30%",color:"white",backgroundColor:"green"}}></DateIcon>
                   <input type="date" name="dateofbirth" id="dateofbirth"
                   style={{width:"250%",marginTop:"10%",marginLeft:"90%"}} required/>
                   

        </Col>
        <Col>
        <PlaceIcon style={{position: 'absolute', width:"50%", height:"71%",marginTop:"9%",marginLeft:"260%",color:"white",backgroundColor:"green"}}/>
  
        <input id="keywords"style={{width:"250%",marginTop:"10%",marginLeft:"350%"}} Placeholder="Location E.g New Park"type="text" name="" className="form-control" required />

        
        </Col>


        </Row>
        <Row>
        <Col>
       <PublicIcon style={{position: 'absolute', width:"50%", height:"70%",marginTop:"9%",marginLeft:"30%",color:"white",backgroundColor:"green"}}/>
       <input id="keywords"style={{width:"250%",marginTop:"10%",marginLeft:"90%"}} Placeholder="Web Address"type="text" name="" className="form-control" required />
        </Col>

        <Col>
        <EmployeeIcon style={{position: 'absolute', width:"50%", height:"71%",marginTop:"9%",marginLeft:"260%",color:"white",backgroundColor:"green"}}/>
  
        <input id="keywords"style={{width:"250%",marginTop:"10%",marginLeft:"350%"}} Placeholder="Employee E.g 100-1200"type="text" name="" className="form-control" required />

        </Col>
        </Row>
</div>

<br/><br/><br/><br/>
<Card id="headings" text="white" style={{ marginLeft:"5%" ,width: '90%'}}>
 
 <Card.Body>
 <Row>
 
  <Col>
  <h3 style={{color:"grey" }}>  Social Profile</h3> 
  </Col>
 </Row>
 </Card.Body>
 </Card>


 <div style={{position: 'relative', display: 'inline-block'}}>
    <Row>
        <Col>
       <FacebookIcon style={{position: 'absolute', width:"50%", height:"71%",marginTop:"9%",marginLeft:"30%",color:"white",backgroundColor:"green"}}/>
  
            <input id="keywords"style={{width:"250%",marginTop:"10%",marginLeft:"90%"}} Placeholder="Facebook Link"type="text" name="" className="form-control" required />
        </Col>    
        <Col>
        
        <InstagramIcon style={{position: 'absolute', width:"50%", height:"71%",marginTop:"9%",marginLeft:"260%",color:"white",backgroundColor:"green"}}/>
  
        <input id="keywords"style={{width:"250%",marginTop:"10%",marginLeft:"350%"}} Placeholder="Instagram Link"type="text" name="" className="form-control" required />
        </Col>
        </Row>

        <Row>

            <Col>                 
                   {/* <MultipleDatePicker onSubmit={dates => console.log("selected dates ", dates)}  /> */}
                   <FaGooglePlus style={{position: 'absolute', width:"50%", height:"71%",marginTop:"9%",marginLeft:"30%",color:"white",backgroundColor:"green"}}></FaGooglePlus>
                  
                   <input type="text" id="keywords" placeholder="Google Proile Link"
                   style={{width:"250%",marginTop:"10%",marginLeft:"90%"}} name="" className="form-control" required/>
                   

        </Col>
        <Col>
        <TwitterIcon style={{position: 'absolute', width:"50%", height:"71%",marginTop:"9%",marginLeft:"260%",color:"white",backgroundColor:"green"}}/>
  
        <input id="keywords"style={{width:"250%",marginTop:"10%",marginLeft:"350%"}} Placeholder="Twitter Link"type="text" name="" className="form-control" required />

        
        </Col>


        </Row>
        <Row>
        <Col>
       <LinkedinIcon style={{position: 'absolute', width:"50%", height:"70%",marginTop:"9%",marginLeft:"30%",color:"white",backgroundColor:"green"}}/>
       <input id="keywords"style={{width:"250%",marginTop:"10%",marginLeft:"90%"}} Placeholder="Web Address"type="text" name="" className="form-control" required />
        </Col>

        <Col>
        <FaDribbble style={{position: 'absolute', width:"50%", height:"71%",marginTop:"9%",marginLeft:"260%",color:"white",backgroundColor:"green"}}/>
  
        <input id="keywords"style={{width:"250%",marginTop:"10%",marginLeft:"350%"}} Placeholder="Profile Link"type="text" name="" className="form-control" required />

        </Col>
        </Row>
</div>
    
    <br/><br/><br/><br/>
      <div id="texteditor">
    <Editor
         id="texteditor"
        initialValue="<p>type here</p>"
   
        init={{
          height: 500,
          width:1200,
          marginLeft:"30%",
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic underline Image| \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={this.handleEditorChange}
      />
      </div>
        <br/><br/><br/><br/><br/><br/>
       <Col > <a href="#" id="submitcomp">Submit your company </a></Col>
       <br/><br/><br/><br/>
       <br/><br/><br/><br/>
   </div>
   );
  
}

}
export default Createcompany;
