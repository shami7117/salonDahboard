import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { HiLockClosed } from "react-icons/hi";
import styles from "./checkout.module.css";
import { MdLocationPin } from "react-icons/md";
import { BsCalendar } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

function Checkout() {
  const [activeIcon, setActiveIcon] = useState("treatments");
  const [gender, setGender] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [auth, setAuth] = useState(false);


  const [email, setEmail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsInvalid(!isValidEmail(e.target.value));
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


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
    <div className="w-full h-auto bg-white flex flex-col items-center justify-center text-[#707070] mb-[100px]">
      <p className={`${styles.introHead} mb-2`}>CHECKOUT</p>
      <div
        className="w-[83px] h-1 md:h-3 mb-3"
        style={{ backgroundColor: "#F26A5A" }}
      ></div>
      <div className="flex  flex-col items-center justify-center  lg:flex-row items-center justify-between mt-[40px] sm:mt-[100px] px-6">

        <div
          className={`${styles.discover} max-w-full lg:max-w-[450px]  flex flex-col text-[#707070] items-center justify-center`}
          style={{
            backgroundColor: "#FCFCFC",
            marginBottom: activeIndex === 1 ? "400px" : "0px",
          }}
        >
          <div className={styles.authContainer}>
            <div
              className={styles.account}
              style={{
                backgroundColor: activeIndex === 0 ? "#F26A5A" : "#F9AF9C",
              }}
              onClick={() => handleDivClick(0)}
            >
              <div style={{ marginLeft: "33px" }}>
                <BiSolidUser size={27} color="white" />
              </div>
              <div className={styles.create}>Guest Checkout</div>
            </div>
            <div
              className={styles.login}
              style={{
                backgroundColor: activeIndex === 1 ? "#F26A5A" : "#F9AF9C",
              }}
              onClick={() => handleDivClick(1)}
            >
              <div style={{ marginLeft: "10px" }}>
                <HiLockClosed size={27} color="white" />
              </div>
              <div className={styles.create}>Login to Checkout</div>
            </div>
          </div>
          {activeIndex === 0 ? (
            <div
              style={{
                borderLeft: "1px solid #D1D1D1",
                borderRight: "1px solid #D1D1D1",
                borderBottom: "1px solid #D1D1D1",
                width: "-webkit-fill-available",
              }}
            >
              <center className="mt-12">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-[359px] h-[50px] bg-white pl-4 border-2 border-solid border-[#D6D6D6] rounded-md mb-4"
                  />

                  {isInvalid && (
                    <p className="text-red-500 max-w-[150px] mb-1 py-2 px-3  whitespace-nowrap w-full bg-[#F26A5A]  rounded-xl text-white self-start text-sm">Invalid email address</p>
                  )}
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-[359px] h-[50px] bg-white pl-4 border-2 border-solid border-[#D6D6D6] rounded-md mb-4"
                  />



                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="w-[359px] h-[50px] bg-white pl-4 border-2 border-solid border-[#D6D6D6] rounded-md mb-4"
                  />
                </div>
                <div className="flex justify-between px-11">
                  <div style={{ fontSize: "14px", lineHeight: "17px" }}>
                    Don&apos;t have an account with us?
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "17px",
                      color: "#F26A5A",
                      marginRight: "28px",
                      fontFamily: '500'
                    }}
                  >
                    Create an account
                  </div>
                </div>
                <div className="flex justify-between px-11 mt-7">
                  <div className={`${styles.radioHeader} mb-2 text-[#707070]`}>
                    Is this for you?
                  </div>
                  <div className="flex flex-row md:mr-[72px] mt-0">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="Yes"
                        checked={gender === "Yes"}
                        onChange={handleGenderChange}
                        style={{ color: "yellow", backgroundColor: "" }}
                        className="form-radio h-4 w-4 text-[#707070]"
                      />
                      <span className="ml-2 text-[#707070]">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        value="No"
                        checked={gender === "No"}
                        onChange={handleGenderChange}
                        className="form-radio text-blue-500 h-4 w-4"
                      />
                      <span className="ml-2 text-[#707070]">No</span>
                    </label>
                  </div>
                </div>
                <div
                  className="flex ml-11 mt-4 text-[#707070]"
                  style={{
                    fontSize: "18px",
                    lineHeight: "22px",
                    fontWeight: "700",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  Payment
                </div>
                <div
                  className="flex ml-11 text-[#707070] mt-4"
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  The order total will be payable at the venue.
                </div>
                <div className="flex ml-11 text-[#707070] mt-9">
                  <div
                    style={{
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: "700",
                      fontFamily: "'Lato', sans-serif",
                      color: "#F26A5A",
                    }}
                  >
                    Order total
                  </div>
                  <div
                    className="ml-11"
                    style={{
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: "700",
                      fontFamily: "'Lato', sans-serif",
                      color: "#F26A5A",
                    }}
                  >
                    $200
                  </div>
                </div>
                <div className="flex mt-8">
                  <div className="flex items-center ml-5 sm:ml-12">
                    {/* <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        id="toggle"
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        checked={checked}
                        onChange={handleToggle}
                      />
                      <label
                        htmlFor="toggle"
                        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      />
                    </div> */}

                    <label class="relative ml-1 inline-flex items-center cursor-pointer">
                      <input checked={checked}
                        onChange={handleToggle} type="checkbox" value="" class="sr-only  peer" />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none =  rounded-[6px] sm:mr-2 peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[6px] after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F26A5A]"></div>

                      {/* <label htmlFor="toggle" className='ml-1'>No</label> */}

                    </label>
                    <label htmlFor="toggle">{checked ? "On" : "Off"}</label>
                  </div>
                  <div
                    className="mr-[52px] ml-3"
                    style={{
                      fontSize: "14px",
                      lineHeight: "17px",
                      textAlign: "justify",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  >
                    You have my consent to use my email to send me marketing
                    promotions and offers.
                  </div>
                </div>
              </center>
              <center>
                <div className="flex justify-center">
                  <button
                    className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-5 mr-2 mr-5 rounded-[4px]`}
                  >
                    Modify Bookings
                  </button>
                  <button
                    className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-5 mr-2 ml-5 rounded-[4px]`}
                  >
                    Submit
                  </button>
                </div>
              </center>
              <div className="m-10" style={{ textAlign: 'justify' }}>
                Please note that guest checkouts will not be able to adjust their bookings after the order is submitted. Please call 1-800-EZNAAH if you would like to modify your booking.
              </div>
            </div>
          ) : (
            !auth ?
              <>
                <div style={{
                  borderBottom: '1px solid #D1D1D1',
                  borderLeft: '1px solid #D1D1D1',
                  borderRight: '1px solid #D1D1D1',
                }}>
                  <center className="mt-12 px-4">
                    {isInvalid && (
                      <p className="text-red-500 max-w-[150px] mb-1 py-2 px-3  whitespace-nowrap w-full bg-[#F26A5A]  rounded-xl text-white self-start text-sm">Invalid email address</p>
                    )}
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={handleChange}
                      className="w-full sm:w-[359px] h-[50px] pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
                    />
                    <input
                      type="text"
                      placeholder="Password"
                      className="w-full sm:w-[359px] h-[50px] pl-4 border-2 border-solid border-blue-300 rounded-md mb-1"
                    />
                  </center>
                  <div className="flex flex-col px-4 sm:flex-row items-center sm:ml-5 sm:ml-12">
                    <button
                      className={`${styles?.loginbtn} btn-primary w-full sm:w-[95px] h-[48px] mt-4 mb-6 rounded-[4px]`}
                      onClick={() => setAuth(true)}
                      style={{
                        backgroundColor: "#F26A5A",
                        color: "white",
                        fontSize: "16px",
                        lineHeight: "12px",
                        fontWeight: "600",
                        fontFamily: "'Lato', sans-serif",
                      }}
                    >
                      Login
                    </button>
                    <div className="flex flex-col ml-6">
                      <div style={{ fontSize: '14px', lineHeight: '17px', fontFamily: "'Lato', sans-serif", color: '#707070' }}>Don&apos;t have an account with us?</div>
                      <div style={{ fontSize: '14px', lineHeight: '17px', fontFamily: "'Lato', sans-serif", color: '#F26A5A', fontWeight: '600' }}>click here to create an account.</div>
                    </div>
                  </div>
                  <>
                    <div className="flex flex-col sm:flex-row justify-between px-11 mt-7">
                      <div className={`${styles.radioHeader} mb-2`}>
                        Is this for you?
                      </div>
                      <div className="mr-[72px] mt-0">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            value="Yes"
                            checked={gender === "Yes"}
                            onChange={handleGenderChange}
                            style={{ color: "yellow", backgroundColor: "#F26A5A" }}
                            className="form-radio bg-[#F26A5A] h-4 w-4"
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          <input
                            type="radio"
                            value="No"
                            checked={gender === "No"}
                            onChange={handleGenderChange}
                            className="form-radio bg-[#F26A5A] h-4 w-4"
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>
                    <div
                      className="flex ml-11 mt-4"
                      style={{
                        fontSize: "18px",
                        lineHeight: "22px",
                        fontWeight: "700",
                        fontFamily: "'Lato', sans-serif",
                      }}
                    >
                      Payment
                    </div>
                    <div
                      className="flex ml-11 mt-4"
                      style={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        fontFamily: "'Lato', sans-serif",
                      }}
                    >
                      The order total will be payable at the venue.
                    </div>
                    <div className="flex ml-11 mt-9">
                      <div
                        style={{
                          fontSize: "18px",
                          lineHeight: "22px",
                          fontWeight: "700",
                          fontFamily: "'Lato', sans-serif",
                          color: "#F26A5A",
                        }}
                      >
                        Order total
                      </div>
                      <div
                        className="ml-11"
                        style={{
                          fontSize: "18px",
                          lineHeight: "22px",
                          fontWeight: "700",
                          fontFamily: "'Lato', sans-serif",
                          color: "#F26A5A",
                        }}
                      >
                        $200
                      </div>
                    </div>
                    <center>
                      <div className="flex justify-center mb-5">
                        <button
                          className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-5 mr-2 mr-5 rounded-[4px]`}
                        >
                          Modify Order
                        </button>
                        <button
                          className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-5 mr-2 ml-5 rounded-[4px]`}
                        >
                          Submit
                        </button>
                      </div>
                    </center>
                  </>
                </div>
              </>
              :
              <div style={{ width: '100%', borderBottom: '1px solid #D1D1D1', borderLeft: '1px solid #D1D1D1', borderRight: '1px solid #D1D1D1' }}>
                <div className="flex ml-11 px-4 mr-10 mt-16">
                  <div className="w-[48px] h-[48px]">
                    <Image src={'/images/avatar.png'} alt="image" width={200} height={200} />
                  </div>
                  <div className="ml-5" style={{ fontSize: '18px', lineHeight: '22px', fontFamily: "'Lato', sans-serif", color: '#707070', fontWeight: '600' }}>
                    Hi Jane. Thank you for login in.<br /> Looks like you&apos;re all set.
                  </div>
                </div>
                <>
                  <div className="flex justify-between px-11 mt-7">
                    <div className={`${styles.radioHeader} mb-2`}>
                      Is this for you?
                    </div>
                    <div className="mr-[72px] mt-0">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          value="Yes"
                          checked={gender === "Yes"}
                          onChange={handleGenderChange}
                          style={{ color: "yellow" }}
                          className="form-radio h-4 w-4"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center ml-6">
                        <input
                          type="radio"
                          value="No"
                          checked={gender === "No"}
                          onChange={handleGenderChange}
                          className="form-radio text-blue-500 h-4 w-4"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  <center className="mt-6">
                    <input
                      type="text"
                      placeholder="Name for the reservation."
                      className="w-[305px] sm:w-[359px] h-[50px] pl-4 border-2 border-solid border-blue-300 rounded-md mb-4"
                    />
                  </center>
                  <div
                    className="flex ml-11 mt-4"
                    style={{
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: "700",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  >
                    Payment
                  </div>
                  <div
                    className="flex ml-11 mt-4"
                    style={{
                      fontSize: "14px",
                      lineHeight: "17px",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  >
                    The order total will be payable at the venue.
                  </div>
                  <div className="flex ml-11 mt-9">
                    <div
                      style={{
                        fontSize: "18px",
                        lineHeight: "22px",
                        fontWeight: "700",
                        fontFamily: "'Lato', sans-serif",
                        color: "#F26A5A",
                      }}
                    >
                      Order total
                    </div>
                    <div
                      className="ml-11"
                      style={{
                        fontSize: "18px",
                        lineHeight: "22px",
                        fontWeight: "700",
                        fontFamily: "'Lato', sans-serif",
                        color: "#F26A5A",
                      }}
                    >
                      $200
                    </div>
                  </div>
                  <center>
                    <div className="flex justify-center mb-5">
                      <button
                        className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-5 mr-2 mr-5 rounded-[4px]`}
                      >
                        Modify Order
                      </button>
                      <button
                        className={`${styles?.formItems} btn-primary h-[48px] mt-6 sm:mt-12 mb-5 mr-2 ml-5 rounded-[4px]`}
                      >
                        Submit
                      </button>
                    </div>
                  </center>
                </>
              </div>
          )}
        </div>

        <div className="max-w-full space-y-4 lg:max-w-[707px] lg:ml-10 ">
          {Array(5).fill().map((_, index) => (
            <>
              <RevealWrapper key={index}
                rotate={{ x: 0, y: -12, z: 0 }}
                origin="bottom"
                delay={200}
                duration={1000}
                distance="200px"
                reset={true}
                viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <div key={index} className="w-full h-[148px]">
                  <div class="flex items-center mt-6 lg:ml-11">
                    <div class="w-[48px] h-[48px] mb-[62px]">
                      <Image
                        src={"/images/avatar.png"}
                        alt="avatar"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div class="ml-[10px] sm:ml-[30px]">
                      <p
                        class="text-lg font-bold"
                        style={{
                          fontSize: "17px",
                          lineHeight: "22px",
                          fontFamily: "'Lato', sans-serif",
                        }}
                      >
                        Body Temple Beauty
                      </p>
                      <div class="flex mt-3">
                        <div className="flex items-center mb-5">
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
                        <p className="mb-[20px]  sm:ml-8">Abdomen/Bikini Waxing</p>
                        <p className="ml- sm:ml-8" style={{ fontStyle: "italic" }}>
                          Subtotal
                        </p>
                        <p
                          className="ml-5"
                          style={{
                            color: "#F26A5A",
                            fontWeight: "700",
                            fontSize: "14px",
                          }}
                        >
                          $30
                        </p>
                      </div>
                      <div class="flex mt-2">
                        <div className="flex">
                          <BsCalendar size={20} color="#F26A5A" />
                          <span
                            className="ml-[12px]"
                            style={{
                              color: "#808285",
                              fontSize: "14px",
                              lineHeight: "17px",
                              fontFamily: "'Lato', sans-serif",
                            }}
                          >
                            November 22, 2019
                          </span>
                        </div>
                        <div className="flex ml-[34px]">
                          <GiBackwardTime size={25} color="#F26A5A" />
                          <span
                            className="ml-[12px]"
                            style={{
                              color: "#808285",
                              fontSize: "14px",
                              lineHeight: "17px",
                              fontFamily: "'Lato', sans-serif",
                            }}
                          >
                            12-1 PM
                          </span>
                        </div>
                        <div className="flex ml-[34px]">
                          <AiOutlineUser size={25} color="#F26A5A" />
                          <span
                            className="ml-[12px]"
                            style={{
                              color: "#808285",
                              fontSize: "14px",
                              lineHeight: "17px",
                              fontFamily: "'Lato', sans-serif",
                            }}
                          >
                            Jane
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
              </RevealWrapper>
            </>
          ))}
        </div>

      </div>
    </div>

  );
}

export default Checkout;
