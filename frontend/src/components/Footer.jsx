import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="EliteBazaar Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Bringing you quality and style, every step of the way. At EliteBazaar, we're dedicated to curating the best products with the customer in mind, ensuring satisfaction from browsing to doorstep.
          </p>
        </div>
        
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-908-487-7146</li>
            <li><a href="mailto:rikkyyadav63@gmail.com">Pulkit@gmail.com</a></li>
          </ul>
        </div>
      </div>
      
      <div>
        <hr />
        <p className='py-5 text-sm text-center text-gray-600'>Copyright © 2024 EliteBazaar.com - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
