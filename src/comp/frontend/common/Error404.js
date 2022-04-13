import React from 'react'
import { Link } from 'react-router-dom'
import Welcome from './Welcome'

export default function Error404() {
  return (
    <>
     <Welcome>
         <div className="container pagenotfound">
             <div className="row">
                 <div className="col-12 col-md-6 mx-auto">
                     <div className="text-center">
                         <div className="p-4">
                             <img src="../../../img/error/nocart.svg" width={"100%"} alt="pagenotfound" />
                         </div>
                         <div className="content">
                             <h5>Unfortunately the page you are looking for has been moved or deleted</h5>
                         </div>
                         <div className="text-center my-3">
                             <Link to ="/" className='btn btn-warning'>GO TO HOMEPAGE</Link>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </Welcome>
    </>
  )
}
