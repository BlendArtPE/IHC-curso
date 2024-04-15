import React from "react";

const PersonalDateRead = () => {
  return (
    <div className="md:h-[30rem] bg-color-8 border-x border-b rounded-b-2xl border-color-9 p-4 ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Datos Personales</h1>
        <button className="bg-sky-500 px-3 py-2 rounded-lg">
          <i className="fa-solid fa-pen text-white text-sm"></i>
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6">
          <div className="w-full">
            <h3 className="text-lg font-medium pl-2 mb-2">Nombres</h3>
            <input
              type="text"
              className="border-b border-black w-full outline-none bg-gray-100 pl-2 py-1"
              name=""
              value="Jesús Daniel"
              id=""
            />
          </div>
          <div className="w-full">
            <h3 className="text-lg font-medium pl-2 mb-2">Apellidos</h3>
            <input
              type="text"
              className="border-b border-black w-full outline-none bg-gray-100 pl-2 py-1"
              name=""
              value="Chuquillanqui Sevillano"
              id=""
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-6">
          <div className="w-full">
            <h3 className="text-lg font-medium pl-2 mb-2">Email</h3>
            <input
              type="text"
              className="border-b border-black w-full outline-none bg-gray-100 pl-2 py-1"
              name=""
              value="jesus.cs.7.2010@gmail.com"
              id=""
            />
          </div>
          <div className="w-full">
            <h3 className="text-lg font-medium pl-2 mb-2">Teléfono</h3>
            <input
              type="text"
              className="border-b border-black w-full outline-none bg-gray-100 pl-2 py-1"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-lg font-medium pl-2 mb-2">Contraseña</h3>
          <input
            type="password"
            className="border-b border-black w-full outline-none bg-gray-100 pl-2 py-1"
            name=""
            value="jesus123asddsda"
            id=""
          />
        </div>

        <div className="w-full">
          <h3 className="text-lg font-medium pl-2 mb-2">Dirección</h3>
          <input
            type="text"
            className="border-b border-black w-full outline-none bg-gray-100 pl-2 py-1"
            name=""
            value="Mz. 7 Lt. 17, San Martín, El Milagro, Huanchaco"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDateRead;
