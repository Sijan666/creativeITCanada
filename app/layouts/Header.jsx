import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import Image from 'next/image'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Header = () => {
    return (
        <>
        {/* header top */}
        <section className="bg-[#FF1E1E] py-1.5">
            <Container>
                <Flex className={'gap-x-13'}>
                    <div className="flex gap-x-2 items-center">
                        <BiSolidPhoneCall className='text-white' />
                        <p className='text-white font-medium text-base'>01624888444</p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <MdEmail className='text-white' />
                        <p className='text-white font-medium text-base'>help@creativeitinstitute.com</p>
                    </div>
                </Flex>
            </Container>
        </section>
        {/* header top */}
        {/* header */}
        <header className='py-10'>
            <Container>
                <Flex className={'justify-between'}>
                    <Image src='/logo.png' alt='logo' height={44} width={203}/>
                    <nav className="">
                        <ul className='flex gap-x-10'>
                            <li className='text-[#342B27] text-base font-semibold hover:text-[#CF0000] duration-300 cursor-pointer'>Home</li>
                            <li className='text-[#342B27] text-base font-semibold hover:text-[#CF0000] duration-300 cursor-pointer'>About Us</li>
                            <li className='text-[#342B27] text-base font-semibold hover:text-[#CF0000] duration-300 cursor-pointer'>Service</li>
                            <li className='text-[#342B27] text-base font-semibold hover:text-[#CF0000] duration-300 cursor-pointer'>Freelancing</li>
                            <li className='text-[#342B27] text-base font-semibold hover:text-[#CF0000] duration-300 cursor-pointer'>Contact</li>
                        </ul>
                    </nav>
                    <div className="icons flex gap-x-4.5">
                        <div className="py-5 px-5 bg-[#FF1E1E] rounded-full cursor-pointer">
                            <FaFacebookF className='text-white'/>
                        </div>
                        <div className="py-5 px-5 bg-[#FF1E1E] rounded-full cursor-pointer">
                            <FaLinkedinIn  className='text-white'/>
                        </div>
                        <div className="py-5 px-5 bg-[#FF1E1E] rounded-full cursor-pointer">
                            <FaTwitter  className='text-white'/>
                        </div>
                    </div>
                </Flex>
            </Container>
        </header>
        {/* header */}
        </>
    )
}

export default Header