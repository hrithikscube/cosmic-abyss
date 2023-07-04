import React from 'react'
import { policy } from '../../util/helpers'

const PrivacyPolicy = () => {
  return (
    <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>
      <br />
      <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold font-sans'>Privacy Policy</h1>
      {
        policy.map((item, index) => (
          <div key={index + 1 + item.title}>
            <h2 className="text-base font-medium font-sans mt-5">{item.title}</h2>
            <p className="text-base text-[#292929] font-sans mt-2">{item.description}</p>
          </div>
        ))
      }
      <br />
    </div>
  )
}

export default PrivacyPolicy