import { disclaimer } from '@/util/helpers'
import Head from 'next/head'
import React from 'react'

const Disclaimer = () => {
    return (
        <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>
            <br />
            <Head>
                <title>Disclaimer - Cosmic Abyss</title>
            </Head>
            <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold '>Disclaimer</h1>
            {
                disclaimer.map((item, index) => (
                    <div key={index + 1 + item.title} className='mt-5'>
                        <p className="text-sm text-[#292929] ">{item.info}</p>
                    </div>
                ))
            }
            <br />
        </div>
    )
}

export default Disclaimer

export async function getStaticProps() {
    let data = {}
    return {
        props: {
            data: data
        }
    }
}
