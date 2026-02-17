import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import SlotCounter from 'react-slot-counter';


const Achievement = () => {
    return (
        <>
        <section className='py-25'>
            <Container>
                <h3 className='text-[48px] font-bold text-[#1F1E1E] text-center'>Showcase Of Our <span className='text-[#CB2D3E] italic'>Achievements</span></h3>
                <div className="pt-21.25">
                    <Flex className={'justify-center gap-x-68'}>
                        <div className="text-center">
                            <h3 className='text-[#F5595A] font-bold text-[72px] '><SlotCounter value={57} animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }} /></h3>
                            <p className='text-black font-medium text-[24px]'>Clients</p>
                        </div>
                        <div className="text-center">
                            <h3 className='text-[#F5595A] font-bold text-[72px] '><SlotCounter value={93} animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }} /></h3>
                            <p className='text-black font-medium text-[24px]'>Projects</p>
                        </div>
                        <div className="text-center">
                            <h3 className='text-[#F5595A] font-bold text-[72px] '><SlotCounter value={600} animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }} /></h3>
                            <p className='text-black font-medium text-[24px]'>Employees </p>
                        </div>
                        <div className="text-center">
                            <h3 className='text-[#F5595A] font-bold text-[72px] '><SlotCounter value={25} animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }} /></h3>
                            <p className='text-black font-medium text-[24px]'>Awards</p>
                        </div>
                    </Flex>
                </div>
            </Container>
        </section>
        </>
    )
}

export default Achievement