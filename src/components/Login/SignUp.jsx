const SignUp = () => {
    return (
      <section className="mt-32 mb-20 flex justify-center items-center">
        <form className=" mx-auto max-w-md w-full flex flex-col gap-2 bg-gray-200 p-8 rounded-2xl">
            <div className="flex flex-col items-center ">
                <h1 className="text-4xl font-semibold">Crear tu cuenta</h1>
                <img src="./perfil.png" className="mb-8 mt-4 rounded-full w-32" alt="" />
            </div>
            <label htmlFor="" className="flex flex-col gap-1">
                <span className="text-sm font-semibold">Nombre Completo</span>
                <input className="outline-none bg-transparent border-b-gray-500 border-2 text-gray-500 " type="text" required/>
            </label>
            <label htmlFor="" className="flex flex-col gap-1">
                <span className="text-sm font-semibold">Correo Electrónico</span>
                <input className="outline-none bg-transparent border-b-gray-500 border-2 text-gray-500 " type="email" required/>
            </label>
            <label htmlFor="" className="flex flex-col gap-1">
                <span className="text-sm font-semibold">Contraseña</span>
                <input className="outline-none bg-transparent border-b-gray-500 border-2 text-gray-500 " type="password" required/>
            </label>
            <label htmlFor="" className="flex flex-col gap-1">
                <span className="text-sm font-semibold">Confirmar contraseña</span>
                <input className="outline-none bg-transparent border-b-gray-500 border-2 text-gray-500 " type="password" required/>
            </label>
            <div className="flex items-center gap-2 text-sm mt-4 mb-2">
                <input type="checkbox" name="" id="" />
                <p className="text-center">Estoy de acuerdo con los <a href="" className="text-sky-600 hover:underline">Términos y condiciones </a></p>
            </div>
            <button type="submit" className="bg-sky-400 text-white py-2 rounded-full">Crear cuenta</button>
        </form>
      </section>
    )
  }
  
  export default SignUp
  