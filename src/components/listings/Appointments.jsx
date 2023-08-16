"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';
import { BsFilter } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { ImCancelCircle } from 'react-icons/im';
import { FiEdit2 } from 'react-icons/fi';
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import Map from "./map.js"

const data = [
  {
    id: "1",
    image: "/images/die.png",
  },
  {
    id: "2",
    image: "/images/hands.png",
  },
  {
    id: "3",
    image: "/images/hair.png",
  },
  {
    id: "4",
    image: "/images/face.png",
  },
];
const appoint = [1, 2];
const Appointments = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCount, setIsCount] = useState(appoint);
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);

  const modelRef = useRef(null);
  const [showModel, setShowModel] = useState(true);


  const [showModal1, setShowModal1] = useState(false);


  const openModal1 = () => {
    setShowModal1(!showModal1);
  };

  const closeModal = () => {
    setShowModal1(false);
  };


  // useEffect(() => {
  //   // Add event listener when the component mounts
  //   document.addEventListener('click', handleClickOutside);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  // const handleClickOutside = (event) => {
  //   if (modelRef.current && !modelRef.current.contains(event.target)) {
  //     // Clicked outside the model, close it
  //     setIsOpen(false);
  //   }
  // };
  const appointments = () => {
    if (isCount == 0) {
      setOpen(false);
    } else {
      const count = appoint.splice(1, 1);
      setIsCount(count);
    }
  }
  const func = () => {
    setOpen(!open)
  }

  const handleToggle = () => {
    console.log('Button clicked'); // Check if the button click is being registered in the console

    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div
      className="w-full overflow-hidden  flex items-center justify-center"
      style={{ backgroundColor: "#F2F2F2", border: "1px solid #707070" }}
    >
      <Map showModal={showModal1} closeModal={closeModal} />

      <div className="w-full xl:w-[87%] h-auto bg-white md:mt-[106px]">
        <div className="flex items-center justify-end mt-12 px-4 md:mr-12 relative">
          <div
            className="flex items-center w-full  md:w-[195px]  mt-2"
            style={{ backgroundColor: "#F2F2F2" }}
          >
            <div
              className="w-[50px] h-[50px]"
              style={{ backgroundColor: "#F26A5A" }}
            >
              <center>
                <BsFilter size={24} color="white" className="mt-3" />
              </center>
            </div>
            <div
              className="h-[50px] outline-none ml-3 pt-4"
              style={{
                color: "#808285",
                fontSize: "14px",
                lineHeight: "17px",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              Filter and Sort
            </div>
          </div>
        </div>
        <>
          <div className="flex items-center justify-center mt-4 mb-4">
            <div className="w-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {data?.map((item) => (
                  <>
                    <RevealWrapper key={item?.id}

                      rotate={{ x: 0, y: -12, z: 0 }}
                      origin="bottom"
                      delay={200}
                      duration={1000}
                      distance="200px"
                      reset={true}
                      viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    >
                      <div
                        key={item?.id}
                        className="flex mb-[240px] sm:mb-[150px] md:mb-0 flex-col lg:flex-row items-start md:items-center justify-between h-auto lg:h-[472px] mt-10 lg:mt-0"
                      >
                        <div className="w-full mb-5 lg:mb-0 md:w-[50%]">
                          <Image
                            src={item?.image}
                            width={300}
                            height={300}
                            alt="Image"
                            className="w-full md:w-[375px] h-[375px] "
                          />
                        </div>


                        <div className="w-full md:w-[75%] h-[375px] mt-4 md:mt-0 md:ml-4">
                          <Link href={"/explore"} className="w-[85%] xl:w-[70%] flex flex-col sm:flex-row sm:items-center justify-between">
                            <div>
                              <p
                                className="text-2xl font-bold mb-2"
                                style={{
                                  fontSize: "18px",
                                  lineHeight: "22px",
                                  fontFamily: "'Lato', sans-serif",
                                  color: "#707070",
                                }}
                              >
                                Body Temple Beauty
                              </p>
                            </div>
                            <div className="flex flex-row justify-between w-[100%] sm:w-[60%]">
                              <div className="flex items-center">
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
                          </Link>
                          <div onClick={openModal1} className="flex cursor-pointer items-center mb-5 mt-[5px]">
                            <MdLocationPin size={14} color="#707070" />
                            <span
                              className="font-bold ml-[5px]"
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
                          <p
                            className="mb-2 w-[90%]"
                            style={{
                              color: "#707070",
                              fontSize: "14px",
                              lineHeight: "20px",
                              fontFamily: "'Lato', sans-serif",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,
                            quiepakis nostrud exercitation ullamco laboris nsi ut
                            aliquip ex ea comepmodo consetquat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse
                            cfgillum dolore eutpe fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident,
                          </p>
                          <div className="flex items-center mt-2">

                            {/* <button className="text-gray-800 py-2 px-1 rounded-md" style={{color: '#F26A5A',fontSize: '14px', lineHeight: '17px', fontFamily: "'Lato', sans-serif"}}>
                      show salon hours
                    </button> */}
                            <div className="relative inline-block">
                              <button
                                className="py-2 transition-all-ease  px-1 bg-white flex items-center justify-between"
                                onClick={handleToggle}
                                style={{
                                  color: "#F26A5A",
                                  fontSize: "14px",
                                  lineHeight: "17px",
                                  fontFamily: "'Lato', sans-serif",
                                }}

                              >
                                {isOpen ? <span className="text-[#F26A5A] mr-1  text-[12px] font-bold">-</span> : <BiPlus
                                  size={16}
                                  color="#F26A5A"
                                  className="font-bold"
                                />}
                                <span className="mr-2">Show salon hours</span>
                              </button>
                              {isOpen && (
                                <div className="absolute bg-white transition-all duration-300 ease-out cursor-pointer shadow-lg rounded-lg py-2 mt-2 w-60">
                                  <a
                                    href="#"
                                    className="block px-2 py-0"
                                    style={{ color: "#F26A5A" }}
                                    onClick={() => handleOptionClick("Option 1")}
                                  >
                                    Monday 1pm- 5pm
                                  </a>
                                  <a
                                    href="#"
                                    className="block px-2 py-0"
                                    style={{ color: "#F26A5A" }}
                                    onClick={() => handleOptionClick("Option 2")}
                                  >
                                    Tuesday 1pm- 10pm
                                  </a>
                                  <a
                                    href="#"
                                    className="block px-2 py-0"
                                    style={{ color: "#F26A5A" }}
                                    onClick={() => handleOptionClick("Option 3")}
                                  >
                                    Wednesday 11am- 5pm
                                  </a>
                                  <a
                                    href="#"
                                    className="block px-2 py-0"
                                    style={{ color: "#F26A5A" }}
                                    onClick={() => handleOptionClick("Option 4")}
                                  >
                                    Thursday 2pm- 8pm
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="mt-2">
                            <div className="flex flex-col  sm:flex-row">
                              <div className="flex-grow-0 w-full sm:w-[185px] lg:w-[180px] xl:w-[230px] mb-3 sm:mb-0">
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
                                <div className="flex items-center mt-1 sm:mt-4 w-full  sm:w-[185px] lg:[175px] xl:w-[225px]">
                                  <div
                                    className="w-[50px] h-[50px]"
                                    style={{ backgroundColor: "#F9AF9C" }}
                                  >
                                    <center>
                                      <BsCalendar
                                        size={22}
                                        color="white"
                                        className="mt-4"
                                      />
                                    </center>
                                  </div>
                                  <div className="input-container h-[50px] w-full bg-transparent sm:w-[135px] lg:w-[130px] xl:w-[175px] border border-solid border-gray-300">
                                    <input
                                      type="Date"
                                      placeholder="Date..."

                                      className="h-[50px] w-full bg-transparent sm:w-[135px] lg:w-[130px] xl:w-[175px] pl-3 outline-none border border-solid border-gray-300"
                                      style={{
                                        color: "#808285",
                                        fontSize: "14px",
                                        lineHeight: "17px",
                                        fontFamily: "'Lato', sans-serif",
                                      }}
                                    />
                                  </div>



                                </div>
                              </div>
                              <div className="flex-grow-0 w-full sm:w-[143px] lg:w-[145px] xl:w-[165px] sm:ml-[5px] xl:ml-0 mb-3 sm:mb-0">
                                <p
                                  style={{
                                    color: "#707070",
                                    fontSize: "14px",
                                    lineHeight: "17px",
                                    fontFamily: "'Lato', sans-serif",
                                  }}
                                >
                                  1 hour
                                </p>
                                <div className="flex items-center mt-2 sm:mt-4 w-full sm:w-[143px] lg:w-[145px] xl:w-[165px]">
                                  <div
                                    className="w-[50px] h-[50px] pr-6"
                                    style={{ backgroundColor: "#F9AF9C" }}
                                  >
                                    <center>
                                      <GiBackwardTime
                                        size={25}
                                        color="white"
                                        className="mt-4 ml-3"
                                      />
                                    </center>
                                  </div>
                                  <input
                                    type="time"
                                    placeholder="Time..."
                                    className="h-[50px] w-full  bg-transparent sm:w-[94px] lg:w-[96px] xl:w-[116px] pl-3 outline-none border border-solid border-gray-300"
                                    style={{
                                      color: "#808285",
                                      fontSize: "14px",
                                      lineHeight: "17px",
                                      fontFamily: "'Lato', sans-serif",
                                    }}
                                  />
                                  {/* <TimePicker className="h-[50px] w-full  rounded-none sm:w-[94px] lg:w-[96px] xl:w-[116px] pl-3 outline-none border border-solid border-gray-300" /> */}

                                </div>
                              </div>
                              <div className="flex-grow-0 sm:ml-[5px] w-full  md:w-[310px] sm:w-[210px] lg:w-[200px] xl:w-[247px] mb-3 sm:mb-0">
                                <p
                                  style={{
                                    color: "#F26A5A",
                                    fontSize: "14px",
                                    lineHeight: "17px",
                                    fontFamily: "'Lato', sans-serif",
                                  }}
                                >
                                  $30 <del style={{ color: "#707070" }}>$40</del>
                                </p>
                                <div className="flex items-center mt-2 sm:mt-4 w-full sm:w-[205px] lg:w-[195px] xl:w-[247px] border border-solid border-gray-300">
                                  <div
                                    className="w-[50px] h-[48px] pr-6"
                                    style={{ backgroundColor: "#F9AF9C" }}
                                  >
                                    <center>
                                      <AiOutlineUser
                                        size={25}
                                        color="white"
                                        className="mt-3 ml-3"
                                      />
                                    </center>
                                  </div>
                                  <select
                                    type="text"
                                    placeholder="Specialist"
                                    className=" w-full bg-transparent sm:w-[135px] lg:w-[130px] xl:w-[197px] ml-2 pl-4 outline-none"
                                    style={{
                                      color: "#808285",
                                      fontSize: "14px",
                                      lineHeight: "17px",
                                      fontFamily: "'Lato', sans-serif",
                                    }}
                                  >
                                    <option>Hair</option>
                                    <option>Nails</option>
                                    <option>All</option>
                                    <option>Body</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                setOpen(true);
                                if (isCount == 0) {
                                  appoint.push(3, 4)
                                }
                              }}
                              className="btn-primary w-full   transition-opacity duration-500 ease-out cursor-pointer  sm:w-[250px] xl:w-[273px] h-[48px] mt-6 mb-6 lg:mb-0 rounded-[4px]"
                              style={{
                                backgroundColor: "#F26A5A",
                                color: "white",
                                fontSize: "16px",
                                lineHeight: "12px",
                                fontWeight: "600",
                                fontFamily: "'Lato', sans-serif",
                              }}
                            >
                              Select Appointment
                            </button>
                          </div>
                        </div>
                      </div>
                    </RevealWrapper>
                    <hr className="h-1" />
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
        {open && (
          <center className="z-50 absolute inset-52 mt-[50rem]">
            <div className="bg-[#fff] rounded-lg  max-w-[1000px] mx-auto  shadow-xl">
              <div
                className="w-full rounded-lg grid grid-cols-3 p-4"
                style={{ backgroundColor: "#F26A5A" }}
              >
                <h3 className="text-xl mt-[10px] font-semibold text-white">
                  2 Appointment Selected
                </h3>
                <Link href={"/checkout"}
                  className="px-3 h-[48px] self-end flex items-center justify-center "
                  style={{
                    backgroundColor: "#F9AF9C",
                    borderRadius: "4px",
                    fontSize: "16px",
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "19px",
                    color: "white",
                  }}
                >
                  <p className="text-sm">Checkout</p>
                </Link>
                <button
                  type="button"
                  onClick={() => func()}
                  // onClick={() => setOpen(false)}
                  className="text-gray-400 bg-transparent rounded-lg text-sm mt-2 w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"

                >
                  <div
                    style={{
                      width: "20px",
                      height: "5px",
                      backgroundColor: "white",
                    }}
                  ></div>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              {isCount.map((index) => {
                return <div key={index} className="flex py-6  flex-col md:flex-row  md:justify-center h-auto bg-[#fff]  ">
                  <div className="flex justify-center items-start">
                    <Image
                      src={"/images/die.png"}
                      width={50}
                      height={50}
                      alt="Image"
                      className="w-full h-[300px] md:h-auto md:rounded-[50%] md:ml-0 xl:ml-[58px] mb-7"
                    />

                  </div>
                  <div className="  sm:ml-10 sm:mr-10 md:ml-8 lg:ml-16">

                    <div className="flex relative flex-col sm:flex-row justify-evenly">
                      <div className='flex absolute space-x-2 bottom-[-20px] sm:bottom-0 md:top-0 right-0 justify-center '>
                        <FiEdit2 className='cursor-pointer' size={20} color='#F26A5A' />

                        <ImCancelCircle className='cursor-pointer' size={20} color='#F26A5A' />
                      </div>
                      <div>
                        <p
                          className="text-2xl font-bold mb-2 mr-12"
                          style={{
                            fontSize: "18px",
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
                    <div className="flex  items-center mb-5 mt-[10px]">


                      <MdLocationPin size={14} color="#707070" />
                      <span
                        className="font-bold ml-[5px]"
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
                      <div class="flex flex-col sm:flex-row mt-6">
                        <div className="flex">
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
                        <div className="flex mt-3 sm:mt-0 ml-0 sm:ml-[34px]">
                          <GiBackwardTime size={20} color="#F26A5A" />
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
                        <div className="flex mt-3 sm:mt-0 ml-0 sm:ml-[72px]">
                          <AiOutlineUser size={20} color="#F26A5A" />
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

                </div>
              })}


            </div>
          </center>
        )}
      </div>




      {/* Drawer */}

      {/* <div class="text-center">
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
          Show bottom drawer
        </button>
      </div>

      <div id="drawer-bottom-example" class="fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none" tabindex="-1" aria-labelledby="drawer-bottom-label">
        <h5 id="drawer-bottom-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>Bottom drawer</h5>
        <button type="button" data-drawer-hide="drawer-bottom-example" aria-controls="drawer-bottom-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
        <a href="#" class="px-4 py-2 mr-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg></a>
      </div> */}

      {/* Drawer */}
    </div>
  );
};

export default Appointments;
