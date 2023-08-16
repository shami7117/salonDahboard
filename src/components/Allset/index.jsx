import React from 'react'
import styles from './all.module.css'
import Image from 'next/image'
import { RevealWrapper } from "next-reveal";


function Allset() {
  return (
    <div>
      <RevealWrapper
        rotate={{ x: 0, y: -12, z: 0 }}
        origin="bottom"
        delay={200}
        duration={1000}
        distance="200px"
        reset={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <div className='w-full'>
          <Image src={'/images/allset.png'} alt='img' width={1000} height={1000} className='w-full h-[30vh] sm:h-[50vh] object-cover' />
        </div>
      </RevealWrapper>

      <RevealWrapper
        rotate={{ x: 0, y: -12, z: 0 }}
        origin="bottom"
        delay={200}
        duration={1000}
        distance="200px"
        reset={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <div className="w-full bg-white flex flex-col items-center justify-center mb-[10px]">
          <p className={`${styles.introHead} mb-4 text-center`}>
            {"You're all set!".toUpperCase()}
          </p>
          <div
            className="w-[83px] h-1 md:h-3 mb-6"
            style={{ backgroundColor: "#F26A5A" }}
          ></div>
          <div className="text-center text-[#707070]" style={{ fontSize: "14px", lineHeight: "24px", fontFamily: "'Lato', sans-serif" }}>
            Thank you for joining Eznaah!
          </div>
        </div>
      </RevealWrapper>


      <RevealWrapper
        rotate={{ x: 0, y: -12, z: 0 }}
        origin="bottom"
        delay={200}
        duration={1000}
        distance="200px"
        reset={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <div>
            <button className={`w-[273px] btn-primary h-[48px] sm:mr-5 mt-3 sm:mt-10 mb-6 sm:mb-12 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '14px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>Back to deals</button>
          </div>
          <div>
            <button className={`w-[273px] btn-primary h-[48px] sm:ml-5 mt-3 sm:mt-10 mb-12 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '14px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>Back to deals</button>
          </div>
        </div>
      </RevealWrapper>
    </div>
  )
}

export default Allset