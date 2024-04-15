import { useState } from "react"

const Price = () => {
  const [card, setCard] = useState("")

  const handleClick = (event, cardType) => {
    event.preventDefault(); // Evita la recarga de la página
    setCard(cardType);
  };

  return (
    <form className="lg:col-span-2 col-span-6 space-y-2 px-4 lg:border-l-2 border-black" >
      <h3 className="text-lg font-semibold">Detalles de la tarjeta</h3>
      <p>Tipo de tarjeta</p>
      <div className="flex justify-center gap-2 *:w-14 ">
        <button onClick={(event) => handleClick(event,"1")}><img className={`transition-all duration-500 grayscale hover:grayscale-0 ${card === "1" ? "grayscale-0" : ""}`} src="./logos/visa.jpg" alt="" /></button>
        <button onClick={(event) => handleClick(event,"2")}><img className={`transition-all duration-500 grayscale hover:grayscale-0 ${card === "2" ? "grayscale-0" : ""}`} src="./logos/mastercard.jpg" alt="" /></button>
        <button onClick={(event) => handleClick(event,"3")}><img className={`transition-all duration-500 grayscale hover:grayscale-0 ${card === "3" ? "grayscale-0" : ""}`} src="./logos/paypal.webp" alt="" /></button>
        <button onClick={(event) => handleClick(event,"4")}><img className={`transition-all duration-500 grayscale hover:grayscale-0 ${card === "4" ? "grayscale-0" : ""}`} src="./logos/amer.webp" alt="" /></button>
      </div>
      <span>
        <h4 className="font-medium text-base">Nombre de propietario</h4>
        <input className="my-2 border border-black rounded-md p-2 shadow-sm shadow-neutral-600 w-full " type="text" placeholder="Nombre completo" name="" id="" />
      </span>
      <span>
        <h4 className="font-medium text-base">Número de la tarjeta</h4>
        <input className="my-2 border border-black rounded-md p-2 shadow-sm shadow-neutral-600 w-full" type="text" placeholder="Número de la tarjeta" name="" id="" />
      </span>
      <h4 className="font-medium text-base">Fecha de caducidad y código de seguridad</h4>
      <div className="w-full gap-1 flex flex-row my-2">
        <div className="flex w-3/5">
          <input type="number" min={1} max={12} className=" border border-black rounded-md px-2 shadow-sm shadow-neutral-600 w-full" placeholder="Mes" />
          <p className="text-2xl px-1">/</p>
          <input type="number" min={2020} max={2030} className=" border border-black rounded-md px-2 shadow-sm shadow-neutral-600 w-full" placeholder="Año" />
        </div>
        <input className="border border-black rounded-md p-2 shadow-sm shadow-neutral-600 w-2/5" type="text" placeholder="Código CVV" name="" id="" />
      </div>
      <h3 className="text-lg font-semibold">Detalles del total</h3>
      <ul>
        <li className="flex justify-between"><p>Total</p> <p>S/. 417.00</p></li>
        <li className="flex justify-between"><p>Descuento</p> <p>S/. 17.00</p></li>
        <li className="flex justify-between"><p>Cargos por Entrega</p> <p>S/. 17.00</p></li>
      </ul>
      <hr />
      <div className="flex justify-between">
        <h4 className="text-lg font-semibold">Total</h4>
        <h4>S/. 417.00</h4>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" name="" id="" />
        <p className="text-start text-xs">Estoy de acuerdo con los <a href="" className="text-[#00B0FC] hover:underline">Términos y condiciones </a></p>
        
      </div>
      <a href="" className="flex justify-center bg-color-5 hover:bg-color-6 text-white py-2 rounded-lg font-semibold">Realizar pago</a>
    </form>
  )
}

export default Price
