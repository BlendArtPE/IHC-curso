import PropTypes from 'prop-types'

const Footer = ({data}) => {
    console.log(data)
  return (
    <footer className='bg-sky-800'>
        <div className='mx-auto max-w-screen-lg grid grid-cols-4 text-white py-4'>
            {data.options.map((option, index) => {
                return (
                    <div key={index}>
                        <h4 className='font-semibold mb-4'>{option.title}</h4>
                        <ul>
                            {option.subOptions.map((subOption, index) => {
                                return (
                                    <li key={index}>{subOption}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
        <div className='bg-indigo-800'>
            <div className='mx-auto max-w-screen-lg flex justify-between items-center py-3'>
                <div className='flex gap-4'>
                    {data.icons.map((icon, index) => {
                        return (
                            <div key={index} className='bg-white px-2 py-1 rounded-full text-2xl'><i className={icon.logo}  /></div>
                        )
                    })}
                </div>
                <div className='flex gap-4 text-white'>
                    {data.extras.map((extra, index) => {
                        return (
                            <p key={index}>{extra}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    </footer>
  )
}

Footer.propTypes = {
    data: PropTypes.object.isRequired
}

export default Footer
