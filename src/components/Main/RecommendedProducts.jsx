import PropTypes from 'prop-types'

const RecommendedProducts = ({data}) => {
  console.log(data)
    return (
    <section className='mx-auto max-w-screen-lg lg:px-4 md:px-20 px-10'>
        <h2 className="text-center text-2xl font-bold mb-8">{data.title}</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
            {data.products.map((product, index) => {
                return (
                    <article key={index} className='group flex flex-col justify-evenly items-center text-center rounded-2xl bg-color-3 shadow-color-sombra shadow-sm h-[23rem] p-4'>
                        <img src={product.image} className='w-32 group-hover:scale-110' alt="" />
                        <h3 className='text-xl font-bold'>{product.title}</h3>
                        {/* <p>{product.stars} estrellas</p> */}
                            <p className='text-3xl font-semibold mb-2'>{product.price}</p>
                        
                            <p className='text-xs mb-2'>{product.text}</p>
                        <a href="" className='bg-black text-white w-full rounded-full py-1 font-semibold'>{product.button}</a>
                    </article>
                )
            })}
        </div>
    </section>
  )
}

RecommendedProducts.propTypes = {
    data: PropTypes.object.isRequired
}

export default RecommendedProducts
