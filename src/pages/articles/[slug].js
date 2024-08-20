import React from 'react'
import { blackholes, are_we_alone, beyond_earth, time_travel, mandela_effect } from '../../util/helpers'
import Image from 'next/image'

const ArticleTemplate = ({ data }) => {

    return (
        <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>

            <div className='flex flex-col mt-5'>
                <h1 className=' lg:text-3xl md:text-3xl text-2xl font-bold'>{data?.mainTitle}</h1>

                <p className='lg:text-base text-sm mt-5 leading-relaxed text-[#292929]'>
                    {data?.introduction}
                </p>
            </div>

            <div className='mt-5'>
                <Image width={500} height={500} style={{ minWidth: 'auto', minHeight: 'auto' }} className='w-full lg:min-h-[350px] object-contain' src={data?.image === '' ? '/images/earth.jpg' : data?.image} alt="mars" />
            </div>

            {
                data?.content?.map((item, index) => (
                    <div key={index + 1 + item.name} className='mt-5'>
                        <h2 className='lg:text-lg text-base font-bold'>{item?.name}</h2>

                        {
                            item.img !== '' && (
                                <div>
                                    <Image width={500} height={500} style={{ minWidth: 'auto', minHeight: 'auto' }} src={item.img} alt="content_image" className='w-full lg:h-[350px] object-contain' />
                                </div>
                            )
                        }

                        <p className='lg:text-base text-sm mt-5 leading-relaxed'>
                            {item.description}
                        </p>
                    </div>
                ))
            }
            <br />

        </div>
    )
}

export default ArticleTemplate


export async function getServerSideProps(context) {
    const { slug } = context.params;

    let dataList = [
        {
            name: "blackholes",
            list: blackholes
        },
        {
            name: "are_we_alone",
            list: are_we_alone
        },
        {
            name: "beyond_earth",
            list: beyond_earth
        },
        {
            name: "time_travel",
            list: time_travel
        },
        {
            name: "mandela_effect",
            list: mandela_effect
        },
    ];

    // Find the matching item by slug
    let data = dataList.find(item => item.name === slug)?.list || null;

    // Return the data as props
    return {
        props: {
            data
        }
    };
}