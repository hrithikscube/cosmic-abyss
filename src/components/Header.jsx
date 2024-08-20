import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Fragment } from 'react'

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

  const pathname = usePathname()

  return (
    <Fragment>
      <div className='mt-8' />
      <div className='lg:w-[720px] lg:m-auto flex lg:flex-row flex-col justify-between items-center py-5 gap-2'>
        <div className='flex flex-col'>
          <Image width={100} height={100} style={{ minWidth: 'auto', minHeight: 'auto' }} src="/logo.svg" alt="logo_" className='' />
          <h2 className='font-mono text-sm font-bold'>Cosmic Abyss</h2>
        </div>

        <div className='flex lg:flex-row md:flex-row flex-col items-center lg:gap-10 gap-5'>
          {
            menuItems.map((item, index) => (
              <Link key={index + 1 + item.name} href={item.link}>
                <p className={`text-sm font-medium cursor-pointer  ${pathname === item.link ? 'text-cyan-600' : 'text-black'}`}>{item.name}</p>
              </Link>
            ))
          }
        </div>

      </div>
    </Fragment>
  )
}

export default Header