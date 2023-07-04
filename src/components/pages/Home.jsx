import React from 'react'
import { content } from '../../util/helpers'

const Home = () => {
    return (
        <React.Fragment>
            <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>

                <div className='flex flex-col mt-10'>
                    <h1 className='font-sans lg:text-4xl md:text-4xl text-2xl font-bold'>Exploring the Enigmatic Abyss: What Are Black Holes?</h1>

                    <p className='lg:text-xl md:text-lg text-base font-serif font-light mt-5 leading-relaxed tracking-wide text-[#292929]'>
                        In the vast expanse of space, amidst the celestial wonders and cosmic mysteries, black holes stand as enigmatic powerhouses that both captivate and challenge our understanding of the universe. These cosmic abysses, with their immense gravitational pull and mind-bending properties, have long intrigued scientists and fascinated stargazers. In this article, we embark on a journey to unravel the mysteries surrounding black holes and shed light on what they truly are.
                    </p>
                </div>

                {
                    content.map((item, index) => (
                        <div key={index + 1 + item.name} className='mt-5'>
                            <h2 className='lg:text-2xl text-xl font-bold'>{item.name}</h2>

                            <p className='lg:text-xl md:text-lg text-base font-serif font-light mt-5 leading-relaxed tracking-wide'>
                                {item.description}
                            </p>
                        </div>
                    ))
                }
                <br />

            </div>
            <div className='w-full py-2 flex justify-center items-center bg-[#f2f2f2]'>
                <h3 className='lg:text-base font-medium px-2'>Cosmic Abyss - Exploring the Universe's Secrets | © 2023 Cosmic Abyss. All rights reserved.</h3>
            </div>
        </React.Fragment>
    )
}

export default Home