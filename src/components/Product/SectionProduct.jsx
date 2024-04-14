import PropTypes from "prop-types";

import Product from "./Product"
import Feature from "./Feature"
import Services from "../General/Services";

const SectionProduct = ({data}) => {
  return (
    <>
        <Product />
        <Feature />
        <Services data={data.sections.footer}/>
    </>
  )
}

export default SectionProduct

SectionProduct.propTypes = {
  data: PropTypes.object.isRequired,
};