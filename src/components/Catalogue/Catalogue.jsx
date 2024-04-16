import React, { useState } from 'react'
import ProductCatalogue from './ProductCatalogue';


const Catalogue = () => {
    const filters = [
        { name: "Marca", properties: ["Samsung", "Xiaomi", "Apple"] },
        { name: "Color", properties: ["Rojo", "Amarillo", "Verde", "Negro"] },
        { name: "Procesador", properties: ["Intel", "AMD", "Snapdragon"] },
        { name: "Precio", properties: ["0-100", "100-200", "200-300", "300+"] },
        { name: "Serie", properties: ["Serie A", "Serie B", "Serie C"] },
        { name: "Oferta", properties: ["Descuento", "Promoción", "Oferta del día"] },
        { name: "Conectividad", properties: ["WiFi", "Bluetooth", "4G", "5G"] },
        { name: "Peso", properties: ["<100g", "100-200g", "200-300g", "300g+"] },
        { name: "Disponibilidad", properties: ["En stock", "Fuera de stock"] },
    ];

    const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className='mt-20 w-full gap-4 flex flex-row justify-center relative'>
      <div className={`w-4/12 ${visible ? "flex" : "hidden"} flex-col items-center bg-color-7 text-color-2 pt-4`}>
        {
            filters.map((filter, index) => {
                return (
                    <div key={index} className='border-b w-full flex justify-center mx-4' >
                    <details  className='py-2 w-40 '>
                        <summary className='text-start text-lg font-medium'>{filter.name}</summary>
                        <div>
                            {
                                filter.properties.map((property, index) => {
                                    return (
                                        <div key={index} className='space-x-2 my-2'>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">{property}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </details>
                    </div>
                )
            })
        }
      </div>
      <div className={`${visible ? "w-8/12" : "w-full"} space-y-4 my-4 relative`}>
            <button onClick={toggleVisibility} className='absolute left-4 bg-color-1 text-color-2 px-2 py-1 rounded-lg'>
                <i className="fa-solid fa-bars-staggered"></i>
            </button>
            <ProductCatalogue />
            <ProductCatalogue />
            <ProductCatalogue />
            <ProductCatalogue />
      </div>
    </div>
  )
}

export default Catalogue
