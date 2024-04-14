import React from 'react'

const ProductSelectedTwo = () => {
  return (
    <article className='w-full flex flex-row  bg-color-3 rounded-3xl p-4'>
      <img src="./categories/mando.webp" className="w-1/5 aspect-square  rounded-2xl flex" alt="" />
      <div className='w-4/5 grid grid-cols-7 md:gap-x-0 gap-x-2'>
        <h4 className='w-full md:col-span-4 col-span-3 md:ml-8 ml-2'>Mando PlayStation 5</h4>
        <h4 className='w-full col-span-2 md:ml-4'>Cantidad</h4>
        <h4 className='w-full md:col-span-1 col-span-2'>Subtotal</h4>
        <p className='w-full md:col-span-4 col-span-3 md:ml-8 ml-2 font-semibold'>S/. 139.00</p>
        <div className='w-full col-span-2 flex flex-row items-start'>
            <button className='bg-[#D9D9D9] rounded-lg w-8 md:h-8 font-bold'>+</button>
            <p className='w-8 md:h-8 font-bold flex items-center justify-center'>1</p>
            <button className='bg-[#D9D9D9] rounded-lg w-8 md:h-8 font-bold'>-</button>
        </div>
        <p className='w-full md:col-span-1 col-span-2 font-semibold'>S/. 139.00</p>
      </div>
    </article>
  )
}

export default ProductSelectedTwo
