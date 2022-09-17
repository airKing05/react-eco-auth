import React from 'react'
import CartsCard from '../components/CartsCard';
import { useSelector } from "react-redux";

export default function Cart() {
  const cartData  = useSelector((state) => state.cartData);
  const getGroupedData = (cartData) => {
    const groupedData = [];
    for (let i=0; i < cartData.length; i++) {
        const productId = cartData[i]['id'];
        let found = false;
        for (let cartItem of groupedData) {
          if (cartItem['id'] === productId) {
            cartItem['qty'] +=1;
            found = true;
            continue;
          }
        }
        if (!found) {
          groupedData.push({
            ...cartData[i],
            qty: 1,
          })
        }
    }
    return groupedData;
  };

  return (
    <div className='container' style={{maxWidth: '800px'}}>
      {
       cartData.length>0  && getGroupedData(cartData).map((product) => {
          return <CartsCard key={product.id} cartProduct={product}/>
        }) 
      }
      
    </div>
  )
}
