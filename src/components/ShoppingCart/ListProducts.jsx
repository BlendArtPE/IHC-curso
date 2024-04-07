const ListProducts = () => {
  return (
    <div className="col-span-3 ">
        <article className="grid grid-cols-6 border text-center">
            <h1 className="col-span-3 text-start">Cesta de compra</h1>
            <h3>Precio</h3>
            <h3>Cantidad</h3>
            <h3>Subtotal</h3>
        </article>
        <article className="grid grid-cols-6 border items-center text-center mt-4">
            <div className="col-span-3 flex items-center gap-4">
                <img src="./categories/mando.webp" className="w-32" alt="" />
                <p className="text-start">Mando Playstation 5 Dualsense Edge</p>
            </div>
            <h3 className="text-center">S/ 1,099.00</h3>
            <div className="flex justify-center items-center gap-4">
                <button className="w-8 h-8 bg-gray-400 rounded-full">-</button>
                <span>10</span>
                <button className="w-8 h-8 bg-gray-400 rounded-full">+</button>
            </div>
            <h3 className="text-center">S/ 1,099.00</h3>
        </article>
        
    </div>
  )
}

export default ListProducts
