import React from 'react'

export default function Card({...product}) {
    const { price, title, image, category } = product;
    
  return (
    <div className='col-md-3 p-2 mx-1 my-4 border rounded text-center'>
      <div className='position-relative'>
        <img src={image} className='img-fluid rounded' style={{ maxWidth: '200px', height: '200px' }} alt='photu' />
         <span className='position-absolute btn border bg-success' style={{top: '0%', right: '0%'}}>
          <span className='fs-6 fw-bolder text-white'>Ad</span>
         </span>
      </div>
          <h4 className='fs-4 fw-bolder'> {title}</h4>
          <p className='text-muted'>{category}</p>
          <span className='fw-bolder '>Rs {price}</span>
    </div>
  )
}
