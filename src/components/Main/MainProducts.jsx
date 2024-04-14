import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MainProducts = ({data}) => {
  return (
    <div className='space-y-4'>
        {data.map((products, index) => {
            return (
                <section key={index} className='relative text-center'>
                    <img className='lg:block hidden w-screen' src={products.options[0].image} alt="" />
                    <img className='lg:hidden block w-screen' src={products.options[0].imageMB} alt="" />
                    
                    <div className={`lg:block hidden  absolute inset-y-1/3 ${index % 2 === 0 ? "right-20" : "left-20"} w-72 text-white`}>
                        {products.options.map((option, index) => {
                            return (
                                <div key={index} className=' space-y-2'>
                                    <h3 className='text-3xl font-bold'>{option.title}</h3>
                                    <div className='flex justify-right'>
                                        {/* <strong>{option.subTitle}</strong> */}
                                        <p>{option.text}</p>
                                    </div>
                                    <div className="flex justify-center  items-center gap-4">
                                        <a href="" className="font-semibold underline underline-offset-4">{option.buttons[0]}</a>
                                        <Link to="/product"><a href="" className="bg-color-2 text-black font-bold rounded-full px-4 py-1">{option.buttons[1]}</a></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                    <div className={`lg:hidden absolute md:bottom-24 bottom-4 flex justify-center w-full ${index % 2 === 0 ? "lg:right-20" : "lg:left-20"} w-72 text-white`}>
                        {products.options.map((option, index) => {
                            return (
                                <div key={index} className='w-96 space-y-2'>
                                    <h3 className='text-3xl font-bold'>{option.title}</h3>
                                    <div className='flex justify-right'>
                                        {/* <strong>{option.subTitle}</strong> */}
                                        <p>{option.text}</p>
                                    </div>
                                    <div className="flex justify-center  items-center gap-4">
                                        <a href="" className="font-semibold underline underline-offset-4">{option.buttons[0]}</a>
                                        <Link to="/product"><a href="" className="bg-color-2 text-black font-bold rounded-full px-4 py-1">{option.buttons[1]}</a></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            )
        })}
    </div>
  )
}


{/* <div className='absolute inset-x-0 top-8 space-y-4'>
                        <h3 className='text-3xl font-bold'>{products.title}</h3>
                        <ul className='flex justify-center gap-6 font-semibold'>
                            {products.categories.map((categorie, index) => {
                                return (
                                    <li key={index}>{categorie}</li>
                                )
                            })}
                        </ul>
                    </div> */}

MainProducts.propTypes = {
    data: PropTypes.object.isRequired
}

export default MainProducts
