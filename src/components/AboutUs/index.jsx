import React from 'react'
import styles from './about.module.css';
import Image from 'next/image';
import { RevealWrapper } from "next-reveal";
function About() {
  return (
    <div>
      <div className='w-full'>
        <Image src={'/images/dryer.jpg'} alt='img' width={1000} height={1000} className='w-full h-[30vh] sm:h-[50vh] object-cover' />
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
            {"about us".toUpperCase()}
          </p>
          <div
            className="w-[83px] h-1 md:h-3 mb-3"
            style={{ backgroundColor: "#F26A5A" }}
          ></div>
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
        <div className='flex flex-col md:flex-row justify-center items-center mt-[40px] sm:mt-[100px] px-10 max-w-[1200px] mx-auto w-full overflow-x-hidden mb-[70px] sm:mb-[122px]'>
          <div className='flex md:mr-[30px] flex-col justify-between items-between m-auto mb-[50px] sm:mb-0 w-full md:w-[50%] h-[610px]  text-center md:text-left'>
            <div>
              <div className='text-[20px] md:text-[30px] mt-4' style={{ lineHeight: '50px', fontFamily: "'Lato', sans-serif", fontWeight: '700', color: '#707070' }}>
                WHO WE ARE
              </div>
              <div className='w-[95%] lg:w-[80%] my-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in uienply
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                norin proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className='flex w-full h-[270px]'>
              <Image src={'/images/who.png'} alt='img' width={400} height={400} className='w-full md:h-[270px]' />
            </div>
          </div>

          <div className='w-full md:w-[50%] m-auto md:h-[610px] pb-7 md:pb-0   bg-[#F26A5A]'>
            <div>
              <Image src={'/images/colortwo.png'} alt='alt' width={400} height={400} className='w-full md:h-[340px]' />
            </div>
            <div className='flex items-center flex-col md:flex-row'>
              <Image src={'/images/avatar.png'} alt='alt' width={250} height={250} className='w-[80px] h-[80px] m-6 lg:m-10' />
              <div className='md:mt-16 text-center md:text-left px-4 md:px-0'>
                <div style={{ fontSize: '18px', lineHeight: '22px', fontWeight: '600', fontFamily: "'Lato', sans-serif", color: '#F3F3F3' }}>Founder</div>
                <div className='mt-6' style={{ fontSize: '14px', lineHeight: '22px', fontFamily: "'Lato', sans-serif", color: '#F3F3F3' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  ero labore et dolore magna aliqua. Ut enim ad minim veniam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>


      <div className='flex flex-col md:flex-row items-center justify-center m-auto w-full  md:h-[505px] bg-[#F2F2F2]'>
        <RevealWrapper
          rotate={{ x: 0, y: -12, z: 0 }}
          origin="bottom"
          delay={200}
          duration={1000}
          distance="200px"
          reset={true}
          viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <div className='flex flex-col md:flex-row items-center justify-center m-auto'>
            <div className='flex flex-col  items-center justify-center w-[300px] md:w-[360px] h-[272px] mt-10 md:mt-0 ml-0 sm:ml-10 xl:ml-0 bg-white'>
              <div className='ml-10 mr-10 text-justify' style={{ fontStyle: 'italic', fontSize: '14px', lineHeight: '20px', fontFamily: "'Lato', sans-serif" }}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className='flex mt-10'>
                <div className='w-[6px] h-[6px] bg-[#F26A5A] rounded-[3px] mr-5'></div>
                <div className='w-[6px] h-[6px] bg-[#F26A5A] rounded-[3px] mr-5'></div>
                <div className='w-[6px] h-[6px] bg-[#F26A5A] rounded-[3px] mr-5'></div>
                <div className='w-[6px] h-[6px] bg-[#F26A5A] rounded-[3px] mr-5'></div>
              </div>
            </div>
            <div className='w-[300px] md:w-[600px] h-[272px] mb-10 sm:mb-0 ml-0 md:ml-[75px] xl:ml-[100px] mt-10'>
              <div className='text-[20px] md:text-[30px]' style={{ lineHeight: '50px', fontWeight: '700', fontFamily: "'Lato', sans-serif", color: '#87898C' }}>Our Mission</div>
              <div className='mt-6' style={{ fontSize: '14px', lineHeight: '22px', fontFamily: "'Lato', sans-serif", color: '#707070' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                poriti laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in uienply voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat norin proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>

        </RevealWrapper>
      </div>
    </div>
  )
}

export default About