import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ImCancelCircle } from 'react-icons/im';



const Modal = ({ showModal, closeModal }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);




  const handleToggle = () => {
    console.log('Button clicked'); // Check if the button click is being registered in the console

    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={` fixed overflow-y-scroll  inset-0 z-50 flex items-center px-[80px] py-[60px] justify-center ${showModal ? 'visible' : 'invisible'
        }`}
    >

      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="bg-white relative    p-6  rounded-lg shadow-lg z-10">

        <button
          className="mt-4 absolute  top-0 right-0 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          <ImCancelCircle size={30} color='#F26A5A' />
        </button>
        <div className='grid grid-cols-1 sm:grid-cols-[8fr_4fr]'>
          <div>
            <Image src={'/images/map.webp'} alt='' width={1080} height={1080} className='pr-8' />
          </div>
          <div className='flex-col justify-center items-center'>
            <p className='mt-4 text-[18px] text-[#707070]'>Body Temple Beauty</p>
            <p className='mt-4 text-[14px] text-[#707070]'>123 rue Sherbrooke , Montreal, QC</p>
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
                  <span className="text-[#F26A5A]  text-[12px] font-bold  ">
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

      </div>

    </div>
  );
};

export default Modal;
