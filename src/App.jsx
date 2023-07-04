import React from 'react'
import Header from './components/Header'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import { Routes, Route } from 'react-router-dom'
import Disclaimer from './components/pages/Disclaimer'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import Blackholes from './components/pages/articles/Blackholes'


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
      path: '/articles/blackholes',
      element: <Blackholes />
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