import PropTypes from 'prop-types'

const Footer = ({data}) => {
    console.log(data)
  return (
    <footer className='bg-color-1'>
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
        <div className='bg-color-4'>
            <div className='mx-auto xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm
             flex lg:flex-row flex-col gap-4 justify-between items-center p-4'>
                <div className='flex gap-4'>
                    {data.icons.map((icon, index) => {
                        return (
                            <div key={index} className='text-color-2 rounded-full text-lg '><i className={icon.logo}  /></div>
                        )
                    })}
                </div>
                <div className='flex flex-row flex-wrap gap-x-12 gap-y-4 justify-center text-white font-medium'>
                    {data.extras.map((extra, index) => {
                        return (
                            <p key={index}>{extra}</p>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='bg-color-4'>
            <div className='mx-auto xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm text-xs text-white font-semibold px-4'>
                <hr />
                <p className='py-4'>{data.copyright}</p>
            </div>
        </div>
    </footer>
  )
}

Footer.propTypes = {
    data: PropTypes.object.isRequired
}

export default Footer
