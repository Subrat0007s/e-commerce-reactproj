import React from 'react'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Loginform from './Component/Loginform'
import { Signup } from './Component/Signup'
import Privacy from './Component/Privacy'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Loginform />} path='/loginform' />
          <Route element={<Signup />} path='/signup' />
          <Route element={<Privacy />} path='/privacy' />
        </Routes>
      </Router>
    </div>
  )
}

export default App