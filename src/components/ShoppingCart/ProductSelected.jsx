import React from 'react'

const ProductSelected = () => {
  return (
    <article className="bg-color-3 grid grid-cols-8 grid-rows-2 p-4 rounded-3xl">
            <div className="col-span-2 row-span-2 flex  items-center"><img src="./categories/mando.webp" className="w-2/3  rounded-2xl flex" alt="" /></div>

            <p className="flex items-center md:col-span-3 col-span-2">Mando Playstation 5</p>
            <p className="flex items-center justify-center md:col-span-2 col-span-3">Cantidad</p>
            <p className="flex items-center justify-center col-span-1">Subtotal</p>
            <p className="flex items-start md:col-span-3 col-span-2 text-xl font-semibold">S./139.00</p>
            <div className="md:col-span-2 col-span-3 flex flex-row justify-center items-start gap-2">
                    
                        <i className="text-2xl fa-regular fa-square-minus"></i>
                    
                    <span className="text-2xl">10</span>
                    
                        <i className="text-2xl fa-regular fa-square-plus"></i>
                    
                </div>
            <p className="col-span-1 flex items-start justify-center text-xl font-semibold">S./139.00</p>
        </article>
  )
}

export default ProductSelected
