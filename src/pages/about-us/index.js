import { about } from '@/util/helpers'
import Head from 'next/head'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>
            <br />
            <Head>
                <title>About Us - Cosmic Abyss</title>
            </Head>
            <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold '>About Us</h1>
            {
                about.map((item, index) => (
                    <div key={index + 1 + item.title}>
                        <h2 className="lg:text-base text-sm font-medium  mt-5">{item.title}</h2>
                        <p className="lg:text-sm text-xs text-[#292929]  mt-2">{item.description}</p>
                    </div>
                ))
            }

            <div className='mt-5'>
                <p className="lg:text-sm text-xs text-[#292929] ">Join us on this extraordinary journey as we delve into the depths of space, unravel the mysteries of black holes, and embark on a quest to understand the universe we call home. Together, let's explore the cosmic abyss and marvel at the wonders that lie beyond our reach.</p>
            </div>

            <div className='mt-5'>
                <p className="lg:text-sm text-xs text-[#292929]">Thank you for visiting Cosmic Abyss!</p>
                <p className="lg:text-sm text-xs text-[#292929]">The Cosmic Abyss Team</p>
            </div>

            <br />
        </div>
    )
}

export default AboutUs

export async function getStaticProps() {
    let data = {}
    return {
        props: {
            data: data
        }
    }
}
