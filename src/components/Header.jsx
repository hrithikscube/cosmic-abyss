import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About us',
    link: '/about-us'
  },
  {
    name: 'Privacy Policy',
    link: '/privacy-policy'
  },

  {
    name: 'Disclaimer',
    link: '/disclaimer'
  },

]

const Header = () => {

  const { pathname } = useLocation()

  return (
    <div className='lg:w-[720px] lg:m-auto m-5 flex justify-between items-center py-5'>
      <div className='flex flex-col'>
        <img src="/logo.svg" alt="logo_" />
        <h2 className='font-mono text-base font-bold'>Cosmic Abyss</h2>
      </div>

      <div className='flex items-center gap-10'>
        {
          menuItems.map((item, index) => (
            <Link key={index + 1 + item.name} to={item.link}>
              <p className={`text-base font-medium cursor-pointer  ${pathname === item.link ?'border-b border-black':'border-b border-white'}`}>{item.name}</p>
            </Link>
      ))
        }
    </div>

    </div >
  )
}

export default Header