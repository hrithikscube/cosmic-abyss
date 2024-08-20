

import React from 'react'

import { articles } from "@/util/helpers";
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
  return (
    <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>
      <Head>
        <title>Cosmic Abyss - Explore the Mysteries of the Universe</title>
      </Head>
      <br />
      <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold  lg:pl-4 pl-2 mb-2'>Articles</h1>
      {React.Children.toArray(
        articles.map((item, index) => (
          <Link href={item?.link} key={index}>
            <div className={`border-b border-[#808080]/20 lg:p-4 p-2 hover:bg-[#f2f2f2] cursor-pointer ${index === articles.length - 1 ? 'border-b-0' : ''}`}>
              <h1 className='lg:text-base text-sm font-medium'>{item?.title}</h1>
              <p className='lg:text-sm text-xs text-[#292929] my-2'>{item?.description.slice(0, 323)}...</p>
            </div>
          </Link>
        ))
      )}
      <br />
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data
    }
  }
}
