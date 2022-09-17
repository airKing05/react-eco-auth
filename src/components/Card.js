import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

export default function Card({...product}) {
    const { price, title, image, category } = product;

    const dispatch =  useDispatch();
  
  function handleAddToCart(){
    //console.log(product)
    dispatch(addToCart(product))
  }
    
  return (
    
    <div className='col-md-3 p-2 mx-1 my-4 border rounded text-center'>
      <div className='position-relative'>
        <img src={image} className='img-fluid rounded mb-3' style={{ maxWidth: '200px', height: '200px' }} alt='photu' />
         <span onClick={handleAddToCart} className='position-absolute btn border bg-success' style={{top: '0%', right: '0%'}}>
          <span className='fs-6 fw-bolder text-white'>Add</span>
         </span>
      </div>
          <h4 className='fs-4 fw-bolder text-name'> {title}</h4>
          <p className='text-muted'>{category}</p>
          <span className='fw-bolder '>Rs {price}</span>
    </div>
  )
}
