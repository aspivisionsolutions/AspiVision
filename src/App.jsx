import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutSection from './pages/AboutUs'
import PortfolioPage from './pages/PortfolioPage'
import ServicesSection from './pages/ServicesSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutSection/>} />
          <Route path='/portfolio' element={<PortfolioPage/>} />
          <Route path='/services' element={<ServicesSection/>} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
