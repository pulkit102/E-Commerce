import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';


const Cart = () => {
  const {products, currency, cartItems,updateQuantity,navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for(const items in cartItems) {
      for(const item in cartItems[items]) {
        if(cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div> 

      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product.id === item.id);
          
          if (!productData) return null; // Skip if product not found
          
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <p className='text-xs'>Qty: {item.quantity}</p>
                  <p className='text-xs'>Size: {item.size}</p>
                </div>
              </div>
              <div className='text-right'>
                <p>{currency}{productData.price * item.quantity}</p>
              </div>
              <input onChange={(e)=>e.target.value==='' || e.target.value==='0' ? null : updateQuantity(item.id,item.size,Number(e.target.value))} className='border max-w-10 sm:max=w=20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
              <img onClick={()=>updateQuantity(item.id,item.size,0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer ' alt="" />
            </div>
          )
        })}
      </div>
      <div className='flex justify-end my-20'>
          <div className='w-full sm:w=[450px]'>
              <CartTotal></CartTotal>
              <div className='w-full text-end'>
                <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Cart