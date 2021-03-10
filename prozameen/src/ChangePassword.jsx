import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ChangePassword=()=>{
        return(
            <>
            <div class="page-head"> 
            <div class="container">
                <div class="row">
                    <div class="page-head-content">
                        <h1 class="page-title">Hello : <span class="orange strong">Kimaro kyoto</span></h1>               
                    </div>
                </div>
            </div>
        </div>
<div class="content-area user-profiel" style={{backgroundColor:" #FCFCFC"}}>&nbsp;
<div class="container">   
    <div class="row">
        <div class="col-sm-10 col-sm-offset-1 profiel-container">

            <form action="" method="">

                <div class="profiel-header">
                    <h3>
                    <strong> UPDATE YOUR PASSWORD <br/></strong>  
                    </h3>
                    
                    <p class="text-center">All change will send to your e-mail.</p>
                    <hr/>
                </div>

                <div class="clear">

                    <div class="col-sm-10 col-sm-offset-1">
                        <div class="form-group">
                            <label>Password <small>(required)</small></label>
                            <input name="Password" type="password" class="form-control">
                      </input>  </div>
                        <div class="form-group">
                            <label>Confirm password : <small>(required)</small></label>
                            <input type="password" class="form-control">
                       </input> </div> 
                    </div>
                    <div class="col-sm-10 col-sm-offset-1">
                        <input type='button' class='btn btn-finish btn-primary pull-right' name='update' value='Update' />
                  </div>
                    
                </div>

        
                
                
        </form>

        </div>
        </div></div>

</div>


            </>
        )
    }

export default ChangePassword;