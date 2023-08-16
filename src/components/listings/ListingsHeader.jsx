'use client'
import { useState } from "react";
import { FiScissors, FiSearch } from "react-icons/fi";
import { RiHospitalLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { BsCalendar } from "react-icons/bs";
import styles from './listings.module.css';
import Image from "next/image";
import { BiSpa } from "react-icons/bi";

const ListingsHeader = () => {
  const [activeIcon, setActiveIcon] = useState("treatments");


  const handleClick = (iconName) => {
    setActiveIcon(iconName);
  };
  return (
    <div>

      <div className="w-full h-[90vh] md:h-[85vh] bg-white flex flex-col items-center justify-center">
        <p
          className={`${styles.introHead} mb-4`}
        >
          DISCOVER OUR LISTINGS
        </p>
        <div
          className="w-[83px] h-1 md:h-2 mb-6"
          style={{ backgroundColor: "#F26A5A" }}
        ></div>
        <div
          className="flex flex-row items-center justify-between gap-10 mt-3 sm:mt-8"
        // style={{ marginTop: "80px" }}
        >
          <div
            className={`flex items-center flex-col cursor-pointer`}
            onClick={() => handleClick("treatments")}
          >
            <div className={`icon border-b-[3px] pb-2 ${activeIcon === "treatments" ? "border-[#F9AF9C]  " : "border-transparent"}`}>

              {activeIcon === "treatments" ? <Image className=" logo-img" src={"/images/pink.png"} width={30} height={25} /> : <Image className=" logo-img" src={"/images/gray.png"} width={30} height={25} />}
            </div>
            <h4
              className="ml-0 sm:ml-2"
              style={{
                fontSize: "14px",
                lineHeight: "17px",
                fontWeight: "600",
                color: "#808285",
                marginTop: "25px",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              TREATMENTS
            </h4>
          </div>
          <div
            className={`flex items-center flex-col cursor-pointer`}
            style={{ marginRight: "25px" }}
            onClick={() => handleClick("spa")}
          >
            <div className={`icon border-b-[3px] pb-2 ${activeIcon === "spa" ? "border-[#F9AF9C]  " : "border-transparent"}`}>
              <BiSpa
                size={45}
                color={activeIcon === "spa" ? "#F9AF9C" : "#808285"}
              />
              {/* <svg xmlns="/images/svg.svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24"> <path d="M0 0h24v24H0z" fill="none" />
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#fff" /></svg> */}
            </div>
            <h4
              className="ml-0 sm:ml-2"
              style={{
                fontSize: "14px",
                lineHeight: "17px",
                fontWeight: "600",
                color: "#808285",
                marginTop: "25px",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              SPA
            </h4>
          </div>
          <div
            className={`flex items-center flex-col cursor-pointer`}
            onClick={() => handleClick("salon")}
          >
            <div className={`icon border-b-[3px] pb-2 ${activeIcon === "salon" ? "border-[#F9AF9C]  " : "border-transparent"}`}>
              <FiScissors
                size={40}
                color={activeIcon === "salon" ? "#F9AF9C" : "#808285"}
              />
            </div>
            <h4
              className="ml-0 sm:ml-2"
              style={{
                fontSize: "14px",
                lineHeight: "17px",
                fontWeight: "600",
                color: "#808285",
                marginTop: "25px",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              SALON
            </h4>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center space-y-2 mt-5">
          <div className="flex items-center w-[350px] sm:w-[360px] lg:w-[310px] xl:w-[360px] border border-solid border-gray-300 mr-0 sm:mr-5 mt-2">
            <div
              className="w-[60px] h-[50px]"
              style={{ backgroundColor: "#F9AF9C" }}
            >
              <center>
                <FiSearch size={25} color="white" className="mt-3" />
              </center>
            </div>
            <input
              type="text"
              placeholder="Hair"
              className="h-[50px] bg-transparent w-[350px] sm:w-[360px] lg:w-[310px] xl:w-[360px] ml-2 pl-4 outline-none"
              style={{
                color: "#808285",
                fontSize: "14px",
                lineHeight: "17px",
                fontFamily: "'Lato', sans-serif",
              }}
            />
          </div>
          <div className="flex items-center w-[350px] sm:w-[360px] lg:w-[310px] xl:w-[360px] border border-solid border-gray-300 mr-0 sm:mr-5">
            <div
              className="w-[60px] h-[50px] icon"
              style={{ backgroundColor: "#F9AF9C" }}
            >
              <center>
                <SlLocationPin size={25} color="white" className="mt-3" />
              </center>
            </div>
            <input
              type="text"
              placeholder="Enter postal code or area..."
              className="h-[50px] w-[350px] bg-transparent sm:w-[360px] lg:w-[310px] xl:w-[360px] ml-2 pl-4 outline-none"
              style={{
                color: "#808285",
                fontSize: "14px",
                lineHeight: "17px",
                fontFamily: "'Lato', sans-serif",
              }}
            />
          </div>
          <div className="flex items-center w-[350px] sm:w-[360px] lg:w-[310px] xl:w-[360px] border border-solid border-gray-300 mr-0 sm:mr-5 lg:mr-0">
            <div
              className="w-[60px]  h-[50px] icon"
              style={{ backgroundColor: "#F9AF9C" }}
            >
              <center>
                <BsCalendar size={25} color="white" className="mt-3" />
              </center>
            </div>
            <div className="input-container">
              <input
                type="date"
                placeholder="Date..."
                onfocus="this.showPicker()"
                className="h-[50px]  w-[350px] bg-transparent sm:w-[360px] lg:w-[310px] xl:w-[360px] ml-2 pl-4 outline-none"
                style={{
                  color: "#808285",
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontFamily: "'Lato', sans-serif",
                }}
              />
            </div>

            {/* <DatePicker className="h-[50px] rounded-none border-none w-[350px] sm:w-[360px] lg:w-[310px] xl:w-[360px] ml-2 pl-4 outline-none"
              style={{
                color: "#808285",
                fontSize: "14px",
                lineHeight: "17px",
                fontFamily: "'Lato', sans-serif",
              }} /> */}
          </div>
        </div>
        <button className="btn-primary w-[350px] sm:w-[360px] lg:w-[250px] xl:w-[300px] h-[48px] mt-8 lg:mt-16 rounded-[4px] mr-0 sm:mr-5 lg:mr-0" style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>Search Appointments</button>
      </div>
    </div>
  )
}

export default ListingsHeader