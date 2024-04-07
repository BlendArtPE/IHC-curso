import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-row gap-10 h-[800px]'>
        <div className='flex flex-col w-1/4 rounded-2xl mt-20'>
            <div className='h-40 w-40 flex bg-cyan-300 rounded-full items-center justify-center mx-auto'>
                Foto
            </div>
            <p className='mt-4 flex justify-center'>Nombre Apellido</p>
            <div>
                <ul className='text-center mt-10'>
                    <hr className='bg-black w-48 mx-auto'/>
                    <li className='mt-3 mb-3'>
                        Opcion 1
                    </li>
                    <hr className='bg-black w-48 mx-auto'/>
                    <li className='mt-3 mb-3'>
                        Opcion 1 
                    </li>
                    <hr className='bg-black w-48 mx-auto'/>
                    <li className='mt-3 mb-3'>
                        Opcion 1
                    </li>
                    <hr className='bg-black w-48 mx-auto'/>
                    <li className='mt-3 mb-3'>
                        Opcion 1 
                    </li>
                    <hr className='bg-black w-48 mx-auto'/>
                </ul>
            </div>
        </div>
        <div className='bg-red-500 grid place-content-center rounded-2xl text-white w-2/3'>
            Texto
        </div>
    </div>
  )
}

export default Profile
