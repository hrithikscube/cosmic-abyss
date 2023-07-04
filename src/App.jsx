import React from 'react'
import Home from './components/pages/Home'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import Disclaimer from './components/pages/Disclaimer'
import AboutUs from './components/pages/AboutUs'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'


const App = () => {

  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about-us',
      element: <AboutUs />
    },
    {
      path: '/disclaimer',
      element: <Disclaimer />
    },
    {
      path: '/privacy-policy',
      element: <PrivacyPolicy />
    },

  ]

  return (
    <React.Fragment>
      <Header />
      <Routes>
        {
          routes.map(item => (
            <Route path={item.path} element={item.element} />
          ))
        }
      </Routes>
    </React.Fragment>
  )
}

export default App