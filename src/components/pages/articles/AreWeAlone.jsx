import React from 'react'
import { content2 } from '../../../util/helpers'

const AreWeAlone = () => {
    return (
        <div className='lg:w-[720px] lg:m-auto flex flex-col m-5'>

            <div className='flex flex-col mt-5'>
                <h1 className='font-sans lg:text-3xl md:text-3xl text-2xl font-bold'>Are We Alone in This Universe? Unraveling the Cosmic Enigma</h1>

                <p className='lg:text-lg text-base font-serif font-light mt-5 leading-relaxed tracking-wide text-[#292929]'>
                    Throughout human history, the question of whether we are alone in the vast expanse of the universe has captivated our imaginations. Countless stars, galaxies, and planets populate the cosmos, leaving us to ponder the possibility of extraterrestrial life. While we have yet to definitively answer this age-old question, recent scientific discoveries and technological advancements have brought us closer to unraveling the cosmic enigma. In this article, we will explore the arguments and evidence surrounding the existence of alien life, contemplating the implications of both its presence and absence.
                </p>
            </div>

            {
                content2.map((item, index) => (
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

export default AreWeAlone