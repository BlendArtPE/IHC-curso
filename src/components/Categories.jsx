import PropTypes from 'prop-types'

const Categories = ({data}) => {
    
  return (
    <section className='max-w-screen-xl space-y-4 mx-auto '>
        <h1 className='text-center text-2xl font-bold'>{data.title}</h1>
        <div className='grid grid-cols-7'>
            {
                data.options.map((category, index) => {
                    return (
                        <article className='flex flex-col justify-center items-center gap-2' key={index} >
                            <img 
                                src="./categories/mando.webp"
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
