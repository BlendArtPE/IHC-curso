import PropTypes from "prop-types";

import ListProducts from "./ListProducts"
import Price from "./Price"
import Services from "../General/Services";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";


const ShoppingCart = ({data}) => {

  const [visible, setVisible] = useState(false)

  const toggleVisibility = (e) => {
    e.preventDefault()
    setVisible(!visible);
  };

  return (
    <>
      <section className="mt-24 relative p-4 mx-auto max-w-screen-lg grid grid-cols-6 gap-5">
          <ListProducts />
          <Price toggleVisibility={toggleVisibility} />
          <div className={`absolute inset-x-0 inset-y-0 w-full h-full ${visible ? "flex" : "hidden"} flex-col justify-center items-center`}>
            <div className="bg-color-3 border-color-4 border-2 w-60 rounded-3xl flex flex-col items-center p-4">
              <img src="./shopCar.svg" className="w-36" alt="" />
              <h3 className="my-2">Compra realizada con éxito</h3>
              <Link to="/catalogue" className="bg-color-6 text-white font-medium px-2 py-1 rounded-full">Seguir comprando</Link>
            </div>
          </div>
      </section>
      <Services data={data.sections.footer}/>
    </>
  )
}

export default ShoppingCart

ShoppingCart.propTypes = {
  data: PropTypes.object.isRequired,
};