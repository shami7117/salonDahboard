"use client";
import Image from "next/image";
import styles from "./privacy.module.css";
import { AiTwotoneHeart } from "react-icons/ai";
import { RevealWrapper } from "next-reveal";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#F2F2F2] ">
      <div className="w-full ">
        <Image
          src={"/images/eyes.png"}
          alt="img"
          width={1000}
          height={1000}
          className="w-full h-[30vh] object-cover sm:h-[50vh]"
        />
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
        <div className="w-full  mt-10  flex flex-col items-center justify-center">
          <p
            className={`${styles.introHead} mb-4 text-center`}
            style={{ color: "#F26A5A" }}
          >
            {"Frequently ask questions".toUpperCase()}
          </p>
          <div
            className="w-[83px] h-1 md:h-3 mb-6"
            style={{ backgroundColor: "#F26A5A" }}
          ></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:space-x-3 mt-[30px] px-4 mb-[40px]">
            <RevealWrapper
              rotate={{ x: 0, y: -12, z: 0 }}
              origin="bottom"
              delay={200}
              duration={1000}
              distance="200px"
              reset={true}
              viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <div className="grid grid-rows-1 md:grid-rows-[4fr_8fr] ">

                <div class="max-w-xs  bg-[#ffffff] flex flex-col justify-between rounded-lg mb-2 py-5 px-4">
                  <div>
                    <h4
                      tabindex="0"
                      class="focus:outline-none text-[#707070] font-bold mb-3"
                    >
                      What is a salon?
                    </h4>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-[#707070] text-sm"
                    >
                      Probabo, inquit, sic agam, ut labore et voluptatem sequi
                      nesciunt, neque porro quisquam est, quid malum, sensu
                      iudicari, sed ut alterum.
                    </p>
                  </div>
                  <div>
                    <div class="flex items-center justify-start text-gray-800">
                      <div class="text-white flex items-center justify-start">
                        <AiTwotoneHeart color="red" />
                      </div>
                      <p tabindex="0" class=" text-sm ml-1 text-[#707070]">
                        792
                      </p>
                    </div>
                  </div>
                </div>


                <div class="max-w-xs  bg-[#ffffff] flex flex-col justify-between rounded-lg mb-2 py-5 px-4">
                  <div>
                    <h4
                      tabindex="0"
                      class="focus:outline-none text-[#707070] font-bold mb-3"
                    >
                      What is a salon?
                    </h4>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-[#707070] text-sm"
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus culpa accusantium aliquid pariatur, error minima magnam in quibusdam possimus rem ad id rerum necessitatibus sunt impedit. Rerum, nostrum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus culpa accusantium aliquid pariatur, error minima magnam in quibusdam possimus rem ad id rerum necessitatibus sunt impedit. Rerum, nostrum excepturi.
                    </p>
                  </div>
                  <div>
                    <div class="flex items-center justify-start text-gray-800">
                      <div class="text-white flex items-center justify-start">
                        <AiTwotoneHeart color="red" />
                      </div>
                      <p tabindex="0" class=" text-sm ml-1 text-[#707070]">
                        792
                      </p>
                    </div>
                  </div>
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
              <div className="grid grid-rows-1 md:grid-rows-[8fr_4fr] ">

                <div class="max-w-xs  bg-[#ffffff] flex flex-col justify-between rounded-lg mb-2 py-5 px-4">
                  <div>
                    <h4
                      tabindex="0"
                      class="focus:outline-none text-[#707070] font-bold mb-3"
                    >
                      What is a salon?
                    </h4>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-[#707070] text-sm"
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus culpa accusantium aliquid pariatur, error minima magnam in quibusdam possimus rem ad id rerum necessitatibus sunt impedit. Rerum, nostrum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus culpa accusantium aliquid pariatur, error minima magnam in quibusdam possimus rem ad id rerum necessitatibus sunt impedit. Rerum, nostrum excepturi.
                    </p>
                  </div>
                  <div>
                    <div class="flex items-center justify-start text-gray-800">
                      <div class="text-white flex items-center justify-start">
                        <AiTwotoneHeart color="red" />
                      </div>
                      <p tabindex="0" class=" text-sm ml-1 text-[#707070]">
                        792
                      </p>
                    </div>
                  </div>
                </div>


                <div class="max-w-xs  bg-[#ffffff] flex flex-col justify-between rounded-lg mb-2 py-5 px-4">
                  <div>
                    <h4
                      tabindex="0"
                      class="focus:outline-none text-[#707070] font-bold mb-3"
                    >
                      What is a salon?
                    </h4>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-[#707070] text-sm"
                    >
                      Probabo, inquit, sic agam, ut labore et voluptatem sequi
                      nesciunt, neque porro quisquam est, quid malum, sensu
                      iudicari, sed ut alterum.
                    </p>
                  </div>
                  <div>
                    <div class="flex items-center justify-start text-gray-800">
                      <div class="text-white flex items-center justify-start">
                        <AiTwotoneHeart color="red" />
                      </div>
                      <p tabindex="0" class=" text-sm ml-1 text-[#707070]">
                        792
                      </p>
                    </div>
                  </div>
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
              <div className="grid grid-rows-1 md:grid-rows-[4fr_8fr] ">

                <div class="max-w-xs  bg-[#ffffff] flex flex-col justify-between rounded-lg mb-2 py-5 px-4">
                  <div>
                    <h4
                      tabindex="0"
                      class="focus:outline-none text-[#707070] font-bold mb-3"
                    >
                      What is a salon?
                    </h4>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-[#707070] text-sm"
                    >
                      Probabo, inquit, sic agam, ut labore et voluptatem sequi
                      nesciunt, neque porro quisquam est, quid malum, sensu
                      iudicari, sed ut alterum.
                    </p>
                  </div>
                  <div>
                    <div class="flex items-center justify-start text-gray-800">
                      <div class="text-white flex items-center justify-start">
                        <AiTwotoneHeart color="red" />
                      </div>
                      <p tabindex="0" class=" text-sm ml-1 text-[#707070]">
                        792
                      </p>
                    </div>
                  </div>
                </div>


                <div class="max-w-xs  bg-[#ffffff] flex flex-col justify-between rounded-lg mb-2 py-5 px-4">
                  <div>
                    <h4
                      tabindex="0"
                      class="focus:outline-none text-[#707070] font-bold mb-3"
                    >
                      What is a salon?
                    </h4>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-[#707070] text-sm"
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus culpa accusantium aliquid pariatur, error minima magnam in quibusdam possimus rem ad id rerum necessitatibus sunt impedit. Rerum, nostrum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus culpa accusantium aliquid pariatur, error minima magnam in quibusdam possimus rem ad id rerum necessitatibus sunt impedit. Rerum, nostrum excepturi.
                    </p>
                  </div>
                  <div>
                    <div class="flex items-center justify-start text-gray-800">
                      <div class="text-white flex items-center justify-start">
                        <AiTwotoneHeart color="red" />
                      </div>
                      <p tabindex="0" class=" text-sm ml-1 text-[#707070]">
                        792
                      </p>
                    </div>
                  </div>
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
              <div className="grid grid-rows-1 md:grid-rows-[8fr_4fr] ">

                <div class="max-w-xs  bg-[#ffffff] flex flex-col justify-between rounded-lg mb-2 py-5 px-4">
                  <div>
                    <h4
                      tabindex="0"
                      class="focus:outline-none text-[#707070] font-bold mb-3"
                    >
                      What is a salon?
                    </h4>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-[#707070] text-sm"
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus culpa accusantium aliquid pariatur, error minima magnam in quibusdam possimus rem ad id rerum necessitatibus sunt impedit. Rerum, nostrum excepturi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus culpa accusantium aliquid pariatur, error minima magnam in quibusdam possimus rem ad id rerum necessitatibus sunt impedit. Rerum, nostrum excepturi.
                    </p>
                  </div>
                  <div>
                    <div class="flex items-center justify-start text-gray-800">
                      <div class="text-white flex items-center justify-start">
                        <AiTwotoneHeart color="red" />
                      </div>
                      <p tabindex="0" class=" text-sm ml-1 text-[#707070]">
                        792
                      </p>
                    </div>
                  </div>
                </div>


                <div class="max-w-xs  bg-[#ffffff] flex flex-col justify-between rounded-lg mb-2 py-5 px-4">
                  <div>
                    <h4
                      tabindex="0"
                      class="focus:outline-none text-[#707070] font-bold mb-3"
                    >
                      What is a salon?
                    </h4>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-[#707070] text-sm"
                    >
                      Probabo, inquit, sic agam, ut labore et voluptatem sequi
                      nesciunt, neque porro quisquam est, quid malum, sensu
                      iudicari, sed ut alterum.
                    </p>
                  </div>
                  <div>
                    <div class="flex items-center justify-start text-gray-800">
                      <div class="text-white flex items-center justify-start">
                        <AiTwotoneHeart color="red" />
                      </div>
                      <p tabindex="0" class=" text-sm ml-1 text-[#707070]">
                        792
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </RevealWrapper>
    </div>
  );
}
