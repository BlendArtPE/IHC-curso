import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [safe, setSafe] = useState(true)
    
    return (
      <section className="xl:mt-20 mt-10 h-screen  bg-[#F9F9F9] flex">
        <div className="flex-1 lg:flex hidden">
            <img src="./tech.webp" alt="" className="h-screen" />
        </div>
        <form className="flex-1  flex justify-center items-center  my-6">
            <div className="md:w-3/5 sm:w-4/5 w-5/6 flex flex-col ">
                <h1 className="text-center text-4xl font-semibold mb-2">Iniciar Sesión</h1>
                <p className="text-sm  mb-4">Ingresa tu correo y contraseña para acceder a tu cuenta</p>

                <h3 className="text-xl mb-2">Correo electrónico</h3>
                <input type="text" name="" className="p-2 mb-4 w-full text-sm border-2 rounded-md" placeholder="Ingresa tu correo" id="" />

                <h3 className="text-xl mb-2">Contraseña</h3>
                <div className="relative">
                    <input type={safe ? "password" : "text"} name="" className="p-2 mb-4 w-full text-sm border-2 rounded-md" placeholder="Ingresa tu contraseña" id="" />
                    <i onClick={() => setSafe(!safe)} className={`absolute inset-y-1/4 right-4 fa-regular ${safe ? "fa-eye-slash" : "fa-eye"}`}></i>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                    <div className="flex gap-1">
                        <input type="checkbox" name="" id="" />
                        <p>Recuérdame</p>
                    </div>
                    <a className="text-sky-500">¿Olvidaste tu contraseña?</a>
                </div>

                <button type="submit" className="w-full py-2 my-2 bg-black rounded-md text-white">Ingresar</button>

                <p className="text-center">¿No tienes una cuenta? <Link className="text-sky-500 hover:underline underline-offset-4" to="/signup">Regístrate</Link></p>

                <div className="flex items-center my-4">
                    <hr className="w-full"/>
                    <p className="px-2">O</p>
                    <hr className="w-full"/>
                </div>

                <div className="flex gap-2">
                    <button className="flex gap-2 py-1 border-2 rounded-md items-center w-full justify-center">
                        <img src="./google.svg" className="h-8" alt="" />
                        <p>Google</p>
                    </button>

                    <button className="flex gap-2 py-1 border-2 rounded-md items-center w-full justify-center">
                        <img src="./fb.svg" className="h-8" alt="" />
                        <p>Facebook</p>
                    </button>
                </div>
            </div>
        </form>
      </section>
    )
  }
  
  export default SignIn
  