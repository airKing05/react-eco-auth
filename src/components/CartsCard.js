import React from 'react'

export default function CartsCard() {
  return (
      <div className='row shadow-lg p-3 mb-5 bg-body rounded mt-4'>
         <div className='col-md-3'>
              <img src='https://bit.ly/3TJdj7Z' className='img-fluid' alt='photu' />
         </div>
          <div className='col-md-3 my-auto'>
              <h4>How see world </h4>
              <p>books</p>
          </div>
          <div className='col-md-3 text-center my-auto'>
              <span className='rounded-circle bg-secondary pt-0 pb-1 px-2 fw-bold fs-5 text-white'>+</span>
            <span className='p-2 fw-bold fs-5'>2</span>
              <span className='rounded-circle bg-secondary pt-0 pb-1 px-2 fw-bold fs-5 text-white'>-</span>
          </div>
          <div className='col-md-3 text-center my-auto'>
            <span className='fs-5 fw-bold'>Rs. 123</span>
          </div>
    </div>
  )
}
