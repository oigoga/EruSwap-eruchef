import React from 'react'
import Staking from "./pages/Staking"
import PreMinting from './pages/PreMinting'
import DuringMinting from './pages/DuringMinting'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Benefits from './components/Benefits'
import PostMinting from './pages/PostMinting'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <div className='bg-navy-blue text-white'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<PreMinting/>}/>
      <Route path='/minting' element={<DuringMinting/>}/>
      <Route path='/post-minting' element={<PostMinting/>}/>
    </Routes>
 
   <Benefits/>
   <Footer/>
    </div>

    </>
  )
}

export default App