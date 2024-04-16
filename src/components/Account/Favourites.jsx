import React from 'react'
import ProductFavourite from './ProductFavourite'
import PropTypes from "prop-types";

const Favourites = ({ toggleVisibility }) => {
  return (
    <div className='bg-color-8 border-x border-b rounded-b-2xl border-color-9 p-4'>
        <button onClick={toggleVisibility} className="bg-color-1 text-color-2 px-2 py-1 rounded-lg"><i className="fa-solid fa-bars-staggered"></i></button>
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

Favourites.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
};