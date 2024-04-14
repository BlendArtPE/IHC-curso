import PropTypes from "prop-types";

import ListProducts from "./ListProducts"
import Price from "./Price"
import Services from "../General/Services";

const ShoppingCart = ({data}) => {
  return (
    <>
      <section className="mt-24 p-4 mx-auto max-w-screen-lg grid grid-cols-6 gap-5">
          <ListProducts />
          <Price />
          
      </section>
      <Services data={data.sections.footer}/>
    </>
  )
}

export default ShoppingCart

ShoppingCart.propTypes = {
  data: PropTypes.object.isRequired,
};