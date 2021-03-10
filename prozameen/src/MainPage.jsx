import React from "react";

import Cards from './Cards';
import Sdata from './Sdata';
function ncard (val){
    console.log(val)
    return(
        <div>
        <div class="page-head"> 
        <div class="container">
            <div class="row">
                <div class="page-head-content">
                    <h1 class="page-title">FAQ PAge</h1>               
                </div>
            </div>
        </div>
    </div>
    <Cards
    heading={val.heading}
   date={val.date} 
   name={val.name} 
   where={val.where} 
    coments={val.coments}
    detail={  val.detail}/>

   </div>
    );
}
const MainPage =()=>{
    
return(
<>





{Sdata.filter(Sdata=> Sdata.num==1).map(ncard) }




 
</>
);

}
export default MainPage;