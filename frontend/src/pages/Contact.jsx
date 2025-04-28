import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}></Title>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>OUT STORE</p>
          <p className='text-gray-500'>Shivlok colony <br /> swarg aashram road,Hapur,India</p>
          <p className='text-gray-500'>Tel: 9084877146 <br /> Email:pulkit22shiv@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at EliteBazaar</p>
          <p className='text-gray-500'>Learn more about us and shop for yourself the best clothes</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Learn more..</button>
        </div>
      </div>
      <NewsLetterBox></NewsLetterBox>
    </div>
  )
}

export default Contact
