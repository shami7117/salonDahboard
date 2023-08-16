import Appointments from '@/components/listings/Appointments'
import ListingsHeader from '@/components/listings/ListingsHeader'
import React from 'react'

const Listings = () => {
  return (
    <div >
      <ListingsHeader />
      <Appointments />
    </div>
  )
}

export default Listings