import React from 'react'
import ProductFavourite from './ProductFavourite'

const Favourites = () => {
  return (
    <div className='bg-color-8 border-x border-b rounded-b-2xl border-color-9 p-4'>
        <h1 className="text-2xl font-semibold mb-6">Favoritos</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 justify-center gap-x-8 gap-y-6 '>
            <ProductFavourite />
            <ProductFavourite />
            <ProductFavourite />
            <ProductFavourite />
            <ProductFavourite />
            <ProductFavourite />
        </div>
    </div>
  )
}

export default Favourites
