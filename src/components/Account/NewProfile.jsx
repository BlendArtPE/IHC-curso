import { useState } from "react";
import Orders from "./Orders";
import PersonalDateRead from "./PersonalDateRead";
import Favourites from "./Favourites";

const NewProfile = () => {

  const [buttonOption, setButtonOption] = useState('3');


  return (
    <section className="mx-auto  mt-20 max-w-screen-lg flex gap-4 mb-10">
      <div className="h-[30rem] w-3/12 flex flex-col items-center bg-color-1 text-white rounded-b-2xl">
        <img
          src="./perfil.png"
          className="w-28 mt-8 mb-4 rounded-full"
          alt=""
        />
        <p className="text-lg font-semibold">Jesús Daniel</p>
        <p className="text-lg font-semibold mb-2">Chuquillanqui Sevillano</p>
        <button onClick={() => setButtonOption('1')}
        className={`w-full border-l-8 py-2 hover:border-blue-500 ${buttonOption === '1' ? " border-blue-500 bg-color-7" : ""} 
        border-transparent transition-all duration-200 hover:bg-color-7 flex justify-center `}>
          <div className="w-36 space-x-3 text-start">
            <i className="fa-solid fa-user"></i>
            <span>Mi perfil</span>
          </div>
        </button>
        <button onClick={() => setButtonOption('2')}
        className={`w-full border-l-8 py-2 hover:border-blue-500 ${buttonOption === '2' ? "border-blue-500 bg-color-7" : ""} 
        border-transparent transition-all duration-200 hover:bg-color-7 flex justify-center `}>
          <div className="w-36 space-x-2 text-start">
            <i className="fa-solid fa-truck"></i>
            <span>Mis pedidos</span>
          </div>
        </button>
        <button onClick={() => setButtonOption('3')}
        className={`w-full border-l-8 py-2 hover:border-blue-500 ${buttonOption === '3' ? "border-blue-500 bg-color-7" : ""} 
        border-transparent transition-all duration-200 hover:bg-color-7 flex justify-center `}>
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
        
        {buttonOption === '1' ?
          <PersonalDateRead /> :
          buttonOption === '2' ?
          <Orders /> :
          <Favourites />

        }
      </article>
    </section>
  );
};

export default NewProfile;
