import React, { useState } from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import { RevealWrapper } from "next-reveal";


function Contactus() {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <div>

      <div className='w-full'>
        <Image src={'/images/contact.png'} alt='img' width={1000} height={1000} className='w-full h-[30vh] sm:h-[50vh] object-cover' />
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
        <div className="w-full bg-white flex flex-col items-center justify-center mb-[10px]">
          <p className={`${styles.introHead} mb-4 text-center`}>
            {"Want to talk with us?".toUpperCase()}
          </p>
          <div
            className="w-[83px] h-1 md:h-3 mb-6"
            style={{ backgroundColor: "#F26A5A" }}
          ></div>
          <p className='mb-4 px-16 text-sm md:text-lg text-center'>Feedback received. We will get back to you shortly.</p>
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
        <div className="flex flex-col mt-8 justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center">
            <input
              type="text"
              placeholder="Name"
              className="w-[305px] md:w-[359px] h-[50px] outline-none bg-white md:mr-3 pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-[305px] md:w-[359px] outline-none h-[50px] bg-white md:ml-3 pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-[305px] md:w-[744px] h-[200px] outline-none bg-white pt-4 pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
          />
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
        <div className="flex flex-col md:flex-row justify-center mt-15">
          <div className="flex justify-center items-center mr-[100px] md:mr-0 sm:ml-0">
            <label class="relative ml-1 inline-flex items-center cursor-pointer">
              <input
                onChange={handleToggle} type="checkbox" value="" class="sr-only  peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none =  rounded-[6px] sm:mr-2 peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[6px] after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F26A5A]"></div>

              <label htmlFor="toggle" className='ml-1'>Send my information</label>

            </label>


          </div>
          <div className="flex justify-center items-center ml-0 md:ml-12 mr-[100px] md:mr-12 mt-[16px] md:mt-0">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                onChange={handleToggle} type="checkbox" value="" class="sr-only  peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none =  rounded-[6px] sm:mr-2 peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[6px] after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F26A5A]"></div>

              <label htmlFor="toggle" className='ml-1'>Send me promotions</label>

            </label>
          </div>
          <center>
            <button className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-12 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>Send</button>
          </center>
        </div>
      </RevealWrapper>





    </div>
  )
}

export default Contactus