import React from 'react';
import {Link} from 'react-router-dom';
import Modal from './Modal';

const Contact = () => {
	
	return(
		<div>
		<Modal />
        <div className='ui raised very padded text container segment'
       style={{marginTop:'80px'}}
      >
     <Link to='/alex' className='ui header'>Alex</Link>
     <p>this my react router </p>

      </div>

       <div className='ui raised very padded text container segment'
       style={{marginTop:'80px'}}
      >
     <Link to='/willma' className='ui header'> willma </Link>
     <p>this my react router </p>

      </div>
        </div>
     
		)
}

export default Contact;