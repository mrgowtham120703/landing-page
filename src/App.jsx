import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Menubar from './components/Menubar'
import Home from './pages/Home'
import Services from './pages/Services'
import Cl from './pages/Cl'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'
import Stastitics from './pages/Stastitics'
import Subscribe from './pages/Subscribe'
import Team from './pages/Team'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div className='p-5 md:p-10 text-gray-800'>
      <Menubar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/cl' element={<Cl/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='testimonial' element={<Testimonials/>}/>
        <Route path='stastitics' element={<Stastitics/>}/>
        <Route path='subscribe' element={<Subscribe/>}/>
        <Route path='team' element={<Team />}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App