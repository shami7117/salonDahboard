import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";
import { useRouter } from "next/router";

const Modal = ({ showModal, closeModal }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    console.log("Button clicked"); // Check if the button click is being registered in the console

    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={` backdrop-brightness-50   fixed   top-0 left-0 px-4  py-6 z-50  flex h-full items-center md:px-[80px] md:py-[60px] justify-center ${showModal ? 'visible' : 'invisible'
        }`}
    >
      <div className="bg-white px-4 py-6 overflow-y-scroll md:overflow-y-hidden pb-4  h-full lg:h-[472px] rounded-lg shadow-lg  z-10">
        <div className="flex md:mb-[240px] relative sm:mb-[150px]  flex-col lg:flex-row items-start md:items-center justify-between h-full lg:h-[472px] lg:mt-0">
          <button
            className="lg:mt-4 absolute  top-0 right-0 text-white sm:px-4 sm:py-2 rounded"
            onClick={closeModal}
          >
            <ImCancelCircle size={30} color="#F26A5A" />
          </button>
          <div className="w-full mb-5 lg:mb-0 md:w-[50%]">
            <Image
              src={"/images/die.png"}
              width={300}
              height={300}
              alt="Image"
              className="w-full md:w-[375px] md:h-[375px] "
            />
          </div>
          <div className="w-full md:w-[75%]  lg:h-[375px] mt-4 md:mt-0 md:ml-4">
            <div className="w-[85%] xl:w-[70%] flex flex-col sm:flex-row sm:items-center justify-between">
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
            </div>
            <div className="flex items-center mb-5 mt-[5px]">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quiepakis nostrud exercitation ullamco
              laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cfgillum dolore
              eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident,
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
                  {isOpen ? (
                    <span className="text-[#F26A5A] mr-1  text-[12px] font-bold">
                      -
                    </span>
                  ) : (
                    <BiPlus size={16} color="#F26A5A" className="font-bold" />
                  )}
                  <span className="mr-2">Show salon hours</span>
                </button>
                {isOpen && (
                  <div className="absolute bg-white shadow-lg rounded-lg py-2 mt-2 w-60">
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
                        <BsCalendar size={22} color="white" className="mt-4" />
                      </center>
                    </div>
                    <input
                      type="text"
                      placeholder="Date..."
                      className="h-[50px] w-full sm:w-[135px] lg:w-[130px] xl:w-[175px] pl-3 outline-none border border-solid border-gray-300"
                      style={{
                        color: "#808285",
                        fontSize: "14px",
                        lineHeight: "17px",
                        fontFamily: "'Lato', sans-serif",
                      }}
                    />
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
                      type="text"
                      placeholder="Time..."
                      className="h-[50px] w-full   sm:w-[94px] lg:w-[96px] xl:w-[116px] pl-3 outline-none border border-solid border-gray-300"
                      style={{
                        color: "#808285",
                        fontSize: "14px",
                        lineHeight: "17px",
                        fontFamily: "'Lato', sans-serif",
                      }}
                    />
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
                    <input
                      type="text"
                      placeholder="Specialist"
                      className="h-[48px] w-full  sm:w-[135px] lg:w-[130px] xl:w-[197px] ml-2 pl-4 outline-none"
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
              <button
                onClick={() => {
                  router.push("/listings");
                  setOpen(true);
                }}
                className="btn-primary w-full   sm:w-[250px] xl:w-[273px] h-[48px] md:mt-6 md:mb-6 lg:mb-0 rounded-[4px]"
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
      </div>
    </div>
  );
};

export default Modal;
