import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../redux/actions/cartActions";

export default function CartsCard(props) {
  const { id, price, title, image, qty } = props.cartProduct;
 
  //console.log(rating)
  const dispatch = useDispatch();
  // function handleRemoveFromCart() {
  //   dispatch(removeFromCart(id))
  // }

  function handleAddQuantity(){
    dispatch(addToCart({...props.cartProduct}))
  }
  function handleSubQuantity(){
    dispatch(removeFromCart(id));
  }

  return (
   
      <div className='row shadow-lg p-3 mb-5 bg-body rounded mt-4 position-relative'>
        {/* <span className='position-absolute' style={{ top: '5%', right: '0%' }} onClick={handleRemoveFromCart}><UilTimes /></span> */}
        <div className='col-md-3 text-center mb-3 mb-md-0'>
          <img src={image && image} className='img-fluid' width='100' alt='photu' />
        </div>
        <div className='col-md-3 my-auto text-center'>
          <h4 className='text-name'>{title && title}</h4>
       
        </div>
        <div className='col-md-3 text-center my-auto'>
          <span className='rounded-circle bg-secondary pt-0 pb-1 px-2 fw-bold fs-5 text-white'
          onClick={handleAddQuantity}>+</span>
          <span className='p-2 fw-bold fs-5'>{qty}</span>
          <span className='rounded-circle bg-secondary pt-0 pb-1 px-2 fw-bold fs-5 text-white'
          onClick={handleSubQuantity}>-</span>
        </div>
        <div className='col-md-3 text-center my-auto'>
          <span className='fs-5 fw-bold'>USD. {price && price*qty}</span>
        </div>
      </div> 
     
  )
}
