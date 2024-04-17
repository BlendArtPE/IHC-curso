import PropTypes from "prop-types";
import React from 'react'
import Offers from '../Main/Offers'
import Services from '../General/Services'

const SectionOffers = ({data}) => {
  return (
    <div>
        <div className="h-24"/>
        <Offers data={data.sections.offers} />
        <div className="h-12"/>
        <Services data={data.sections.footer}/>
    </div>
  )
}

export default SectionOffers

SectionOffers.propTypes = {
  data: PropTypes.object.isRequired,
};