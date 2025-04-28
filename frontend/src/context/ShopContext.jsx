import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{

    const currency="$";
    const delivery_fee=10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState({});
    const navigate=useNavigate();

    const addToCart=async (itemId,size)=>{
        let cartData=structuredClone(cartItems);

        if(!size){
            toast.error('Select product size');
            return;
        }

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }
            else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData);

    }

        const getCartCount=()=>{
            let totalCount=0;
            for(const items in cartItems){
                for( const item in cartItems[items]){
                    try{
                        if(cartItems[items][item]>0){
                            totalCount += cartItems[items][item];
                        }
                    }catch(error){

                    }
                }
            }
            return totalCount;
        }

        const updateQuantity=async(itemId,size,quantity)=>{
            let cartData=structuredClone(cartItems);
            cartData[itemId][size]=quantity;
            setCartItems(cartData);
        }

        const getCartAmount = () => {
            let totalAmount = 0;
            
            for (const productId in cartItems) {
                const product = products.find((p) => p.id === productId);
                
                if (!product) continue; // Skip if product not found
        
                for (const size in cartItems[productId]) {
                    const quantity = cartItems[productId][size];
                    if (quantity > 0) {
                        totalAmount += product.price * quantity;
                    }
                }
            }
        
            return totalAmount;
        };
        

    const value={
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,
        getCartCount,updateQuantity,getCartAmount,
        navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;