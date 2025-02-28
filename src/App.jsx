import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutSection from './pages/AboutUs'
import PortfolioPage from './pages/PortfolioPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutSection/>} />
          <Route path='/portfolio' element={<PortfolioPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/services/:id' element={<ServiceDetail/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
