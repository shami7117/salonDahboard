"use client";
import Image from 'next/image';
import styles from './terms.module.css';
import { RevealWrapper } from "next-reveal";


export default function TermsAndConditions() {
  return (
    <div>

      <div className="w-full">
        <Image
          src={"/images/face.jpg"}
          alt="img"
          width={1000}
          height={1000}
          className="w-full h-[30vh] object-cover sm:h-[55vh]"
        />
      </div>



      <div className="w-full h-auto lg:h-[761px] mt-10 bg-[#FFFFFF] flex flex-col items-center justify-center">
        <p className={`${styles.introHead} mb-4 text-center`} style={{ color: '#F26A5A' }}>
          {"terms & conditions".toUpperCase()}
        </p>
        <div
          className="w-[83px] h-1 md:h-3 mb-6"
          style={{ backgroundColor: "#F26A5A" }}
        ></div>
        <div className='flex flex-col lg:flex-row justify-center mt-[30px] mb-[40px]'>
          <RevealWrapper
            className='flex flex-col lg:flex-row justify-center mt-[30px] mb-[40px]'
            rotate={{ x: 0, y: -12, z: 0 }}
            origin="bottom"
            delay={200}
            duration={1000}
            distance="200px"
            reset={true}
            viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <div className='flex flex-col w-[330px] sm:w-[570px] lg:w-[300px] xl:w-[350px] h-auto xl:h-[480px] text-justify mx-3 xl:mx-6 mb-5 sm:mb-0'>
              <div className='w-full sm:w-[100%] lg:w-full' style={{ fontSize: '14px', lineHeight: '24px', fontFamily: "'Lato', sans-serif" }}>
                Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt ut
                labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in tufpoy
                voluptate velit esse cillum dolore eu fugiat nulla parieratur. Excepteur sint occaecat cupidatat.
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in tufpoy.
              </div>
              <div>
                <Image src={'/images/Books.png'} alt='img' width={200} height={200} className='w-full object-cover sm:w-[100%] lg:w-full h-[263px] mt-5' />
              </div>
            </div>
            <div className='w-[330px] sm:w-[570px] lg:w-[300px] xl:w-[350px] h-auto xl:h-[480px] text-justify mx-3 xl:mx-6'>
              <div style={{ fontSize: '14px', lineHeight: '24px', fontFamily: "'Lato', sans-serif" }}>
                Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                inventore veritatis et quasi ropeior architecto beatae vitae dicta sunt explicabo. Nemo eniem ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eosep
                quiklop ratione voluptatem sequi nesciunt. Neque porro quisquam est, quepi dolorem ipsum quia dolor
                srit amet, consectetur adipisci velit, seid quia non numquam eiuris modi tempora incidunt ut labore
                et dolore magnam aliquam quaerat iope voluptatem. <br /> Lorem ipsum dolor sit amet, consectetur adipisifwcing
                elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad minim
                veeniam, quis nostruklad exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat
                nulla parieratur. Excepteur sint occaecat.
              </div>
            </div>
            <div className='w-[330px] sm:w-[570px] lg:w-[300px] xl:w-[350px] h-auto xl:h-[500px] mx-3 xl:mx-6'>
              <Image src={'/images/pad.png'} alt='img' width={300} height={300} className='w-full object-cover sm:w-[100%] h-[450px] sm:h-[520px] lg:w-full mt-2' />
            </div>
          </RevealWrapper>
        </div>
      </div>
      {/* </RevealWrapper> */}
    </div>
  );
}
