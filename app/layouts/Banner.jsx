import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'

const Banner = () => {
    return (
        <section>
            <div className="bg-[url('/bannerBg.png')] lg:pt-48.25 lg:pb-43 py-20 bg-center bg-cover bg-no-repeat">
                <Container className={'px-5'}>
                    {/* banner text */}
                    <h3 className='lg:text-[42px] text-base font-semibold text-[#FF7E31] italic pb-3 lg:pb-0'>
                        The Journey of
                    </h3>
                    <h1 className='lg:text-[92px] text-base font-bold text-white lg:w-142 leading-tight lg:pb-25 pb-4'>
                        Creativity & Innovation
                    </h1>
                    {/* btn */}
                    <Flex className={'lg:gap-x-5 gap-x-1'}>
                        <button className='text-white bg-[#FF1E1E] rounded-[41.5px] lg:text-[18px] text-sm font-medium lg:px-8 px-4 lg:py-4 py-2 hover:text-[#FF1E1E] hover:bg-white duration-300 cursor-pointer'>Get Started </button>
                        <button className='text-white bg-[#FF1E1E] rounded-[41.5px] lg:text-[18px] text-sm font-medium lg:px-8 px-4 lg:py-4 py-2 hover:text-[#FF1E1E] hover:bg-white duration-300 cursor-pointer'>Explore more </button>
                    </Flex>
                </Container>
            </div>
        </section>
    )
}

export default Banner