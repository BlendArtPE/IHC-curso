import PropTypes from 'prop-types'

const Services = ({data}) => {
    
  return (
    <section className='bg-color-1'>
        <div className='mx-auto xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm grid lg:grid-cols-4 grid-cols-2 text-white py-8 gap-8 px-4'>
            {data.options.map((option, index) => {
                return (
                    <div key={index}>
                        <h4 className='font-semibold mb-4'>{option.title}</h4>
                        <ul className='space-y-2'>
                            {option.subOptions.map((subOption, index) => {
                                return (
                                    <li className='text-sm' key={index}>{subOption}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
        
    </section>
  )
}

Services.propTypes = {
    data: PropTypes.object.isRequired
}

export default Services
