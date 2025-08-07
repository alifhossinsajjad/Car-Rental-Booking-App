import React from 'react'
import Navbar from './components/Navbar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  const isOwnerpath = useLocation().pathname.startsWith('/owner')

  return (
    <>
    {!isOwnerpath && <Navbar setShowLogin={setShowLogin} />}
    </>
  )
}

export default App