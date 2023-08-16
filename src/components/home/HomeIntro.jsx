import React from "react";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineCheckCircle } from "react-icons/md";
import styles from './home.module.css';
import { RevealWrapper } from "next-reveal";

const HomeIntro = () => {
  return (
    <div>
      <div className={`${styles.introBox} w-full flex flex-col max-w-[1500px] mx-auto  items-center justify-center`}>
        <RevealWrapper
          rotate={{ x: 0, y: -12, z: 0 }}
          origin="bottom"
          delay={200}
          duration={1000}
          distance="200px"
          reset={true}
          viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <p
            className={`${styles.introHead} mb-4`}
          >
            <b>LOOK BEAUTIFUL. FEEL FABULOUS</b>
          </p>
          <div
            className="w-[83px] h-1 md:h-3 mb-6 flex justify-center items-center mx-auto"
            style={{ backgroundColor: "#F26A5A" }}
          ></div>
        </RevealWrapper>
        <div
          className={`${styles.intro} mt-8 md:mt-16`}
        >
          <RevealWrapper
            rotate={{ x: 0, y: -12, z: 0 }}
            origin="bottom"
            delay={200}
            duration={1000}
            distance="200px"
            reset={true}
            viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <div className="flex flex-col justify-center items-center my-3 md:my-0">
              <div className="h-[58px] w-[58px]">
                <GiBackwardTime size={70} color="#F26A5A" />
              </div>
              <div
                className={`${styles.introHeadings} mt-5`}
              >
                24/7
              </div>
              <div
                className={`${styles.introText} mt-3`}
              >
                Anytime and from anywhere
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper
            rotate={{ x: 0, y: -12, z: 0 }}
            origin="bottom"
            delay={200}
            duration={1000}
            distance="200px"
            reset={true}
            viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <div className="flex flex-col justify-center items-center my-3 md:my-0">
              <div className="h-[58px] w-[58px]">
                <AiOutlineDollarCircle size={70} color="#F26A5A" />
              </div>
              <div
                className={`${styles.introHeadings} mt-5`}
              >
                Great Prices
              </div>
              <div
                className={`${styles.introText} mt-3`}
              >
                Great deals that save you money
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper
            rotate={{ x: 0, y: -12, z: 0 }}
            origin="bottom"
            delay={200}
            duration={1000}
            distance="200px"
            reset={true}
            viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <div className="flex flex-col justify-center items-center my-3 md:my-0">
              <div className="h-[58px] w-[58px]">
                <MdOutlineCheckCircle size={70} color="#F26A5A" />
              </div>
              <div
                className={`${styles.introHeadings} mt-5`}
              >
                Superior Quality
              </div>
              <div
                className={`${styles.introText} mt-3`}
              >
                Your experience matters to us
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
