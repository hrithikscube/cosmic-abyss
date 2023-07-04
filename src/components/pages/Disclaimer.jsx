import React from 'react'
import { disclaimer } from '../../util/helpers'

const Disclaimer = () => {
  return (
    <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>
      <br />
      <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold font-sans'>Disclaimer</h1>
      {
        disclaimer.map((item, index) => (
          <div key={index + 1 + item.title} className='mt-5'>
            <p className="text-base text-[#292929] font-sans">{item.info}</p>
          </div>
        ))
      }
      <br />
    </div>
  )
}

export default Disclaimer