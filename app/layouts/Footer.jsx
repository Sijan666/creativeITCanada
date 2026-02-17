import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'

const Footer = () => {
    return (
        <section className='py-15 bg-[#1F1E1E]'>
            <Container>
                <Flex className={'justify-between items-start'}>
                    <div className="contact">
                        <h3 className='text-[21px] font-bold text-white'>Contact Us</h3>
                        <div className="py-7.5">
                            <Flex className={'gap-x-4 items-start'}>
                                <div className=" rounded-full bg-[#695C49] text-center p-2.5">
                                    <FaMapMarkerAlt className='text-[#ECE5DC]'/>
                                </div>
                                <div className="">
                                    <h4 className='text-white text-[24px] italic font-bold pb-2'>Head Office</h4>
                                    <ul>
                                        <li className='text-base font-medium text-white'>Momtaz Plaza (4th Floor)</li>
                                        <li className='text-base font-medium text-white'>House # 07 , Road # 04</li>
                                        <li className='text-base font-medium text-white'>Dhanmondi, Dhaka- 1205</li>
                                    </ul>
                                </div>
                            </Flex>
                        </div>
                        <div className="pb-7.5">
                            <Flex className={'gap-x-4 items-start'}>
                                <div className=" rounded-full bg-[#695C49] text-center p-2.5">
                                    <FaMapMarkerAlt className='text-[#ECE5DC]'/>
                                </div>
                                <div className="">
                                    <h4 className='text-white text-[24px] italic font-bold pb-2'>Canada Office</h4>
                                    <ul>
                                        <li className='text-base font-medium text-white'>Momtaz Plaza (4th Floor)</li>
                                        <li className='text-base font-medium text-white'>House # 07 , Road # 04</li>
                                        <li className='text-base font-medium text-white'>Dhanmondi, Dhaka- 1205</li>
                                    </ul>
                                </div>
                            </Flex>
                        </div>
                        <div className="pb-20">
                            <Flex className={'gap-x-4 items-center'}>
                                <div className=" rounded-full bg-[#695C49] text-center p-2.5">
                                    <MdEmail  className='text-[#ECE5DC]'/>
                                </div>
                                <div className="">
                                    <h4 className='text-white text-[15px] italic font-bold'>info@creativeitinstitute.com</h4>
                                </div>
                            </Flex>
                        </div>
                    </div>
                    <div className="services">
                        <h3 className='text-[21px] font-bold text-white'>Our Services</h3>
                        <ul className='pt-7.5 flex flex-col gap-y-4 text-base text-white font-medium'>
                            <li>Branding Identity Design</li>
                            <li>Logo Design</li>
                            <li>App Development</li>
                            <li>Digital Marketing</li>
                            <li>Search Engine Optimization</li>
                            <li>Web Design</li>
                        </ul>
                    </div>
                    <div className="popularCourses">
                        <h3 className='text-[21px] font-bold text-white'>Popular Courses</h3>
                        <ul className='pt-7.5 flex flex-col gap-y-4 text-base text-white font-medium'>
                            <li>Web Development</li>
                            <li>Graphic Design</li>
                            <li>Digital Marketing</li>
                            <li>Mern Stack Development</li>
                            <li>Motion Graphics</li>
                            <li>Professional 3D Animation</li>
                            <li>Content Writing</li>
                        </ul>
                    </div>
                    <div className="others ">
                        <h3 className='text-[21px] font-bold text-white'>Others</h3>
                        <ul className='pt-7.5 flex flex-col gap-y-4 text-base text-white font-medium'>
                            <li>About Us</li>
                            <li>Our Facility</li>
                            <li>Our Achievement</li>
                            <li>Career Placement</li>
                            <li>Freelancing</li>
                            <li>Students Feedback</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </Flex>
                {/* footer bottom */}
                <div className="pt-10 border-t border-white">
                    <Flex className={'justify-between items-center'}>
                        <Image src="/footerLogo.png" alt='footerLogo.png' width={203} height={44}/>
                        <p className='text-base text-white'>Copyright © 2024 Creative IT Institute. All right reserved</p>
                        <Image src="/logo2.png" alt='logo2.png' width={148} height={58}/>
                    </Flex>
                </div>
                {/* footer bottom */}
            </Container>
        </section>
    )
}

export default Footer