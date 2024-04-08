import PropTypes from 'prop-types'

const Categories = ({data}) => {
    
  return (
    <section className='mx-auto xl:max-w-screen-lg max-w-screen-sm space-y-8 '>
        <h1 className=' text-2xl font-semibold md:text-start text-center'>{data.title}</h1>
        <div className='flex flex-row flex-wrap justify-center gap-10 gap-y-6'>
            {
                data.options.map((category, index) => {
                    return (
                        <article className='w-40 p-4 aspect-square rounded-full bg-color-3 shadow-md shadow-color-sombra flex flex-col justify-center items-center hover:scale-110 transition-all duration-20000' key={index} >
                            <img 
                                src={category.image}
                                className='w-28 rounded-full'
                                alt="Mando" />
                            <p className='font-semibold'>{category.name}</p>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

Categories.propTypes = {
    data: PropTypes.object.isRequired
}

export default Categories
