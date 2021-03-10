import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink} from 'react-router-dom';
const Error=()=>{
    return(
        <>
        <div class="content-area error-page" style={{backgroundColor: "#FCFCFC", paddingBottom: "55px"}}>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                    <h2 class="error-title">404</h2>
                    <p>Sorry, the page you requested may have been moved or deleted</p>
                    <NavLink to="/Faq" class="btn btn-default">Home</NavLink>                        
                </div>
            </div> 
        </div>
    </div> 

        </>
    );
}
export default Error;