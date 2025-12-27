import React from 'react'
import Navbar from './Navbar'
import EmptyCartImg from '../assets/EmptyCart.png'
import { useLocation } from 'react-router-dom'

const EmptyCart = () => {
    const location = useLocation()
  return (
    <>
        <Navbar/>

    </>
  )
}

export default EmptyCart