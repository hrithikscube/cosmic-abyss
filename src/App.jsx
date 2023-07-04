import React from 'react'
import Home from './components/pages/Home'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import Disclaimer from './components/pages/Disclaimer'
import AboutUs from './components/pages/AboutUs'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </React.Fragment>
  )
}

export default App