import React from 'react'

const ProductCatalogue = () => {

    

const product = {
    name: "PlayStation DualSense® Wireless Controller - Midnight Black",
    releaseDate: "16 de enero de 2024",
    brand: "PlayStation",
    rating: "4.6 de 5 estrellas",
    reviews: 401,
    price: "s/. 200.00",
    purchasesLastMonth: "10 K+",
    compatibleWith: "PlayStation 5",
    shop: "Agregar al carrito"
  };


  return (
    <div className='flex items-center'>
                <img src="./categories/i2.png" alt="" />
                <div>
                    <h3 className='font-medium text-lg'>{product.name}</h3>
                        <p className='text-sm py-1'>{product.releaseDate} | {product.brand}</p>
                    <div className='flex items-center gap-1'>
                        <i className="text-yellow-400 fa-solid fa-star"></i>
                        <i className="text-yellow-400 fa-solid fa-star"></i>
                        <i className="text-yellow-400 fa-solid fa-star"></i>
                        <i className="text-yellow-400 fa-solid fa-star"></i>
                        <i className="text-yellow-400 fa-regular fa-star"></i>
                        <p className='ml-3'>{product.reviews}</p>
                    </div>
                    <h4 className='font-semibold my-1'>{product.price}</h4>
                        <p className='text-sm mb-2'>{product.purchasesLastMonth} compraron el mes pasado</p>
                        <button className='px-4 py-2 bg-yellow-400 hover:bg-yellow-300 rounded-full'>
                            {product.shop}
                        </button>
                </div>
            </div>
  )
}

export default ProductCatalogue



