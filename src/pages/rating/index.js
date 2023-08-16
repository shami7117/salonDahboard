import React from 'react'
import { RevealWrapper } from "next-reveal";
import styles from './about.module.css';
import { BsStarFill } from "react-icons/bs";

import Image from 'next/image';

const index = () => {
    return (
        <div className=''>
            <div className='w-full'>
                <Image src={'/images/rating.jpg'} alt='img' width={1000} height={1000} className='w-full h-[30vh] sm:h-[50vh] object-cover ' />
            </div>
            <RevealWrapper
                rotate={{ x: 0, y: -12, z: 0 }}
                origin="bottom"
                delay={200}
                duration={1000}
                distance="200px"
                reset={true}
                viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
                <div className="w-full bg-white flex flex-col  items-center justify-start ">
                    <p className={`${styles.introHead}  mb-2 text-center`}>
                        {"Ratings".toUpperCase()}
                    </p>
                    <div
                        className="w-[83px] h-1 md:h-3 mb-3"
                        style={{ backgroundColor: "#F26A5A" }}
                    ></div>
                    <p className='text-[14px] text-[#808285] max-w-[350px] text-center'>
                        Ratings play a crucial role in evaluating the quality and performance of products, services, and content, helping consumers make informed decisions.
                    </p>
                </div>
            </RevealWrapper>

            <form className='flex px-4 flex-col justify-center items-center'>
                <div className='flex '>
                    <BsStarFill size={40} color='#e8b923' className='my-5' />
                    <BsStarFill size={40} color='#e8b923' className='my-5' />
                    <BsStarFill size={40} color='#e8b923' className='my-5' />
                    <BsStarFill size={40} color='#e8b923' className='my-5' />
                    <BsStarFill size={40} color='#e8b923' className='my-5' />

                </div>
                <textarea
                    placeholder="Give your Feedback"
                    className="w-[305px] md:w-[744px] h-[200px] outline-none bg-white pt-4 pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
                />
                <button className={` btn-primary h-[48px] mt-6 px-5  sm:mt-12 mb-12 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>Submit</button>

            </form>

        </div>
    )
}

export default index