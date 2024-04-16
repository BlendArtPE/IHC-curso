import React from 'react'
import SubOrder from './SubOrder'
import PropTypes from "prop-types";

const Orders = ({ toggleVisibility }) => {
  return (
    <div className='bg-color-8 border-x border-b rounded-b-2xl border-color-9 p-4'>
        <button onClick={toggleVisibility} className="bg-color-1 text-color-2 px-2 py-1 rounded-lg"><i className="fa-solid fa-bars-staggered"></i></button>
        <h1 className="text-2xl font-semibold mb-6">Mis pedidos</h1>
        <div className='space-y-4'>
            <SubOrder  state="canceled" nameState="Cancelado"/>
            <SubOrder  state="received" nameState="Recibido"/>
            <SubOrder  state="waited" nameState="En espera"/>
        </div>
    </div>
  )
}

export default Orders

Orders.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
};