import React from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import { Routes, Route } from 'react-router-dom'
import Disclaimer from './components/pages/Disclaimer'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import ArticleTemplate from './components/ArticleTemplate'
import { blackholes, areWeAlone,timetravel, beyondearth } from './util/helpers'

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
    {
      path: '/articles/blackholes',
      element: <ArticleTemplate data={blackholes} />
    },
    {
      path: '/articles/are-we-alone',
      element: <ArticleTemplate data={areWeAlone} />
    },
    {
      path: '/articles/timetravel',
      element: <ArticleTemplate data={timetravel} />
    },
    {
      path: '/articles/beyond-earth',
      element: <ArticleTemplate data={beyondearth} />
    },

  ]

  return (
    <React.Fragment>

      <Routes>
        {
          routes.map(item => (
            <Route
              path={item.path}
              element={<>
                <Banner />
                <Header />
                {item.element}
              </>} />
          ))
        }
      </Routes>
    </React.Fragment>
  )
}

export default App