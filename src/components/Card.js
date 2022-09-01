import React from 'react'

export default function Card({...product}) {
    const { price, title, image, category } = product;
    console.log(price, title)
  return (
    <div className='col-md-3 p-2 mx-1 my-4 border rounded text-center'>
          <img src={image} className='img-fluid rounded' style={{maxWidth: '200px', height: '200px'}} alt='photu'/>
          <h4 className='fs-4 fw-bolder'> {title}</h4>
          <p className='text-muted'>{category}</p>
          <span className='fw-bolder'>Rs {price}</span>
    </div>
  )
}
