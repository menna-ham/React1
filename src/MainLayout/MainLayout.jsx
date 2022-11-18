import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import HeaderSec from '../HeaderSec/HeaderSec'
import NavBar from '../NavBar/NavBar'
import Portfolio from '../Protfolio/Portfolio'

export default function MainLayout() {
  return (
    <>
    <div className='position-relative'>
      
      <NavBar/>
      <div className='my-auto'>
      <Outlet/>
      </div>
      
      <Footer/>
      
    </div>

      
    </>
  )
}
