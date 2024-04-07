const Price = () => {
  return (
    <section className="space-y-2" >
      <div className="flex justify-between">
        <p>Artículos</p>
        <div className="flex items-center">
            <p>S/.100.00</p>
            <i className="fa-solid fa-tag"></i>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Envío estimado</p>
        <div className="flex items-center">
            <p>S/.100.00</p>
            <i className="fa-solid fa-tag"></i>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Total</p>
        <div className="flex items-center">
            <p>S/.100.00</p>
        </div>
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="" id="" />
        <p className="text-center">Estoy de acuerdo con los <a href="">Términos y condiciones </a></p>
        
      </div>
      <a href="" className="flex justify-center py-1 bg-green-300 rounded-full">COMPRAR</a>
    </section>
  )
}

export default Price
