import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'

const Banner = () => {
    return (
        <section>
            <div className="bg-[url('/bannerBg.png')] pt-48.25 pb-43 bg-center bg-cover bg-no-repeat">
                <Container>
                    <h3 className='text-[42px] font-semibold text-[#FF7E31] italic'>
                        The Journey of
                    </h3>
                    <h1 className='text-[92px] font-bold text-white max-w-142 leading-tight pb-25'>
                        Creativity & Innovation
                    </h1>
                    <Flex className={'gap-x-5'}>
                        <button className='text-white bg-[#FF1E1E] rounded-[41.5px] text-[18px] font-medium px-8 py-4 hover:text-[#FF1E1E] hover:bg-white duration-300 cursor-pointer'>Get Started </button>
                        <button className='text-white bg-[#FF1E1E] rounded-[41.5px] text-[18px] font-medium px-8 py-4 hover:text-[#FF1E1E] hover:bg-white duration-300 cursor-pointer'>Explore more </button>
                    </Flex>
                </Container>
            </div>
        </section>
    )
}

export default Banner