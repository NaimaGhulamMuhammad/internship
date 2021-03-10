import React from 'react'
import {Link} from 'react-router-dom'
const Error=()=>{
    return(
        <>
        <section className="simple-bg-screen big-wrap">
				<div className="container">
					<div className="error-page">
						<h2>4<span>0</span>4</h2>
						<p>Oops...looks like we got lost</p> 
						<Link className="btn btn-success small-btn" to='/Home'>Let's Go Home</Link>
					</div>
				</div>
			</section>

        </>
    )
}
export default Error;