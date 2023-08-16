import React from "react";
import styles from "./appoint.module.css";
import AppointData from "../apointmentData/AppointData";
import { RevealWrapper } from "next-reveal";

const Appointments = () => {
  return (
    <div className="px-4">
      <div className="w-full bg-white flex flex-col items-center justify-center mb-[10px]">
        <p className={`${styles.introHead} mb-4 text-center`}>
          {"Your appointments have been made!".toUpperCase()}
        </p>
        <div
          className="w-[83px] h-1 md:h-3 mb-6"
          style={{ backgroundColor: "#F26A5A" }}
        ></div>
        <div className="text-center text-[#707070]" style={{ fontSize: "14px", lineHeight: "27px" }}>
          You should receive a confirmation email shortly.
        </div>
      </div>
      {Array(3).fill().map((_, index) => (
        <>
          <AppointData index={index} />

          <hr />
        </>
      ))}
      <center>
        <button className={`w-[272px] btn-primary h-[48px] mt-6 sm:mt-10 mb-12 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>Back to deals</button>
      </center>
    </div>
  );
};

export default Appointments;
