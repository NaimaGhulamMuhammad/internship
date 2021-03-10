import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Locations from './Locations'
import Model from './Model'
import Year from './Year'
import Price from './Price'
import Register from './Register'

import Driven from './Driven'
import Fuel from './Fuel'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink} from 'react-router-dom'
import Filters from './Filters'
import './index.css'
import Cards from './Cards';
import Sdata from './Sdata';
function ncard (val){
    console.log(val)
    return(
    <Cards 
    imag={val.imag}
   price={val.price} 
    year={val.year}
    title={  val.title}


    
   />
    );
}
const House =( props)=>{
    
return(
<>
<img  src={require('./imag/content.jpg')} alt="olx"/>
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  
  <Breadcrumb.Item active>House</Breadcrumb.Item>
</Breadcrumb>
<div>
<Container fluid>
<Row>

<Col-2>

<Filters/>
<Model/>
<Locations/>
<Price/>
<Year/>
<Register/>
<Fuel/>
<Driven/>
</Col-2>





<Col>


{Sdata.filter(Sdata => Sdata.price == 2).map(ncard) }

</Col>
</Row>
</Container>

</div>
        </>
    );

}

export default House;