"use client";
import { useState } from "react";
import { BiSolidUser } from 'react-icons/bi';
import { HiLockClosed } from 'react-icons/hi';
import styles from './new.module.css';
import { RevealWrapper } from "next-reveal";


export default function NewPass() {
  const [activeIcon, setActiveIcon] = useState("treatments");
  const [gender, setGender] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleDivClick = (index) => {
    setActiveIndex(index);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <div className="bg-[url(/images/Video.png)] bg-[#F3F3F3] bg-left h-[90vh] md:h-[85vh] py-8  bg-contain bg-no-repeat bg-center md:bg-[url(/images/Video.png)] lg:bg-[url(/images/Video.png)]  flex items-between justify-between">
      <div className="md:w-[60%]"></div>

      <div className={`${styles.discover} flex flex-col justify-center`} style={{ backgroundColor: '#FCFCFC' }}>
        <div className={styles.authContainer}>
          {/* <RevealWrapper
            rotate={{ x: 0, y: -12, z: 0 }}
            origin="bottom"
            delay={200}
            duration={1000}
            distance="200px"
            reset={true}
            viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
          > */}
          <div
            className={styles.login}
            onClick={() => handleDivClick(1)}
          >
            <div style={{ marginLeft: '30px' }}>
              <HiLockClosed size={27} color="white" />
            </div>
            <div className={styles.create}>
              Login
            </div>
          </div>
          {/* </RevealWrapper> */}
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
          <center>
            <div className={styles.newPass}>New Password</div>
          </center>

          <div>

            <center className="mt-3">
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  className="w-[305px] outline-none sm:w-[359px] h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
                />
                <input
                  type="text"
                  placeholder="Retype your new password"
                  className="w-[305px] outline-none sm:w-[359px] h-[50px] bg-white pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
                />
                {/* <p className={styles.forgot}>Resend Code?</p> */}
              </div>
            </center>
            <center>
              <button className={`w-[305px] sm:w-[359px] btn-primary h-[48px] mt-6 sm:mt-10 mb-12 rounded-[4px]`} style={{ backgroundColor: '#F26A5A', color: 'white', fontSize: '16px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>Reset my password</button>
            </center>
          </div>
        </RevealWrapper>

      </div>
    </div>
  );
}
