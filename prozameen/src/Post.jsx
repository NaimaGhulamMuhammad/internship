// import React from 'react';

// import {NavLink} from 'react-router-dom';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// const Post=()=>{
//     return(
// <>
// <Container>
// <Row>
// <Col>
// <h4>POST YOUR AD</h4>
// </Col>

// </Row>
// </Container>
// <Container className='post'>
// <Row>
// <Col>
// <h3>CHOOSE A CATEGORY</h3>
// <input type='text' hidden id='ii'></input>
// <ul>
// <li> <i class='fa fa-phone'></i> <span>Mobile</span> <i class="fa fa-angle-down" onClick={()=>{
// document.getElementById('iii');
    
//     }}></i></li>
// </ul>
// </Col>

// </Row>
// </Container>
// </>


//     );
// }
// export default Post;
 import React from 'react';
import firebase from 'firebase';
import Firebase from './config/firebase.js';
class Post extends React.Component{
    render(){
        return(
            <div>
            <h1>LOGIN INFORMATION</h1>
            <button onClick={ ()=>{
                facebook_login()
              }}>Login With FaceBook</button>
            </div>
        )
    }
}
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

// import Vehicle from './Vehicle'
// import MobilePost from './MobilePost'
// import Col from 'react-bootstrap/Col'
// class Post extends React.Component {
    

// render(){
//     return(
//         <div>
//         <Container>
//         <Row>
//         <Col>
//         <MobilePost/>

//         </Col>
        
//         </Row>
//         </Container>
//         <Container>
//         <Row>
//         <Col>
//         <Vehicle/>
//         </Col>
//         </Row>
//         </Container>
//         <Container>
//         <Row>
//         <Col>
//         <Vehicle/>
//         </Col>
//         </Row>
//         </Container>
//         </div>
     
        
//     );
// }
// }
 export default Post;
 const  facebook_login = ()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
Firebase.auth().signInWithPopup(provider)
.then(function  (result){
    var token = result.credential.accessToken;
    var user = result.user;
    let create_user ={
        name:user.displayName,
        email:user.email,
        profile:user.photoURL,
        uid:user.uid
    }
    firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
    .then(()=>{

        alert("user login successful")
    })
    console.log("user==>",create_user)
}).catch(function (error){

var errorCode = error.code;
var errorMessage = error.message;
console.log(errorMessage)
})

}