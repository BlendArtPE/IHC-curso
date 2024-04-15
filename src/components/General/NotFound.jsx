import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <img src="./notFound.svg" alt="" className='h-64' />
      <p className='mt-6 mb-2'>Parece que te has perdido, vuelve a ver más productos.</p>
      <Link to="/" className='px-4 py-2 bg-color-1 text-color-2 font-semibold rounded-full'>Regresar</Link>
    </div>
  )
}

export default NotFound
