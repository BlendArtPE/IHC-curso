const NewProfile = () => {
  return (
    <section className="mx-auto h-screen mt-32 max-w-screen-md">
      <div className="w-1/4 flex flex-col items-center">
          <img src="./perfil.png" className="w-20 rounded-full" alt="" />
          <p>Jesús Daniel</p>
          <p>Chuquillanqui Sevillano</p>
          <button className="flex justify-between w-full">
            <i className="fa-regular fa-user"></i>
            <span>Mi perfil</span>
          </button>
          <button>
            <i className="fa-solid fa-truck"></i>
            <span>Mis pedidos</span>
            </button>
          <button>
            <i className="fa-regular fa-heart"></i>
            <span>Mis favoritos</span>
            </button>
          <button>
            <i className="fa-solid fa-gear"></i>
            <span>Configuración</span>
            </button>
      </div>
      <article className="w-3/4">
        
      </article>
    </section>
  )
}

export default NewProfile
