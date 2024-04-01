import React from 'react'
import PropTypes from 'prop-types'

const MainProducts = ({data}) => {
  return (
    <>
        {data.map((products, index) => {
            return (
                <section key={index} className='relative text-center'>
                    <img src={products.options[0].image} className='border-2 border-black' alt="" />
                    <div className='absolute inset-x-0 top-8 space-y-4'>
                        <h3 className='text-3xl font-bold'>{products.title}</h3>
                        <ul className='flex justify-center gap-6 font-semibold'>
                            {products.categories.map((categorie, index) => {
                                return (
                                    <li key={index}>{categorie}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='absolute inset-x-0 bottom-12'>
                        {products.options.map((option, index) => {
                            return (
                                <div key={index} className='space-y-2'>
                                    <h3 className='text-3xl font-bold'>{option.title}</h3>
                                    <div className='flex justify-center'>
                                        <strong>{option.subTitle}</strong>
                                        <p>{option.text}</p>
                                    </div>
                                    <div className="flex justify-center  items-center gap-4">
                                        <a href="" className="font-bold underline underline-offset-4">{option.buttons[0]}</a>
                                        <a href="" className="bg-black text-white rounded-full px-4 py-1">{option.buttons[1]}</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            )
        })}
    </>
  )
}

MainProducts.propTypes = {
    data: PropTypes.object.isRequired
}

export default MainProducts
