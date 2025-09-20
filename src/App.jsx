import React from 'react'
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Cars from './pages/Cars';
import MyBookings from './pages/MyBookings';
import Fotter from './components/Fotter';


const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  // console.log(showLogin);
  const isOwnerpath = useLocation().pathname.startsWith('/owner')

  return (
    <>
    {!isOwnerpath && <Navbar setShowLogin={setShowLogin} />}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/car-details/:id' element={<CarDetails/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
    </Routes>


    {!isOwnerpath && <Fotter />}
    </>
  )
}

export default App