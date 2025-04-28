import React, { useCallback, useContext, useState } from 'react'
import Title from '../components/title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'



const Placeorder = () => {

const [method,setMethod]=useState('cod');
const {navigate}=useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]border-top '>
      {/*LEFT SIDE */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Second name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="email" placeholder='E-mail address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='ZipCode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

      </div>
      {/*-----Right side----- */}
      <div className='mt-8'>
      <div className='mt-8 min-w-80'>
        <CartTotal/>
      </div>

      <div className='mt-12'>
        <Title text1={'PAYMENT'} text2={'METHOD'}/>
        <div className='flex gap-3 flex-col lg:flex-row'>
  {/* Stripe */}
  <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded'>
    <div className={`w-4 h-4 rounded-full border-2 ${method === 'stripe' ? 'bg-green-400 border-green-400' : 'border-gray-300'}`}></div>
    <img src={assets.stripe_logo} alt="Stripe" className='h-5' />
  </div>

  {/* Razorpay */}
  <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded'>
    <div className={`w-4 h-4 rounded-full border-2 ${method === 'razorpay' ? 'bg-green-400 border-green-400' : 'border-gray-300'}`}></div>
    <img src={assets.razorpay_logo} alt="Razorpay" className='h-5' />
  </div>

  {/* COD */}
  <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded'>
    <div className={`w-4 h-4 rounded-full border-2 ${method === 'cod' ? 'bg-green-400 border-green-400' : 'border-gray-300'}`}></div>
    <p className='text-gray-600 text-sm font-medium'>CASH ON DELIVERY</p>
  </div>
</div>
    <div className='w-full text-end mt-8'>
      <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Placeorder
