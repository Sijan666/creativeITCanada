import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import Image from 'next/image'

const About = () => {
    return (
        <>
        <section>
            <div className="bg-[#F7FCE7] p-15">
                <Container className={'px-5'}>
                    <Flex className={'lg:justify-between flex-col lg:flex-row justify-center flex gap-y-5'}>
                        {/* left side */}
                        <div className="left lg:w-160.75">
                            <h4 className='lg:text-[32px] text-base text-[#EF473A] font-bold italic pb-2'>We started back in 2008.</h4>
                            <h3 className='lg:text-[40px] text-base text-[#342B27] font-bold'>Since then, we have been travelling towards one goal creating a supreme experience for our clients.</h3>
                            <p className='text-[#605F62] text-base pt-7.5 pb-15'>We have designed our courses with the most demanding professional skills. The knowledge, experience, and expertise gained through the program will ensure your desired job in the global market.</p>
                            <Flex className={'gap-x-5 flex flex-col lg:flex-row gap-y-5'}>
                                <button className='text-white bg-[#FF1E1E] border border-[#FF1E1E] rounded-[41.5px] text-[18px] font-medium px-8 py-4 hover:text-[#FF1E1E] hover:bg-white duration-300 cursor-pointer'>Get Started </button>
                                <button className='text-white bg-[#FF1E1E] border border-[#FF1E1E] rounded-[41.5px] text-[18px] font-medium px-8 py-4 hover:text-[#FF1E1E] hover:bg-white duration-300 cursor-pointer'>Explore more </button>
                            </Flex>
                        </div>
                        {/* right side */}
                        <div className="right">
                            <Image src='/about.png' alt='about.png' height={624} width={628}/>
                        </div>
                    </Flex>
                </Container>
            </div>
        </section>
        </>
    )
}

export default About