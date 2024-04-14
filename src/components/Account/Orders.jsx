import React from 'react'
import SubOrder from './SubOrder'

const Orders = () => {
  return (
    <div className='bg-color-8 border-x border-b rounded-b-2xl border-color-9 p-4'>
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
