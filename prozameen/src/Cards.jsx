import React from "react";
import { Simulate } from "react-dom/test-utils";
import Sdata from './Sdata'

import {Link} from 'react-router-dom';
import './index.css';


const Cards=(props)=>{
  
 return(   
     <>
     


 <div class="content-area blog-page padding-top-40" style={{backgroundColor: "#FCFCFC", paddingBottom: "55px"}}>
            <div class="container">   
                <div class="row">
                    <div class="blog-lst col-md-12 pl0">
                        <section class="post">
                            <div class="text-center padding-b-50">
                                <h2 class="wow fadeInLeft animated">{props.heading}</h2>
                                <div class="title-line wow fadeInRight animated"></div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="author-category">
                                        By <a href="#">{props.name}</a>
                                        in <a href="blog.html">{props.where}</a>
                                    </p>
                                </div>
                                <div class="col-sm-6 right" >
                                    <p class="date-comments">
                                        <a href="single.html"><i class="fa fa-calendar-o"></i> {props.date}</a>
                                        <a href="single.html"><i class="fa fa-comment-o"></i> {props.coments}</a>
                                    </p>
                                </div>
                            </div>
                            <div class="image wow fadeInLeft animated">
                                <a href="single.html">
                                <img alt="timer" src={require('./imag/hero_bg_pk.jpg')}  />

                                 </a>
                            </div>
                            <p class="intro">{props.detail}</p>
                            <p class="read-more">
                            <Link to="/Single" class="btn btn-default btn-border"> Continue </Link>
                         
                               </p>
                        </section>   
                        </div>  
                        </div>
        
                    </div>
                    </div>
    </>
    );
}
export default Cards;