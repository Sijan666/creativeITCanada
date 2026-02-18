import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import Image from 'next/image'

const Service = () => {
    return (
        <section className='py-25'>
            <div className="service">
                <Container className={'px-5'}>
                    <div className="text-center">
                        <h3 className='text-[48px] font-bold text-[#1F1E1E] pb-5'>Our <span className='text-[#CB2D3E] italic'>Services</span></h3>
                        <p className='text lg:px-60 leading-6 pb-7.5'>We have designed our courses with the most demanding professional skills. The knowledge, experience, and expertise gained through the program will ensure your desired job in the global market.</p>
                        <div className="rounded-[37px] p-2 border border-[#D9D9D9] lg:w-119 lg:mx-auto">
                            <Flex className={'gap-x-1 '}>
                                <button className=" lg:px-16 px-10 py-4 text-black font-semibold text-[24px] rounded-[29px] hover:text-white hover:bg-[#FF1E1E] duration-300 cursor-pointer">Courses</button>
                                <button className=" lg:px-16 px-10 py-4 text-black font-semibold text-[24px] rounded-[29px] hover:text-white hover:bg-[#FF1E1E] duration-300 cursor-pointer">Projects</button>
                            </Flex>
                        </div>
                        <div className="pt-15">
                            <Flex className={'justify-center gap-x-5 flex flex-col lg:flex-row'}>
                                <Image src='/s1.png' alt='s1.png' width={380} height={414}/>
                                <Image src='/s2.png' alt='s2.png' width={380} height={414}/>
                                <Image src='/s3.png' alt='s3.png' width={380} height={414}/>
                            </Flex>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Service