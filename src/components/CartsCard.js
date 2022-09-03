import React from 'react'

export default function CartsCard() {
  return (
      <div className='row shadow-lg p-3 mb-5 bg-body rounded mt-4'>
          <div className='col-md-3 text-center mb-3 mb-md-0'>
              <img src='https://bit.ly/3edXLc5' className='img-fluid' width='100' alt='photu' />
         </div>
          <div className='col-md-3 my-auto text-center'>
              <h4> Backpack</h4>
              <p>Rating: 3.9</p>
          </div>
          <div className='col-md-3 text-center my-auto'>
              <span className='rounded-circle bg-secondary pt-0 pb-1 px-2 fw-bold fs-5 text-white'>+</span>
            <span className='p-2 fw-bold fs-5'>1</span>
              <span className='rounded-circle bg-secondary pt-0 pb-1 px-2 fw-bold fs-5 text-white'>-</span>
          </div>
          <div className='col-md-3 text-center my-auto'>
            <span className='fs-5 fw-bold'>Rs. 123</span>
          </div>
    </div>
  )
}
