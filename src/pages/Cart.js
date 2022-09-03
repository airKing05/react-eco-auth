import React from 'react'
import CartsCard from '../components/CartsCard';
import { useSelector } from "react-redux";

export default function Cart() {
  const cartData  = useSelector((state) => state.cartData);
  
  return (
    <div className='container' style={{maxWidth: '800px'}}>
      {
        cartData.length> 0 && cartData.map((product) => {
          return <CartsCard key={product.id} cartProduct={product}/>
        })
      }
      
    </div>
  )
}
