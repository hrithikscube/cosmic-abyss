import React from 'react';
import { policy } from '@/util/helpers';
import Head from 'next/head';

const PrivacyPolicy = () => {
    return (
        <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>
            <br />
            <Head>
                <title>Privacy Policy - Cosmic Abyss</title>
            </Head>
            <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold '>Privacy Policy</h1>
            {
                React.Children.toArray(policy.map((item, index) => (
                    <div key={index + 1 + item.title}>
                        <h2 className="lg:text-base text-sm font-medium  mt-5">{item.title}</h2>
                        <p className="lg:text-sm text-xs text-[#292929]  mt-2">{item.description}</p>
                    </div>
                )))
            }
            <br />
        </div>
    )
}

export default PrivacyPolicy

export async function getStaticProps() {
    let data = {}
    return {
        props: {
            data: data
        }
    }
}
