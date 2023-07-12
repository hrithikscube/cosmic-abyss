import React from 'react'

const ArticleTemplate = ({ data }) => {
    return (
        <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>

            <div className='flex flex-col mt-5'>
                <h1 className='font-sans lg:text-3xl md:text-3xl text-2xl font-bold'>{data.mainTitle}</h1>

                <p className='lg:text-lg text-base font-serif font-light mt-5 leading-relaxed tracking-wide text-[#292929]'>
                    {data.introduction}
                </p>
            </div>

            <div className='mt-5'>
                <img src={data.image === '' ? '/images/earth.jpg' : data.image} alt="mars" />
            </div>


            {
                data.content.map((item, index) => (
                    <div key={index + 1 + item.name} className='mt-5'>
                        <h2 className='lg:text-xl text-lg font-bold'>{item.name}</h2>

                        <p className='lg:text-lg text-base font-serif font-light mt-5 leading-relaxed tracking-wide'>
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