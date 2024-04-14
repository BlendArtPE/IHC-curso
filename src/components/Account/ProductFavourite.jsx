import React, { useState } from "react";

const ProductFavourite = () => {

    const [favorite, setFavorite] = useState(true)
  return (
    <div className={`relative ${favorite ? "flex" : "hidden"} flex-col items-center bg-color-3 shadow-color-sombra shadow-md p-4 rounded-xl`}>
      <img src="./categories/i2.png" alt="" />
      <h3 className="font-medium mb-1 text-2xl">s./ 799</h3>
      <h4 className="font-semibold mb-2">Sennheiser Accentum</h4>
      <div className="flex justify-between gap-2 *:rounded-full w-full">
        <button className="text-center bg-color-1 text-white font-medium py-2 w-full">COMPRAR</button>
        <button className="text-center bg-color-6 text-white font-medium py-2 w-full">VISITAR</button>
      </div>
      <i onClick={() => {setFavorite(!favorite)}} className={`absolute top-4 right-6 transition-all duration-200 text-xl ${favorite ? "fa-solid" : "fa-regular"} fa-heart`}></i>
    </div>
  );
};

export default ProductFavourite;
