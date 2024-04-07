const Product = () => {
  return (
    <section className="mt-24 mx-auto max-w-screen-lg border grid grid-cols-2 gap-10">
        <article className="flex flex-col justify-center ">
            <div className="flex justify-between mb-4">
                <h1 className="text-4xl font-bold">Mando PS5</h1>
                <i className="fa-regular fa-heart"></i>
            </div>
            <p className="mb-4" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad...</p>
            <div className=" grid grid-cols-2 gap-4">
                <div className=" flex flex-col justify-between gap-4">
                    <h4>S/.140</h4>
                    <div className="flex gap-4 *:w-6 *:h-6 *:rounded-full" >
                        <button className="bg-black" ></button>
                        <button className="bg-red-500" ></button>
                        <button className="bg-green-500" ></button>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="w-8 h-8 bg-gray-400 rounded-md">-</button>
                        <span>10</span>
                        <button className="w-8 h-8 bg-gray-400 rounded-md">+</button>
                    </div>
                    <button className="py-2 rounded-full bg-gray-400">Comprar Ahora</button>
                </div>
                <div className="flex flex-col justify-between">
                    <p className="text-end text-sm">Número de compras: 300</p>
                    <select className="text-end" name="" id="">
                        <option value="">Método de compra</option>
                        <option value="">A</option>
                        <option value="">B</option>
                        <option value="">C</option>
                        <option value="">D</option>
                    </select>
                    <button className="py-2 rounded-full bg-gray-400">Agregar al carrito</button>
                </div>
            </div>
        </article>
        <div className="border">
            <img src="./categories/mando.webp" alt="" />
        </div>
    </section>
  )
}

export default Product
