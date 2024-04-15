import React from 'react';
import PropTypes from 'prop-types';

const SubOrder = ({ state, nameState }) => {
    // Función para calcular el color basado en el estado
    const getColor = () => {
        let color = '';

        // Condiciones para establecer el color
        if (state === "canceled") {
            color = "bg-red-500";
        } else if (state === "received") {
            color = "bg-green-500";
        } else if (state === "waited") {
            color = "bg-yellow-500";
        } else {
            color = "gray";
        }

        return color;
    };

    return (
        <article className='w-full flex flex-row items-center bg-color-3 rounded-3xl p-4'>
            <img src="./categories/mando.webp" className="md:w-1/5 w-1/5 aspect-square rounded-2xl flex" alt="" />
            <div className='w-4/5 md:flex hidden flex-col justify-center bg-red gap-4'>
                <div className='flex '>
                    <p className='w-2/4 px-2 pl-6 text-xl font-semibold'>Mando Playstation 5</p>
                    <p className='w-1/4 px-2 text-lg text-center font-semibold'>Cantidad</p>
                    <p className='w-1/4 px-2 text-lg text-center font-semibold'>Estado</p>
                </div>
                <div className='flex'>
                    <p className='w-2/4 px-2 pl-6'>s./ 139.00</p>
                    <p className='w-1/4 px-2 text-center'>1</p>
                    <p className='w-1/4 px-2 text-center'>
                        {/* Aplicar el color dinámico al span */}
                        <span className={`w-auto text-white ${getColor()} py-1 px-3 rounded-full`}>
                            {nameState}
                        </span>
                    </p>
                </div>
            </div>

            <div className='w-4/5 md:hidden flex flex-col justify-center bg-red'>
                    <p className=' px-2 pl-6 text-xl font-semibold'>Mando Playstation 5</p>
                    <p className=' px-2 pl-6'>s./ 139.00</p>
                <div className='flex flex-row justify-between'>
                    <p className='px-2 pl-6 text-lg text-center font-semibold'>Cantidad</p>
                    <p className='px-2'>1</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='px-2 pl-6 text-lg text-center font-semibold'>Estado</p>
                    <p className='px-2 text-center'>
                        {/* Aplicar el color dinámico al span */}
                        <span className={`w-auto text-white ${getColor()} py-1 px-3 rounded-full`}>
                            {nameState}
                        </span>
                    </p>
                </div>
            </div>
        </article>
    );
};

SubOrder.propTypes = {
    state: PropTypes.string.isRequired,
    nameState: PropTypes.string.isRequired,
};

export default SubOrder;
