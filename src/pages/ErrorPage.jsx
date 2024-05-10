import React from 'react'

const Errors = (error) => {
  return (
    <section className='text-center mx-auto'>
      <h2 className=' font-bold text-center text-2xl'>Error Occured</h2>
      <h2>{error}</h2>
    </section>
  )
}

export default Errors