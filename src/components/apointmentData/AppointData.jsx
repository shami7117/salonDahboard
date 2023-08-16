import Image from 'next/image'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCalendar } from 'react-icons/bs'
import { GiBackwardTime } from 'react-icons/gi'
import { MdLocationPin } from 'react-icons/md'
import { RevealWrapper } from "next-reveal";


const AppointData = ({ index }) => {
  return (
    <div>
      <div key={index} className="flex px-4 flex-col md:flex-row md:ml-7 md:justify-center h-auto mt-5 md:mt-14 mb-4 xl:ml-40">
        <div className="flex justify-center">
          <Image
            src={"/images/die.png"}
            width={300}
            height={300}
            alt="Image"
            className="w-full  sm:w-[232px] md:h-[182px] md:ml-0 xl:ml-[58px] mb-7"
          />
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
          <div className=" sm:ml-10 sm:mr-10 md:ml-8 lg:ml-16">
            <div className="flex flex-col sm:flex-row justify-evenly">
              <div>
                <p
                  className="text-2xl font-bold mb-2 mr-12"
                  style={{
                    fontSize: "16px",
                    lineHeight: "22px",
                    fontFamily: "'Lato', sans-serif",
                    color: "#707070",
                  }}
                >
                  Body Temple Beauty
                </p>
              </div>
              <div className="flex flex-row justify-between w-[100%] md:w-[49%] xl:w-[43%] mr-auto">
                <div className="flex items-center mb-auto">
                  <span
                    className="text-sm text-gray-500 mr-2"
                    style={{
                      fontSize: "14px",
                      lineHeight: "17px",
                      color: "#F26A5A",
                    }}
                  >
                    4.5
                  </span>
                  <span className="ml-1 text-yellow-500">
                    <div class="flex items-center space-x-1">
                      <svg
                        class="w-4 h-4"
                        style={{ color: "#F26A5A" }}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4"
                        style={{ color: "#F26A5A" }}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4"
                        style={{ color: "#F26A5A" }}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4"
                        style={{ color: "#F26A5A" }}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4"
                        style={{ color: "#F26A5A", opacity: "0.6" }}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </span>
                </div>
                <div
                  className="mr-5"
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    color: "#707070",
                  }}
                >
                  127 Reviews
                </div>
              </div>
            </div>
            <div className="flex items-center mb-5 mt-[10px]">
              <MdLocationPin size={14} color="#707070" />
              <span
                className="font-normal ml-[5px]"
                style={{
                  color: "#707070",
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                123 rue Sherbrooke , Montreal, QC
                <hr
                  className="border-b-1 border-gray-400"
                  style={{ width: "100%" }}
                />
              </span>
            </div>
            <div className="mt-6">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-grow-0 w-[310px] sm:w-[185px] lg:w-[180px] xl:w-[230px] mb-3 sm:mb-0">
                  <p
                    style={{
                      color: "#707070",
                      fontSize: "14px",
                      lineHeight: "17px",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  >
                    Abdomen/ Bikini Waxing
                  </p>
                </div>
                <div className="flex-grow-0 w-[310px] sm:w-[88px] sm:ml-[5px] xl:ml-0 mb-3 sm:mb-0">
                  <p
                    style={{
                      color: "#707070",
                      fontSize: "14px",
                      lineHeight: "17px",
                      fontFamily: "'Lato', sans-serif",
                      fontStyle: "italic",
                    }}
                  >
                    Subtotal
                  </p>
                </div>
                <div className="flex-grow-0 sm:ml-[5px] w-[310px] sm:w-[210px] lg:w-[200px] xl:w-[247px] mb-3 sm:mb-0">
                  <p
                    style={{
                      color: "#F26A5A",
                      fontSize: "14px",
                      lineHeight: "17px",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  >
                    $30
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-center sm:flex-row mt-6">
                <div className="flex items-center">
                  <BsCalendar size={20} color="#F26A5A" />
                  <span
                    className="ml-[12px]"
                    style={{
                      color: "#808285",
                      fontSize: "14px",
                      lineHeight: "17px",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  >
                    November 22, 2019
                  </span>
                </div>
                <div className="flex  items-center mt-3 sm:mt-0 ml-0 sm:ml-[34px]">
                  <GiBackwardTime size={26} color="#F26A5A" />
                  <span
                    className="ml-[12px]"
                    style={{
                      color: "#808285",
                      fontSize: "14px",
                      lineHeight: "17px",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  >
                    12-1 PM
                  </span>
                </div>
                <div className="flex items-center mt-3 sm:mt-0 ml-0 sm:ml-[72px]">
                  <AiOutlineUser size={25} color="#F26A5A" />
                  <span
                    className="ml-[12px]"
                    style={{
                      color: "#808285",
                      fontSize: "14px",
                      lineHeight: "17px",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  >
                    Jane
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>

    </div>
  )
}

export default AppointData