"use client";
import { useState } from "react";
import { BiSpa } from "react-icons/bi";
import { FiScissors, FiSearch } from "react-icons/fi";
import { RiHospitalLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { BsCalendar } from "react-icons/bs";
import styles from './home.module.css';
import Image from "next/image";


export default function HomeHeader() {
  const [activeIcon, setActiveIcon] = useState("treatments");


  const handleClick = (iconName) => {
    setActiveIcon(iconName);
  };
  return (
    <div className="bg-[#F3F3F3] ">
      <div className="   bg-[url(/images/Video.png)] bg-[#F3F3F3] md:bg-origin-content  md:bg-left-top h-[85vh] md:h-screen py-8 bg-no-repeat md:pt-10 pt-0 md:bg-[url(/images/Video.png)] lg:bg-[url(/images/Video.png)]   flex items-between justify-between">
        <div className="lg:w-[60%] "></div>

        <div className={`${styles.discover}  w-full lg:w-[40%] bg-white rounded-sm px-5 py-10 my-auto max-h-[500px]   flex flex-col items-center justify-center`}>
          <h2
            className="text-2xl font-bold mb-10"
            style={{
              color: "#808285",
              fontSize: "30px",
              fontWeight: "38px",
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Discover Our listings
          </h2>

          <div
            className="flex items-center justify-center gap-6"
          >
            <div
              className={`flex items-center flex-col cursor-pointer`}
              onClick={() => handleClick("treatments")}
            >
              <div className={`icon border-b-[3px] pb-2 ${activeIcon === "treatments" ? "border-[#F9AF9C]  " : "border-transparent"}`}>

                {activeIcon === "treatments" ? <Image className=" logo-img" src={"/images/pink.png"} width={30} height={30} /> : <Image className=" logo-img" src={"/images/gray.png"} width={30} height={30} />}
              </div>
              <h4
                className=" "
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontWeight: "600",
                  color: "#808285",
                  marginTop: "10px",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                TREATMENTS
              </h4>
            </div>
            <div
              className={`flex items-center justify-center flex-col cursor-pointer`}
              style={{ marginRight: "25px" }}
              onClick={() => handleClick("spa")}
            >
              <div className={`icon border-b-[3px] pb-1 ${activeIcon === "spa" ? "border-[#F9AF9C] " : "border-transparent"}`}>
                <BiSpa
                  size={47}
                  color={activeIcon === "spa" ? "#F9AF9C" : "#808285"}
                />
              </div>
              <h4
                className={styles.spa}
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontWeight: "600",
                  color: "#808285",
                  marginTop: "10px",
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
              <div className={`icon border-b-[3px] pb-1 ${activeIcon === "salon" ? "border-[#F9AF9C]  " : "border-transparent"}`}>
                <FiScissors
                  size={43}
                  color={activeIcon === "salon" ? "#F9AF9C" : "#808285"}
                />
              </div>
              <h4
                className=""
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontWeight: "600",
                  color: "#808285",
                  marginTop: "10px",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                SALON
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center px-5 space-y-2 mt-6">
            <div className={`${styles?.formItems} flex items-center border border-solid border-gray-300`}>
              <div
                className="w-[50px] h-[50px] bg-[#F9AF9C] cursor-pointer hover:bg-[#F26A5A]"
              >
                <center>
                  <FiSearch size={25} color="white" className="mt-3" />
                </center>
              </div>
              <input
                type="text"
                placeholder="Hair"
                className="h-[50px] ml-2 pl-4 outline-none"
                style={{
                  color: "#808285",
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontFamily: "'Lato', sans-serif",
                }}
              />
            </div>
            <div className={`${styles?.formItems} flex items-center border border-solid border-gray-300`}>
              <div
                className="w-[50px] h-[50px] icon bg-[#F9AF9C] cursor-pointer hover:bg-[#F26A5A]"
              // style={{ backgroundColor: "#F9AF9C" }}
              >
                <center>
                  <SlLocationPin size={25} color="white" className="mt-3" />
                </center>
              </div>
              <input
                type="text"
                placeholder="Enter postal code or area..."
                className="h-[50px] ml-2 pl-4 outline-none"
                style={{
                  color: "#808285",
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontFamily: "'Lato', sans-serif",
                }}
              />
            </div>
            <div className={`${styles.formItems} flex  border border-solid border-gray-300`}>
              <div
                className="w-[50px] h-[50px] icon bg-[#F9AF9C] cursor-pointer hover:bg-[#F26A5A]"
              // style={{ backgroundColor: "#F9AF9C" }}
              >
                <center>
                  <BsCalendar size={25} color="white" className="mt-3" />
                </center>
              </div>
              <div className="input-container">
                <input
                  type="date"
                  placeholder="Enter Date"
                  className=" h-[50px] ml-2 pl-4 outline-none placeholder-[#a7a7a7]"

                  style={{
                    color: "#808285",

                    fontSize: "14px",
                    lineHeight: "17px",
                    fontFamily: "'Lato', sans-serif",
                  }}
                />
              </div>
              <input
                type="time"
                placeholder="Enter Date"
                className=" h-[50px] ml-2 pl-4 outline-none placeholder-[#a7a7a7]"

                style={{
                  color: "#808285",

                  fontSize: "14px",
                  lineHeight: "17px",
                  fontFamily: "'Lato', sans-serif",
                }}
              />
            </div>
          </div>


          <button className={`${styles?.formItems} btn-primary h-[48px] mt-6 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '500', fontFamily: "'Lato', sans-serif" }}>Submit</button>
        </div>
      </div>
    </div>
  );
}
