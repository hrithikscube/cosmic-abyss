import React from 'react'
import { articles } from '../../util/helpers'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>
      <br />
      <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold font-sans lg:pl-4 pl-2 mb-2'>Articles</h1>
      {
        articles.map((item, index) => (
            <Link key={index + 1 + item.name} to={item.link}>
                <div className=' border-b border-[#d6d6d6] lg:p-4 p-2 hover:bg-[#f2f2f2] cursor-pointer'>
                    <h1 className='lg:text-xl text-lg font-medium'>{item.title}</h1>
                    <p className='text-base text-[#292929] my-2'>{item.description.slice(0, 323)}...</p>
                </div>
            </Link>
        ))
    }
      <br />
    </div>
  )
}

export default Home