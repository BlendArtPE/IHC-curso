const SignIn = () => {
    return (
      <section className="mt-32 mb-20 flex justify-center items-center">
        <form className=" mx-auto max-w-md w-full flex flex-col gap-2 bg-gray-200 p-8 rounded-3xl">
            <div className="flex flex-col items-center ">
                <h1 className="text-4xl font-semibold">Iniciar sesión</h1>
                <img src="./perfil.png" className="mb-8 mt-4 rounded-full w-32" alt="" />
            </div>
            <label htmlFor="" className="flex flex-col gap-1">
                <span className="font-semibold">Correo Electrónico</span>
                <input className="outline-none bg-transparent border-b-black border-2 text-gray-500 " type="email" required/>
            </label>
            <label htmlFor="" className="flex flex-col gap-1">
                <span className="font-semibold">Contraseña</span>
                <input className="outline-none bg-transparent border-b-black border-2 text-gray-500 " type="password" required/>
            </label>
            <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <p className="text-center">No cerrar sesión</p>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="w-full transition-all duration-500 bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 rounded-full">Iniciar sesión</button>
            </div>
            <a href="" className="text-center underline my-2">Crear cuenta</a>
            <div className="space-y-2">
                <button className="w-full flex items-center p-1 bg-gray-400 hover:bg-gray-500 transition duration-200 font-semibold rounded-full text-white">
                    <img src="./google.svg" className="w-8 bg-white rounded-full" alt="" />
                    <span className="w-full text-center">Iniciar sesión con Google</span>
                </button>
                <button className="w-full flex items-center p-1 bg-gray-400 hover:bg-gray-500 transition duration-200 font-semibold rounded-full text-white">
                    <img src="./fb.svg" className="w-8 bg-white rounded-full" alt="" />
                    <span className="w-full text-center">Iniciar sesión con Facebook</span>
                </button>
            </div>
        </form>
      </section>
    )
  }
  
  export default SignIn
  