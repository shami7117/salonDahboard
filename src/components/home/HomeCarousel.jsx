import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos } from "react-icons/md";
import Modal from "./Model.js";
import { useState, useRef, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Map from "./map.js"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Link from "next/link.js";

const HomeCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const openModal1 = () => {
    setShowModal1(!showModal1);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowModal1(false);
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slideSwiperInstance, slideSetSwiperInstance] = useState(null);

  const handleSlideClick = (index) => {
    if (swiperInstance && index >= 0) {
      // Slide to the clicked slide with centered: true
      setActiveSlide(index);
      swiperInstance.slideTo(index, 300);
    }
  };
  const slideHandleSlideClick = (index) => {
    if (slideSwiperInstance && index >= 0) {
      // Slide to the clicked slide with centered: true
      setActiveSlide(index);
      slideSwiperInstance.slideTo(index, 300);
    }
  };
  useEffect(() => {
    // The slideSwiperInstance will be set when the component mounts or when it changes
    if (slideSwiperInstance) {
      slideSwiperInstance.update(); // Ensure the Swiper instance is up-to-date
    }
  }, [slideSwiperInstance]);

  return (
    <div className="bg-[url('/images/deals.png')] md:h-full md:w-full bg-center">
      <Map showModal={showModal1} closeModal={closeModal} />
      <div className="backdrop-brightness-50 py-10 h-full w-full ">
        <h3 className=" text-[20px] md:text-[40px] pb-12  lg:text-[50px] font-[Quicksand] text-center text-[white] font-bold">
          EXPLORE OUR TOP DEAL
        </h3>
        <div className="px-3 max-w-[1500px] mx-auto  overflow-x-hidden">
          <Swiper
            // loop={true}
            // freeMode={true}

            onSwiper={(swiper) => { setSwiperInstance(swiper); }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={3}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={50}
            breakpoints={{
              300: { slidesPerView: 1, spaceBetween: 50 },
              700: { slidesPerView: 3, spaceBetween: 80 },
            }}

          >
            <SwiperSlide
              onClick={() => {
                handleSlideClick(1);
              }}

              className="h-auto "
            >
              <div class="w-full transition-all ease-in duration-300   rounded-lg   shadow bg-[white]">
                <a href="#">
                  <img
                    className="w-full rounded-t-lg h-full"
                    src="/images/flower.png"
                    alt=""
                  />
                </a>
                <div class="px-3 pt-1 md:px-5 md:pt-5 ">
                  <a>
                    <h5 class="mb-1 text-[18px] lg:text-[22px] font-bold tracking-tight text-[#707070]">
                      Body Temple Beauty
                    </h5>
                  </a>
                  <div>

                  </div>
                  <div className="flex flex-row justify-between w-[100%] sm:w-[75%]">
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
                      className="mr-5 flex "
                      style={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#707070",
                      }}
                    >
                      127 Reviews
                    </div>
                  </div>
                  <p onClick={openModal1} class="mb-1 cursor-pointer font-normal text-gray-700 dark:text-gray-400">
                    R123 Los Angles USA
                  </p>
                  <div class="mb-1 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>Waxing</p>
                    <p className="text-[#F26A5A]">$30</p>
                  </div>

                  <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>1 Hour</p>
                    <s>$40</s>
                  </div>
                </div>
                <button onClick={() => {
                  // handleSlideClick(1);
                  openModal();
                }} class="rounded-b-lg inline-flex items-center px-5 py-4 text-sm font-medium text-center text-[#FFFFFF]  w-full focus:ring-4 focus:outline-none bg-[#F26A5A]">
                  View Details <MdArrowForwardIos className="font-bold" />
                </button>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide onClick={() => {
              handleSlideClick(1);
            }}

              className="h-auto "
            >
              <div o class="transition-all ease-in duration-300  w-full   rounded-lg   shadow bg-[white]">
                <a href="# rounded-t-lg">
                  <img
                    className="w-full rounded-t-lg h-full"
                    src="/images/flower.png"
                    alt=""
                  />
                </a>
                <div class="px-3 pt-1 md:px-5 md:pt-5 ">
                  <a>
                    <h5 class="mb-1 text-[18px] lg:text-[22px] font-bold tracking-tight text-[#707070]">
                      Body Temple Beauty
                    </h5>
                  </a>
                  <div className="flex flex-row justify-between w-[100%] sm:w-[75%]">
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
                      className="mr-5 flex "
                      style={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#707070",
                      }}
                    >
                      127 Reviews
                    </div>
                  </div>
                  <p onClick={openModal1} class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    R123 Los Angles USA
                  </p>
                  <div class="mb-1 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>Waxing</p>
                    <p className="text-[#F26A5A]">$30</p>
                  </div>

                  <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>1 Hour</p>
                    <s>$40</s>
                  </div>
                </div>
                <button onClick={() => {
                  // handleSlideClick(1);
                  openModal();
                }} class="rounded-b-lg inline-flex items-center px-5 py-4 text-sm font-medium text-center text-[#FFFFFF]  w-full focus:ring-4 focus:outline-none bg-[#F26A5A]">
                  View Details <MdArrowForwardIos className="font-bold" />
                </button>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                handleSlideClick(2);
              }}
              className="h-auto "
            >
              <div class="w-full      shadow bg-[white] rounded-lg">
                <a>
                  <img
                    className="rounded-t-lg w-full h-full"
                    src="/images/hair.png"
                    alt=""
                  />
                </a>
                <div class="px-3 pt-1 md:px-5 md:pt-5 ">
                  <a>
                    <h5 class="mb-1 text-[18px] lg:text-[22px] font-bold tracking-tight text-[#707070]">
                      Body Temple Beauty
                    </h5>
                  </a>
                  <div className="flex flex-row justify-between w-[100%] sm:w-[75%]">
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
                      className="mr-5 flex "
                      style={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#707070",
                      }}
                    >
                      127 Reviews
                    </div>
                  </div>
                  <p onClick={openModal1} class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    R123 Los Angles USA
                  </p>
                  <div class="mb-1 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>Waxing</p>
                    <p className="text-[#F26A5A]">$30</p>
                  </div>

                  <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>1 Hour</p>
                    <s>$40</s>
                  </div>
                </div>
                <button onClick={() => {
                  handleSlideClick(2);
                  openModal();
                }} class="rounded-b-lg inline-flex items-center px-5 py-4 text-sm font-medium text-center text-[#FFFFFF]  w-full focus:ring-4 focus:outline-none bg-[#F26A5A]">
                  View Details <MdArrowForwardIos className="font-bold" />
                </button>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                handleSlideClick(3);
              }}
              className="h-auto "
            >
              <div class="w-full      shadow bg-[white] rounded-lg">
                <a>
                  <img
                    className="rounded-t-lg w-full h-full"
                    src="/images/flower.png"
                    alt=""
                  />
                </a>
                <div class="px-3 pt-1 md:px-5 md:pt-5 ">
                  <a>
                    <h5 class="mb-1 text-[18px] lg:text-[22px] font-bold tracking-tight text-[#707070]">
                      Body Temple Beauty
                    </h5>
                  </a>
                  <div className="flex flex-row justify-between w-[100%] sm:w-[75%]">
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
                      className="mr-5 flex "
                      style={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#707070",
                      }}
                    >
                      127 Reviews
                    </div>
                  </div>
                  <p onClick={openModal1} class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    R123 Los Angles USA
                  </p>
                  <div class="mb-1 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>Waxing</p>
                    <p className="text-[#F26A5A]">$30</p>
                  </div>

                  <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>1 Hour</p>
                    <s>$40</s>
                  </div>
                </div>
                <button onClick={() => {
                  // handleSlideClick(3);
                  openModal();
                }} class="rounded-b-lg inline-flex items-center px-5 py-4 text-sm font-medium text-center text-[#FFFFFF]  w-full focus:ring-4 focus:outline-none bg-[#F26A5A]">
                  View Details <MdArrowForwardIos className="font-bold" />
                </button>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                handleSlideClick(4);
              }}
              className="h-auto "
            >
              <div class="w-full      shadow bg-[white] rounded-lg">
                <a>
                  <img
                    className="rounded-t-lg w-full h-full"
                    src="/images/mixture.png"
                    alt=""
                  />
                </a>
                <div class="px-3 pt-1 md:px-5 md:pt-5 ">
                  <a>
                    <h5 class="mb-1 text-[18px] lg:text-[22px] font-bold tracking-tight text-[#707070]">
                      Body Temple Beauty
                    </h5>
                  </a>
                  <div className="flex flex-row justify-between w-[100%] sm:w-[75%]">
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
                      className="mr-5 flex "
                      style={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#707070",
                      }}
                    >
                      127 Reviews
                    </div>
                  </div>
                  <p onClick={openModal1} class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    R123 Los Angles USA
                  </p>
                  <div class="mb-1 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>Waxing</p>
                    <p className="text-[#F26A5A]">$30</p>
                  </div>

                  <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>1 Hour</p>
                    <s>$40</s>
                  </div>
                </div>
                <button onClick={() => {
                  // handleSlideClick(4);
                  openModal();
                }} class="rounded-b-lg inline-flex items-center px-5 py-4 text-sm font-medium text-center text-[#FFFFFF]  w-full focus:ring-4 focus:outline-none bg-[#F26A5A]">
                  View Details <MdArrowForwardIos className="font-bold" />
                </button>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                handleSlideClick(5);
              }}
              className="h-auto "
            >
              <div class="w-full      shadow bg-[white] rounded-lg">
                <a>
                  <img
                    className="rounded-t-lg w-full h-full"
                    src="/images/color.png"
                    alt=""
                  />
                </a>
                <div class="px-3 pt-1 md:px-5 md:pt-5 ">
                  <a>
                    <h5 class="mb-1 text-[18px] lg:text-[22px] font-bold tracking-tight text-[#707070]">
                      Body Temple Beauty
                    </h5>
                  </a>
                  <div className="flex flex-row justify-between w-[100%] sm:w-[75%]">
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
                      className="mr-5 flex "
                      style={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#707070",
                      }}
                    >
                      127 Reviews
                    </div>
                  </div>
                  <p onClick={openModal1} class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    R123 Los Angles USA
                  </p>
                  <div class="mb-1 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>Waxing</p>
                    <p className="text-[#F26A5A]">$30</p>
                  </div>

                  <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>1 Hour</p>
                    <s>$40</s>
                  </div>
                </div>
                <button onClick={() => {
                  // handleSlideClick(5);
                  openModal();
                }} class="rounded-b-lg inline-flex items-center px-5 py-4 text-sm font-medium text-center text-[#FFFFFF]  w-full focus:ring-4 focus:outline-none bg-[#F26A5A]">
                  View Details <MdArrowForwardIos className="font-bold" />
                </button>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                handleSlideClick(6);
              }}
              className="h-auto "
            >
              <div class="w-full      shadow bg-[white] rounded-lg">
                <a>
                  <img
                    className="rounded-t-lg w-full h-full"
                    src="/images/mixture.png"
                    alt=""
                  />
                </a>
                <div class="px-3 pt-1 md:px-5 md:pt-5 ">
                  <a>
                    <h5 class="mb-1 text-[18px] lg:text-[22px] font-bold tracking-tight text-[#707070]">
                      Body Temple Beauty
                    </h5>
                  </a>
                  <div className="flex flex-row justify-between w-[100%] sm:w-[75%]">
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
                      className="mr-5 flex "
                      style={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#707070",
                      }}
                    >
                      127 Reviews
                    </div>
                  </div>
                  <p onClick={openModal1} class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    R123 Los Angles USA
                  </p>
                  <div class="mb-1 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>Waxing</p>
                    <p className="text-[#F26A5A]">$30</p>
                  </div>

                  <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>1 Hour</p>
                    <s>$40</s>
                  </div>
                </div>
                <button onClick={() => {
                  // handleSlideClick(6);
                  openModal();
                }} class="rounded-b-lg inline-flex items-center px-5 py-4 text-sm font-medium text-center text-[#FFFFFF]  w-full focus:ring-4 focus:outline-none bg-[#F26A5A]">
                  View Details <MdArrowForwardIos className="font-bold" />
                </button>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                handleSlideClick(0);
              }}
              className="h-auto "
            >
              <div class="w-full shadow bg-[white] rounded-lg">
                <a>
                  <img
                    className="rounded-t-lg w-full h-full"
                    src="/images/color.png"
                    alt=""
                  />
                </a>
                <div class="px-3 pt-1 md:px-5 md:pt-5 ">
                  <a>
                    <h5 class="mb-1 text-[18px] lg:text-[22px] font-bold tracking-tight text-[#707070]">
                      Body Temple Beauty
                    </h5>
                  </a>
                  <div className="flex flex-row justify-between w-[100%] sm:w-[75%]">
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
                      className="mr-5 flex "
                      style={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#707070",
                      }}
                    >
                      127 Reviews
                    </div>
                  </div>
                  <p onClick={openModal1} class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    R123 Los Angles USA
                  </p>
                  <div class="mb-1 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>Waxing</p>
                    <p className="text-[#F26A5A]">$30</p>
                  </div>

                  <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                    <p>1 Hour</p>
                    <s>$40</s>
                  </div>
                </div>
                <button onClick={() => {
                  // handleSlideClick(0);
                  openModal();
                }} class="rounded-b-lg inline-flex items-center px-5 py-4 text-sm font-medium text-center text-[#FFFFFF]  w-full focus:ring-4 focus:outline-none bg-[#F26A5A]">
                  View Details <MdArrowForwardIos className="font-bold" />
                </button>
              </div>{" "}
            </SwiperSlide>
          </Swiper>
        </div>


        <div className="flex justify-center items-center mt-6">
          <Link
            href={"/explore"}
            className="bg-[#F26A5A] rounded-sm py-2 sm:py-3 px-[60px] sm:px-[120px]  whitespace-nowrap flex justify-center items-center  my-8 text-[white]"
          >
            Show All
          </Link>
        </div>
      </div>
      <div className="max-w-[1000px]">
        <Modal showModal={showModal} closeModal={closeModal} />

      </div>
    </div>
  );
};

export default HomeCarousel;
