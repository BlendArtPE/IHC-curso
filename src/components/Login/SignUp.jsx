import { useState } from "react";
import { Link } from "react-router-dom";
import enterNames from "../../../public/audios/enterNames.mp3"
import email from "../../../public/audios/email.mp3"
import enterLastNames from "../../../public/audios/enterLastNames.mp3"
import enterPasswords from "../../../public/audios/enterPasswords.mp3"
import enterPhone from "../../../public/audios/enterPhone.mp3"
import registerUser from "../../../public/audios/registerUser.mp3"
import haveUser from "../../../public/audios/haveUser.mp3"
import loginGoogle from "../../../public/audios/loginGoogle.mp3"
import loginFacebook from "../../../public/audios/loginFacebook.mp3"

const SignUp = () => {
    const [safe, setSafe] = useState(true)

    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.play();
    };


    return (
      <section className="xl:mt-20 lg:mt-20 md:mt-10 mt-20 xl:h-screen lg:h-auto md:h-screen bg-[#F9F9F9] flex">
        <div className="flex-1 lg:flex hidden">
            <img src="./tech.webp" alt="" className="h-full" />
        </div>
        <form className="flex-1 flex justify-center items-center mt-8 mb-4">
            <div className="md:w-3/5 sm:w-4/5 w-5/6 flex flex-col ">
                <h1 className="text-center text-4xl font-semibold mb-2">Regístrate</h1>
                
                <div className="flex gap-3">
                    <div className="w-full">
                        <h3 className="text-xl mb-2">Nombres</h3>
                        <input type="text" name="" className="p-2 mb-4 w-full text-sm border-2 rounded-md" placeholder="Ingresas tus nombres" id="" onFocus={() => {playSound(enterNames)}} />
                    </div>
                    <div className="w-full">
                        <h3 className="text-xl mb-2">Apellidos</h3>
                        <input type="text" name="" className="p-2 mb-4 w-full text-sm border-2 rounded-md" placeholder="Ingresa tus apellidos" id="" onFocus={() => {playSound(enterLastNames)}} />
                    </div>
                </div>

                <h3 className="text-xl mb-2">Correo electrónico</h3>
                <input type="text" name="" className="p-2 mb-4 w-full text-sm border-2 rounded-md" placeholder="Ingresa tu correo electrónico" id="" onFocus={() => {playSound(email)}} />

                <h3 className="text-xl mb-2">Contraseña</h3>
                <div className="relative">
                    <input type={safe ? "password" : "text"} name="" className="p-2 mb-4 w-full text-sm border-2 rounded-md" placeholder="Ingresa tu contraseña" id="" onFocus={() => {playSound(enterPasswords)}} />
                    <i onClick={() => setSafe(!safe)} className={`absolute inset-y-1/4 right-4 fa-regular ${safe ? "fa-eye-slash" : "fa-eye"}`}></i>
                </div>


                <h3 className="text-xl mb-2">Teléfono</h3>
                <input type="text" name="" className="p-2 mb-4 w-full text-sm border-2 rounded-md" placeholder="Ingresa tu teléfono" id="" onFocus={() => {playSound(enterPhone)}} />
                
                {/* <div className="flex justify-between items-center text-sm">
                    <div className="flex gap-1">
                        <input type="checkbox" name="" id="" />
                        <p>Recuérdame</p>
                    </div>
                    <a className="text-sky-500">¿Olvidaste tu contraseña?</a>
                </div> */}

                <Link to="/signin" onFocus={() => {playSound(registerUser)}} className="w-full py-2 text-center my-2 bg-black rounded-md text-white">Registrar</Link>

                <p className="text-center">¿Tienes una cuenta? <Link className="text-sky-500 hover:underline underline-offset-4" to="/signin" onFocus={() => {playSound(haveUser)}} >Ingresa</Link></p>

                <div className="flex items-center my-4">
                    <hr className="w-full"/>
                    <p className="px-2">O</p>
                    <hr className="w-full"/>
                </div>

                <div className="flex gap-2">
                    <button onFocus={() => {playSound(loginGoogle)}} className="flex gap-2 py-1 border-2 rounded-md items-center w-full justify-center">
                        <img src="./google.svg" className="h-8" alt="" />
                        <p>Google</p>
                    </button>

                    <button onFocus={() => {playSound(loginFacebook)}} className="flex gap-2 py-1 border-2 rounded-md items-center w-full justify-center">
                        <img src="./fb.svg" className="h-8" alt="" />
                        <p>Facebook</p>
                    </button>
                </div>
            </div>
        </form>
      </section>
    )
  }
  
  export default SignUp
  