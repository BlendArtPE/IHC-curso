const Specifications = () => {
  const specifications = [
    ["Marca", "Apple"],
    ["Memoria interna", "128 GB"],
    ["Memoria RAM", "6 GB"],
    ["Tipo de conector de carga", "USB-C"],
    ["Red móvil", "5G"],
    ["Con Bluetooth", "Sí"],
    ["Con NFC", "Sí"],
    ["Resolución de la cámara trasera principal", "48 Mpx"],
  ]
  return (
    <section className="flex-1 ">
        <h3 className="mb-4 text-lg font-semibold">Especificaciones</h3>
      <ul className="grid grid-cols-5 bg-color-3 border rounded-md border-color-9">
        {
          specifications.map((property, index) => {
            return (
              <li key={index} className={`col-span-5 grid grid-cols-5 *:flex items-center first:rounded-t-md last:rounded-b-md ${index % 2 === 0 ? "bg-color-3" : "bg-color-2"} px-4 py-2`}>
                  <p className="col-span-2 font-medium">{property[0]}</p>
                  <p className="col-span-3 pl-8">{property[1]}</p>
              </li>
            )
          } )
        }
      </ul>
    </section>
  )
}

export default Specifications
