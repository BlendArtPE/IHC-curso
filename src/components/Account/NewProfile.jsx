const NewProfile = () => {
  return (
    <section className="mx-auto h-[30rem] mt-20 max-w-screen-lg flex gap-4 mb-10">
      <div className="w-3/12 flex flex-col items-center bg-color-1 text-white rounded-b-2xl">
        <img
          src="./perfil.png"
          className="w-28 mt-8 mb-4 rounded-full"
          alt=""
        />
        <p className="text-lg font-semibold">Jesús Daniel</p>
        <p className="text-lg font-semibold mb-2">Chuquillanqui Sevillano</p>
        <button className="w-full border-l-8 py-2 hover:border-blue-500 border-transparent transition-all duration-200 hover:bg-color-7 flex justify-center">
          <div className="w-36 space-x-3 text-start">
            <i className="fa-solid fa-user"></i>
            <span>Mi perfil</span>
          </div>
        </button>
        <button className="w-full border-l-8 py-2 hover:border-blue-500 border-transparent transition-all duration-200 hover:bg-color-7 flex justify-center">
          <div className="w-36 space-x-2 text-start">
            <i className="fa-solid fa-truck"></i>
            <span>Mis pedidos</span>
          </div>
        </button>
        <button className="w-full border-l-8 py-2 hover:border-blue-500 border-transparent transition-all duration-200 hover:bg-color-7 flex justify-center">
          <div className="w-36 space-x-3 text-start">
            <i className="fa-solid fa-heart"></i>
            <span>Mis favoritos</span>
          </div>
        </button>
        <button className="w-full border-l-8 py-2 hover:border-blue-500 border-transparent transition-all duration-200 hover:bg-color-7 flex justify-center">
          <div className="w-36 space-x-3 text-start">
            <i className="fa-solid fa-gear"></i>
            <span>Configuración</span>
          </div>
        </button>

        <button className="space-x-4 bg-red-600 hover:bg-red-500 p-3 rounded-xl mt-3">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span>Cerrar sesión</span>
        </button>
      </div>
      <article className="w-9/12 rounded-b-2xl px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-medium">Datos Personales</h1>
          <button className="bg-sky-500 px-3 py-2 rounded-lg">
            <i className="fa-solid fa-pen text-white text-sm"></i>
          </button>
        </div>
        <div className="flex gap-3">
          <div className="w-full">
            <h3>Nombres</h3>
            <input type="text" className="border-b border-black w-full" name="" id="" />
          </div>
          <div className="w-full">
            <h3>Nombres</h3>
            <input type="text" className="border-b border-black w-full" name="" id="" />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-full">
            <h3>Email</h3>
            <input type="text" className="border-b border-black w-full" name="" id="" />
          </div>
          <div className="w-full">
            <h3>Teléfono</h3>
            <input type="text" className="border-b border-black w-full" name="" id="" />
          </div>
        </div>

        <div className="w-full">
            <h3>Contraseña</h3>
            <input type="text" className="border-b border-black w-full" name="" id="" />
          </div>

          <div className="w-full">
            <h3>Dirección</h3>
            <input type="text" className="border-b border-black w-full" name="" id="" />
          </div>
      </article>
    </section>
  );
};

export default NewProfile;
