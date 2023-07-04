import React from 'react'
import Home from './components/pages/Home'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import Disclaimer from './components/pages/Disclaimer'
import AboutUs from './components/pages/AboutUs'



import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App