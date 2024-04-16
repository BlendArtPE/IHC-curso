import { useState } from "react"

const Product = () => {
    const [heart, setHearth] = useState(false)
  return (
    <section className="mt-24 mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm  max-w-sm sm:px-0 px-4 grid lg:grid-cols-2 grid-cols-1 gap-10">
        <article className="flex flex-col justify-center lg:order-1 order-3">
            <div className="flex flex-col mb-4">
                <p className="text-base">APPLE</p>
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">iPhone 15 128GB</h1>
                    <i  onClick={() => setHearth(!heart)} className={`${heart ? "fa-solid" : "fa-regular"} hover:scale-110 hover:text-red-600 transition-all duration-150 fa-heart text-2xl`}></i>
                </div>
            </div>
            <p className="mb-4" >Experimenta la cúspide de la innovación con el iPhone 15 Pro Max. Equipado con eSIM, ofrece conectividad avanzada.</p>
            <div className=" grid grid-cols-2 gap-4">
                <div className=" flex flex-col justify-between gap-4">
                    <h4 className="font-semibold text-2xl">S/.6,299.00</h4>
                    <div className="flex gap-4 *:w-6 *:h-6 *:rounded-full" >
                        <button className="border-[1px] border-black bg-red-500 hover:bg-color-rojoh" ></button>
                        <button className="border-[1px] border-black bg-white hover:bg-gray-200" ></button>
                        <button className="border-[1px] border-black bg-black hover:bg-gray-800" ></button>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="w-8 h-8 bg-color-rojoc hover:bg-color-rojoh rounded-md shadow-md">
                            <i className="fa-solid fa-minus text-color-2"></i>
                        </button>
                        <span className="w-4 font-medium text-xl">10</span>
                        <button className="w-8 h-8 bg-color-rojoc hover:bg-color-rojoh rounded-md shadow-md">
                            <i className="fa-solid fa-plus text-color-2"></i>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <p className="text-end text-sm">Número de compras: 300</p>
                    {/* <select className="text-start p-1 rounded-full border-2 border-color-1 w-[11.5rem] " name="" id="">
                        <option  value="">Método de compra</option>
                        <option  value="">A</option>
                        <option  value="">B</option>
                        <option  value="">C</option>
                        <option  value="">D</option>
                    </select> */}
                </div>
                <button className="py-2 mt-4 rounded-full bg-color-rojoc hover:bg-color-rojoh text-color-2 font-semibold shadow-md hover:scale-105">Comprar Ahora</button>
                <button className="py-2 mt-4 rounded-full border-2 border-color-1 font-semibold hover:bg-color-3 shadow-md hover:scale-105">Agregar al carrito</button>
            </div>
        </article>
        <div className="border order-2">
            <img src="./categories/mando.webp" alt="" />
        </div>
    </section>
  )
}

export default Product
