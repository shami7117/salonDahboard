import React from "react";
import styles from "./myappoint.module.css";
import AppointData from "../apointmentData/AppointData";
import { FiSearch } from "react-icons/fi";

const MyAppointments = () => {
  return (
    <div>
      <div className="w-full bg-white flex flex-col items-center justify-center mb-[10px]">
        <p className={`${styles.introHead} mb-4 text-center`}>
          {"my appointments".toUpperCase()}
        </p>
        <div
          className="w-[83px] h-1 md:h-3 mb-6"
          style={{ backgroundColor: "#F26A5A" }}
        ></div>
        <div className="flex items-center w-[350px] md:w-[719px] lg:w-[719px] xl:w-[719px] border border-solid border-gray-300 mr-0 sm:mr-5 mt-2">
            <input
              type="text"
              placeholder="Enter email or phone number..."
              className="h-[50px] w-[350px] md:w-[719px] lg:w-[719px] xl:w-[719px] ml-2 pl-4 outline-none"
              style={{
                color: "#808285",
                fontSize: "14px",
                lineHeight: "17px",
                fontFamily: "'Lato', sans-serif",
              }}
            />
            <div
              className="w-[60px] h-[50px]"
              style={{ backgroundColor: "#F9AF9C" }}
            >
              <center>
                <FiSearch size={25} color="white" className="mt-3" />
              </center>
            </div>
          </div>
        <p className={`${styles.introHead} mb-4 text-center`}>
          {"results".toUpperCase()}
        </p>
        <div
          className="w-[83px] h-1 md:h-3 mb-6"
          style={{ backgroundColor: "#F26A5A" }}
        ></div>
      </div>
      {Array(3).fill().map((_, index) => (
        <>
          <AppointData index={index}/>
      <hr />
      </>
      ))}
      <center>
        <button className={`w-[272px] btn-primary h-[48px] mt-6 sm:mt-10 mb-12 rounded-[4px]`} style={{backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif"}}>Email Details</button>
        </center>
    </div>
  );
};

export default MyAppointments;
