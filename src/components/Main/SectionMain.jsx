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
        <div className="h-4"/>
        <Categories data={data.sections.categories} />
        <div className="h-4"/>
        <Offers data={data.sections.offers} />
        <div className="h-4"/>
        <MainProducts data={data.sections.mainProducts} />
        <div className="h-4"/>
        <RecommendedProducts data={data.sections.recommendedProducts} />
        <div className="h-4"/>
    </>
  )
}

export default SectionMain

SectionMain.propTypes = {
    data: PropTypes.object.isRequired,
  };