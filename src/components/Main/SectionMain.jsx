import PropTypes from "prop-types";

import Main from "./Main"
import Categories from "./Categories"
import Offers from "./Offers"
import MainProducts from "./MainProducts"
import RecommendedProducts from "./RecommendedProducts"

const SectionMain = ({data}) => {
  return (
    <>
        <Main data={data.sections.main} />
        <div className="h-12"/>
        <Categories data={data.sections.categories} />
        <div className="h-12"/>
        <Offers data={data.sections.offers} />
        <div className="h-12"/>
        <MainProducts data={data.sections.mainProducts} /> 
        {/* Falta imagen responsive */}
        <div className="h-12"/>
        <RecommendedProducts data={data.sections.recommendedProducts} />
        <div className="h-12"/> 
    </>
  )
}

export default SectionMain

SectionMain.propTypes = {
    data: PropTypes.object.isRequired,
  };