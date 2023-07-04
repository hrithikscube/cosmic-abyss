import React from 'react'
import { about } from '../../util/helpers'

const AboutUs = () => {
  return (
    <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>
      <br />
      <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold font-sans'>About Us</h1>
      {
        about.map((item, index) => (
          <div key={index + 1 + item.title}>
            <h2 className="text-base font-medium font-sans mt-5">{item.title}</h2>
            <p className="text-base text-[#292929] font-sans mt-2">{item.description}</p>
          </div>
        ))
      }

      <div className='mt-5'>
        <p className="text-base text-[#292929] font-sans">Join us on this extraordinary journey as we delve into the depths of space, unravel the mysteries of black holes, and embark on a quest to understand the universe we call home. Together, let's explore the cosmic abyss and marvel at the wonders that lie beyond our reach.</p>
      </div>

      <div className='mt-5'>
        <p className="text-base text-[#292929] font-sans">Thank you for visiting Cosmic Abyss!</p>
        <p className="text-base text-[#292929] font-sans">The Cosmic Abyss Team</p>
      </div>
      
      <br />
    </div>
  )
}

export default AboutUs