import React from "react";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import Review from "./review";
import { useState } from "react";
import Map from "./map";
import Modal from "./Model";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RevealWrapper } from "next-reveal";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpenn, setIsOpenn] = useState(false);


  const handleToggle = () => {
    console.log("Button clicked"); // Check if the button click is being registered in the console

    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const openModal = () => {
    setShowModal(!showModal);
  };
  const openModal1 = () => {
    setShowModal1(!showModal1);
  };

  const openModal2 = () => {
    setShowModal2(!showModal2);
  };

  const closeModal = () => {
    setShowModal1(false);
    setShowModal2(false);

    setShowModal(false);
  };

  return (
    <div className="flex items-between  items-center max-w-[1200px] mx-auto flex-col px-4 ">
      <Review showModal={showModal} closeModal={closeModal} />
      <Map showModal={showModal1} closeModal={closeModal} />
      <Modal showModal={showModal2} closeModal={closeModal} />

      <div className="grid grid-cols-1 sm:grid-cols-[3fr_9fr] gap-4 w-full h-auto mt-5 md:mt-14 mb-4 ">
        <div className="flex justify-center">
          <Image
            src={"/images/explore-img.png"}
            width={1080}
            height={1080}
            alt="Image"
            className="w-full md:w-[300px] md:h-[170px] mb-10  "
          />
        </div>
        <div className=" self-start">
          <div className="flex flex-col sm:flex-row justify-evenly">
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
                onClick={() => {
                  openModal();
                }}
                className="mr-5 cursor-pointer"
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

          <div
            onClick={openModal1}
            className="flex cursor-pointer items-center mb-5 mt-[10px]"
          >
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

          <p className="text-[#707070] text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi
            ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          </p>

          <div className="relative z-10 ">
            <button
              className="py-2 transition-all-ease  px-1 bg-white flex items-center "
              onClick={handleToggle}
              style={{
                color: "#F26A5A",
                fontSize: "14px",
                lineHeight: "17px",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              {isOpen ? (
                <span className="text-[#F26A5A]  text-[12px] font-bold ">
                  {" "}
                  <BiMinus
                    size={17}
                    color="#F26A5A"
                    className="font-bold"
                  />{" "}
                </span>
              ) : (
                <BiPlus size={17} color="#F26A5A" className="font-bold flex" />
              )}
              <span className="pr-2">Show salon hours</span>
            </button>
            {isOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg py-4 pr-3 mt-1 w-60">
                <a
                  href="#"
                  className="block px-2 py-0 "
                  style={{ color: "#F26A5A" }}
                  onClick={() => handleOptionClick("Option 1")}
                >
                  Monday 1pm- 5pm
                </a>
                <a
                  href="#"
                  className="block px-2 py-0 "
                  style={{ color: "#F26A5A" }}
                  onClick={() => handleOptionClick("Option 2")}
                >
                  Tuesday 1pm- 10pm
                </a>
                <a
                  href="#"
                  className="block px-2 py-0 "
                  style={{ color: "#F26A5A" }}
                  onClick={() => handleOptionClick("Option 3")}
                >
                  Wednesday 11am- 5pm
                </a>
                <a
                  href="#"
                  className="block px-2 py-0 "
                  style={{ color: "#F26A5A" }}
                  onClick={() => handleOptionClick("Option 4")}
                >
                  Thursday 2pm- 8pm
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid w-full  lg:space-x-4 grid-cols-1 lg:grid-cols-[2fr_10fr]">
        <div className="hidden lg:block space-y-2 w-full cursor-pointer ">
          <div class="grid px-[100px] text-[#fff] py-2  hover:bg-[#F26A5A] transition-all ease-in duration-150 bg-[#DCBFAD] text-primary-content place-content-center">
            All
          </div>
          <div class="grid px-[100px] text-[#fff] py-2  hover:bg-[#F26A5A] transition-all ease-in duration-150 bg-[#DCBFAD] text-accent-content place-content-center">
            Hair
          </div>
          <div class="grid px-[100px] text-[#fff] py-2  hover:bg-[#F26A5A] transition-all ease-in duration-150 bg-[#DCBFAD] text-secondary-content place-content-center">
            Nails
          </div>
          <div class="grid px-[100px] whitespace-nowrap text-[#fff] hover:bg-[#F26A5A] transition-all ease-in duration-150 py-2  bg-[#DCBFAD] text-secondary-content place-content-center">
            Hair Removal
          </div>
          <div class="grid px-[100px] text-[#fff] py-2  bg-[#DCBFAD] hover:bg-[#F26A5A] transition-all ease-in duration-150 text-secondary-content place-content-center">
            Face
          </div>
          <div class="grid px-[100px] text-[#fff] py-2  bg-[#DCBFAD] hover:bg-[#F26A5A] transition-all ease-in duration-150 text-secondary-content place-content-center">
            Body
          </div>
        </div>

        <div className="w-full">
          {[1, 2, 3, 4].map(() => {
            return (
              <div key={Index}>
                <RevealWrapper
                  rotate={{ x: 0, y: -12, z: 0 }}
                  origin="bottom"
                  delay={200}
                  duration={1000}
                  distance="200px"
                  reset={true}
                  viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                  <div className=" border-b-solid border-b-[2px] border-[#808285]  pb-8 mb-4">
                    <div className="flex flex-col justify-center items-end space-x-2  sm:flex-row">
                      <div className="flex-grow-0 w-full   mb-3 sm:mb-0">
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
                        <div className="flex items-center mt-1 sm:mt-4 w-full ">
                          <div
                            className="w-[48px] h-[50px] flex items-center justify-center"
                            style={{ backgroundColor: "#F9AF9C" }}
                          >
                            <center>
                              <BsCalendar
                                size={22}
                                color="white"
                                className=""
                              />
                            </center>
                          </div>
                          <input
                            type="date"
                            placeholder="Date..."
                            className="h-[50px] w-full pl-3 outline-none border border-solid border-gray-300"
                            style={{
                              color: "#707070", // Change the text color to #F26A5A    backgroundColor:
                              fontSize: "14px",
                              lineHeight: "17px",
                              fontFamily: "'Lato', sans-serif",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex-grow-0 w-full   mb-3 sm:mb-0">
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
                        <div className="flex items-center mt-2 sm:mt-4 w-full ">
                          <div
                            className="w-[50px] h-[50px] flex items-center justify-center "
                            style={{ backgroundColor: "#F9AF9C" }}
                          >
                            <center>
                              <GiBackwardTime size={27} color="white" />
                            </center>
                          </div>
                          <input
                            type="text"
                            placeholder="Time..."
                            className="h-[50px] w-full    pl-3 outline-none border border-solid border-gray-300"
                            style={{
                              color: "#808285",
                              fontSize: "14px",
                              lineHeight: "17px",
                              fontFamily: "'Lato', sans-serif",
                            }}
                          />
                        </div>
                        
                      </div>
                      <div className="flex-grow-0 w-full   mb-3 sm:mb-0">
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
                        <div className="flex items-center mt-2 sm:mt-4 w-full  border border-solid border-gray-300">
                          <div
                            className="w-[50px] h-[50px] flex items-center justify-center"
                            style={{ backgroundColor: "#F9AF9C" }}
                          >
                            <center>
                              <AiOutlineUser size={25} color="white" />
                            </center>
                          </div>
                          <input
                            type=""
                            placeholder="Specialist"
                            className="h-[48px] w-full pl-4 outline-none"
                            style={{
                              color: "#808285",
                              fontSize: "14px",
                              lineHeight: "17px",
                              fontFamily: "'Lato', sans-serif",
                            }}
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          openModal2();
                        }}
                        className="btn-primary w-full sm:w-auto px-11 h-[50px]  rounded-[4px]"
                        style={{
                          backgroundColor: "#F26A5A",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "12px",
                          fontWeight: "600",
                          fontFamily: "'Lato', sans-serif",
                        }}
                      >
                        Select
                      </button>
                    </div>
                    <p className="text-[#F26A5A] text-[14px] cursor-pointer mt-4">
                      + See treatment details
                    </p>
                  </div>
                </RevealWrapper>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
