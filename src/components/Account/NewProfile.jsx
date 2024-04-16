import { useState } from "react";
import Orders from "./Orders";
import PersonalDateRead from "./PersonalDateRead";
import Favourites from "./Favourites";

const NewProfile = () => {

  const [buttonOption, setButtonOption] = useState('3');
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <section className="relative xl:mx-auto mx-4  mt-20 max-w-screen-lg flex justify-center gap-4 mb-10">
      <div className={`lg:static absolute left-0 z-50  h-[30rem] lg:w-3/12 md:w-4/12 w-9/12 ${visible ? "flex" : "hidden"} flex-col items-center bg-color-1 text-white rounded-b-2xl`}>
      <i onClick={toggleVisibility} className="absolute lg:hidden flex bg-color-2 px-2 py-1 text-color-1 rounded-lg right-4 top-2 fa-solid fa-chevron-left"></i>
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

      <article className=" lg:w-9/12 w-full rounded-b-2xl lg:pl-8">
        
        {buttonOption === '1' ?
          <PersonalDateRead  toggleVisibility={toggleVisibility} /> :
          buttonOption === '2' ?
          <Orders toggleVisibility={toggleVisibility}/> :
          <Favourites toggleVisibility={toggleVisibility} />

        }
      </article>
    </section>
  );
};

export default NewProfile;
