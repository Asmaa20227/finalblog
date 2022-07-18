
import React from 'react'
import { useState } from 'react'; 
import { Link } from 'react-router-dom';
 import { Nav } from 'react-bootstrap';
import {useRef} from 'react';

function Footer (){
 
        const [email, setEmail] = useState('')
        
        const handleEmailChange = event => {
          setEmail(event.target.value)
        };
      
        const handleSubmit = event => {
          event.preventDefault();
          alert(`Your state values: \n 
                  email: ${email} \n 
                  Sucssful Subscribing`);
        };
 

    const url =  'https://www.wp-course.site//wp-json/youthink/subscribe'
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    };
    fetch(url, requestOptions)
        .then(response => console.log('Submitted successfully'))
        .catch(error => console.log('Form submit error', error))
  
 

                       return (

   < div className="mt-5">
    <div className='main_footer'>
        <div className='container'>
            <div className='row'>
                {/*!colum 1 */}
                <div className="col-12 col-sm-4 col-lg-2 mt-3 mt-sm-0">
                    
                    <h5> Section</h5>
                    <ul className='list-unstyled footer-link '> 
                    <li > <Link to ="/"  className="nav-link active link-secondary" > Home </Link>
        </li> 
                    <li  >  <Link to ="/"  className="nav-link active link-secondary" > Featuras</Link></li> 
                    <li  >   <Link to ="/"  className="nav-link active link-secondary" >  Pricing </Link></li> 
                    <li  > <Link to ="/"  className="nav-link active link-secondary" > FAQs </Link> </li> 
                    <li  >  <Link to ="/"  className="nav-link active link-secondary" >  About  </Link></li> 
                    </ul>
              
                </div>
                <div className="col-12 col-sm-4 col-lg-2 mt-3 mt-sm-0">
                      {/*!colum 2 */}
                    <h5> Section</h5>
                    <ul className='list-unstyled footer-link '> 
                    <li > <Link to ="/"  className="nav-link active link-secondary" > Home </Link>
        </li> 
                    <li  >  <Link to ="/"  className="nav-link active link-secondary" > Featuras</Link></li> 
                    <li  >   <Link to ="/"  className="nav-link active link-secondary" >  Pricing </Link></li> 
                    <li  > <Link to ="/"  className="nav-link active link-secondary" > FAQs </Link> </li> 
                    <li  >  <Link to ="/"  className="nav-link active link-secondary" >  About  </Link></li> 
                    </ul>
              
                </div>
                <div className ="col-12 col-sm-4 col-lg-2 mt-3 mt-sm-0 ">
                      {/*!colum3 */}
                    <h5> Section</h5>
                    <ul className='list-unstyled footer-link '> 
                    <li className='mb-2'> <Link to ="/"  className="nav-link   link-secondary" > Home </Link>
        </li> 
                    <li  >  <Link to ="/"  className="nav-link active link-secondary" > Featuras</Link></li> 
                    <li  >   <Link to ="/"  className="nav-link active link-secondary" >  Pricing </Link></li> 
                    <li  > <Link to ="/"  className="nav-link active link-secondary" > FAQs </Link> </li> 
                    <li  >  <Link to ="/"  className="nav-link active link-secondary" >  About  </Link></li> 
                    </ul>
              
                </div>

 
                <div className="col-lg-4 mt-3 mt-lg-0 offset-lg-1">
                <form onSubmit={handleSubmit}>
                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
      <div className="d-flex w-100 gap-2"> 
             <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email}
        />
       
      <button type="submit" className="btn btn-primary ">   Subscribe      </button>
      </div>
    </form>
    </div>
        <div className='footer-bottom '  >
            <p  className='p-5'> 
             © {new Date(). getFullYear()} Company, Inc. All rights reserved. 
             </p> </div>
  </div>
    </div>
    </div>
    </div>
);
}

export default Footer;