import React from 'react'
import AboutSection from '../components/AboutSection'
import DeliverySection from '../components/DeliverySection'
import Testimonials from '../components/Testimonials'
import NatureProducts from '../components/NatureProductsSection'

function Aboutpage() {
  return (
    <>
        <div className='xl:pb-56 lg:pb-44 md:pb-32 pb-16'>

        <AboutSection/>
        <NatureProducts/>
        <DeliverySection/>
        <Testimonials/>
        </div>
    </>
  )
}

export default Aboutpage