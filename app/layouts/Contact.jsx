import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import Image from 'next/image'

const Contact = () => {
    return (
        <section className='py-25 bg-[#FFF7EB]'>
            <Container>
                <Flex className={'justify-between'}>
                    <div className="">
                        <h3 className='text-[60px] font-bold text-black w-97.75 pb-5'>Get in Touch <span className='text-[#CF0000] italic'>with Us!</span></h3>
                        <p className='text-[#4D4541] text-base w-148 leading-[150%] pb-15'>We believe all of our students are part of the Creative IT family. We consider your comments with utmost importance to improve our services.</p>
                        <Flex className={'gap-x-5'}>
                            <button className='text-white bg-[#FF1E1E] border border-[#FF1E1E] rounded-[41.5px] text-[18px] font-medium px-8 py-4 hover:text-[#FF1E1E] hover:bg-white duration-300 cursor-pointer'>Get Started </button>
                            <button className='text-white bg-[#FF1E1E] border border-[#FF1E1E] rounded-[41.5px] text-[18px] font-medium px-8 py-4 hover:text-[#FF1E1E] hover:bg-white duration-300 cursor-pointer'>Explore more </button>
                        </Flex>
                    </div>
                    <Image src="/folder.png" alt='folder.png' height={284} width={283}/>
                </Flex>
            </Container>
        </section>
    )
}

export default Contact