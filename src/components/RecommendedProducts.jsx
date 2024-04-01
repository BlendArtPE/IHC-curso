import PropTypes from 'prop-types'

const RecommendedProducts = ({data}) => {
  console.log(data)
    return (
    <section className='mx-auto max-w-screen-lg'>
        <h2 className="text-center text-2xl font-bold mb-8">{data.title}</h2>
        <div className='grid grid-cols-4 gap-4'>
            {data.products.map((product, index) => {
                return (
                    <article key={index} className='flex flex-col justify-around items-center text-center rounded-2xl bg-slate-300 h-[26rem] p-4'>
                        <img src={product.image} className='w-32' alt="" />
                        <h3>{product.title}</h3>
                        <p>{product.stars} estrellas</p>
                        <div>
                            <p>{product.price}</p>
                            <p >{product.text}</p>
                        </div>
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
