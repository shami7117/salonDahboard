"use client"
import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { auth, db } from "./../../../firebase/firebase.js";
// import { getAuth } from 'firebase/auth';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isModal, setModal] = useState(false);
  const [isLogin, setIsLogin] = useState(null);

  // const auth = getAuth();
  const user = auth.currentUser;
  console.log('user', user);

  const modalRef = useRef(null);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Cookies.remove('userData');
        router.push('/');
      })
      .catch((error) => {
        console.log('Logout error:', error);
      });
  };
  useEffect(() => {
    setIsLogin(user !== null);

  }, [user]);
  const handleNavbar = () => {
    setNav(!nav);
  };
  console.log("LOGIN", isLogin)


  const handleUrlChange = (newUrl) => {
    // Your logic here
    console.log('New URL:', newUrl);
    setNav(false)
  };
  const router = useRouter();


  useEffect(() => {
    if (isModal) {
      const handleOutsideClick = (e) => {
        if (!modalRef.current.contains(e.target)) {
          setModal(false)
        }
      };

      window.addEventListener('click', handleOutsideClick);

      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isModal]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      handleUrlChange(url);
    };



    // Add the event listener
    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);


  return (
    <header className="max-w-[1500px]  py-8 mx-auto ">

      {/* parent div */}
      <div ref={modalRef}
        className=" flex justify-between px-4 text-primary-color-text items-center font-normal text-base">
        {/* left section */}
        <div className='flex items-center'>
          <Link href={"/"}>
            <Image
              src={"/images/logo_newww.png"}
              alt="logo"
              width={200}
              height={200}
              className="w-[150px] md:w-[200px]"
            />
          </Link>
        </div>
        <div className="lg:flex  social-icons hidden space-x-4 ml-84">
          <div className="icon instagram">
            <BiLogoInstagram size={25} color='#808285' />
          </div>
          <div className="icon twitter">
            <BiLogoTwitter size={25} color='#808285' />
          </div>
          <div className="icon facebook">
            <BiLogoFacebook size={25} color='#808285' />
          </div>
        </div>
        {/* right section */}
        <div className="lg:flex flex-col hidden sm:hidden">
          <ul className="flex relative items-center gap-4 font-medium text-[#808285]">
            <Link href={"/listings"}><li>EXPLORE</li></Link>
            <Link className='whitespace-nowrap' href={"/my-appointments"}><li>MY APPOINTMENTS</li></Link>
            <Link className='whitespace-nowrap' href={"/about-us"}><li>ABOUT US</li></Link>
            <Link href={"/contact-us"}><li>CONTACT</li></Link>
            <Link href={"/business-grow"} className="menu-item">
              <button className={`list-your-business-button bg-red-500 text-white`} style={{ backgroundColor: '#F26A5A', color: 'white', height: '42px', width: '181px', borderRadius: '20px', }}>LIST YOUR BUSINESS</button>
            </Link>
            <li className=''>
              <div className="flex z-50 items-center">
                <div className="user-logo">
                  <AiOutlineUser size={25} color='#F26A5A' />
                </div>{
                  isLogin ? <h1 onClick={() => { setModal(!isModal) }} className={` cursor-pointer`}>My Account</h1> : <Link href={'/my-account'}><span>LOGIN/ACCOUNT</span></Link>

                }

              </div>

            </li>
            <div class={`bg-white py-5 px-3 absolute top-[40px] z-0 right-0  ${isModal ? "block" : "hidden"} transition duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-xl`}>
              <ul class="space-y-2">
                <Link href={"/account-details"} class="bg-[white] whitespace-nowrap hover:bg-[#F26A5A] hover:text-[white] transition duration-300 ease-in-out py-2 px-4 rounded-lg cursor-pointer">My Profile</Link>
                <li onClick={handleLogout} class="bg-[white] hover:bg-[#F26A5A] transition hover:text-[white] duration-300 ease-in-out py-2 px-4 rounded-lg cursor-pointer">Logout</li>
              </ul>
            </div>
          </ul>
        </div>
        {/* menu button  */}
        <div
          onClick={handleNavbar}
          className="block lg:hidden sm:block items-center  cursor-pointer z-50"
        >
          {nav ? (
            <AiOutlineClose size={30} className="text-[#F26A5A] " />
          ) : (
            <CgMenuRightAlt
              size={30}
              className="text-[#F26A5A] "
            />
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center ease-linear duration-300 z-40"
              : "lg:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center ease-linear duration-300 z-400"
          }
        >
          <ul className="flex flex-col gap-6">
            <Link href={"/listings"}><li className="menu-item" style={{ fontWeight: '600', color: '#808285', fontFamily: "'Lato', sans-serif" }}>EXPLORE</li></Link>
            <Link href={"/my-appointments"}><li className="menu-item" style={{ fontWeight: '600', color: '#808285', fontFamily: "'Lato', sans-serif" }}>MY APPOINTMENTS</li></Link>
            <Link href={"/about-us"}><li className="menu-item" style={{ fontWeight: '600', color: '#808285', fontFamily: "'Lato', sans-serif" }}>ABOUT US</li></Link>
            <Link href={"/contact-us"}><li className="menu-item" style={{ fontWeight: '600', color: '#808285', fontFamily: "'Lato', sans-serif" }}>CONTACT</li></Link>
            <li className="menu-item">
              <button className="list-your-business-button h-[38px] w-[180px] py-2 px-3  bg-red-500 text-white" style={{ borderRadius: '20px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>LIST YOUR BUSINESS</button>
            </li>
            <li className="menu-item">
              <div className="flex items-center">
                <div className="user-logo">
                  <AiOutlineUser size={25} color='#F26A5A' />
                </div>
                <Link href={"/my-account"}><span style={{ fontWeight: '600', color: '#808285', fontFamily: "'Lato', sans-serif" }}>LOGIN/ACCOUNT</span></Link>
              </div>
            </li>
            <div className="social-icons flex justify-center items-center gap-4">
              <div className="icon instagram">
                <BiLogoInstagram size={25} color='#808285' />
              </div>
              <div className="icon twitter">
                <BiLogoTwitter size={25} color='#808285' />
              </div>
              <div className="icon facebook">
                <BiLogoFacebook size={25} color='#808285' />
              </div>
            </div>
          </ul>
        </div>
      </div>

    </header>
  );
};




export default Navbar;
