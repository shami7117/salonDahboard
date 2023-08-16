import Link from "next/link";
import React from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';

function Footer() {
  return (
    <footer className="pt-10 pb-5 md:py-10 lg:py-20 xl:py-10" style={{ backgroundColor: '#F26A5A' }}>
      <div className="max-w-[1500px] mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
          <div className="mb-8 sm:mb-0 mt-4">
            <h4 className="text-white text-xl font-bold mb-4" style={{ fontSize: '14px', lineHeight: '12px', fontFamily: "'Lato', sans-serif", color: '#F5F5F5' }}>Contact Us</h4>
            <ul style={{ fontSize: '14px', lineHeight: '12px', fontFamily: "'Lato', sans-serif", color: '#F5F5F5' }}>
              <li className="mt-8"> <a href="tel:“+555 555 5555”">+555 555 5555</a></li>
              <li className="mt-4"><a href="mailto:“info@eznaah.com”">info@eznaah.com</a></li>
            </ul>
          </div>
          <div className="mb-8 sm:mb-0 mt-4">
            <h4 className="text-white text-xl font-bold mb-4" style={{ fontSize: '14px', lineHeight: '12px', fontFamily: "'Lato', sans-serif", color: '#F5F5F5' }}>Customer Service</h4>
            <ul style={{ fontSize: '14px', lineHeight: '12px', fontFamily: "'Lato', sans-serif", color: '#F5F5F5' }}>
              <Link href={"/about-us"}><li className="mt-8">About US</li></Link>
              <Link href={"/contact-us"}><li className="mt-4">Contact US</li></Link>
              <Link href={"faq"}><li className="mt-4">FAQ</li></Link>
              <Link href={"/privacy-policy"}><li className="mt-4">Privacy Policy</li></Link>
              <Link href={"/terms-conditions"}><li className="mt-4">Terms & Conditions</li></Link>
            </ul>
          </div>
          <div className="mb-8 sm:mb-0 mt-4">
            <h4 className="text-white text-xl font-bold mb-4" style={{ fontSize: '14px', lineHeight: '12px', fontFamily: "'Lato', sans-serif", color: '#F5F5F5' }}>Social Media</h4>
            <ul style={{ fontSize: '14px', lineHeight: '12px', fontFamily: "'Lato', sans-serif", color: '#F5F5F5' }}>
              <Link href={"https://www.facebook.com/"} className="flex flex-row mt-8"><BiLogoFacebook size={16} className="mr-2" /> <span className="mt-1">Facebook</span></Link>
              <Link href={"https://twitter.com/"} className="flex flex-row mt-4"><BiLogoTwitter size={16} className="mr-2" /> <span className="mt-1">Twitter</span></Link>
              <Link href={"https://www.instagram.com/"} className="flex flex-row mt-4"><BiLogoInstagram size={16} className="mr-2" /> <span className="mt-1">Instagram</span></Link>
            </ul>
          </div>
          <div className="mb-8 sm:mb-0 mt-4 xl:ml-auto">
            <h4 className="text-white text-xl font-bold mb-4" style={{ fontSize: '14px', lineHeight: '16px', color: '#F5F5F5' }}>Subscribe to our newsletter</h4>
            <ul className="flex flex-col xl:flex-row mb-16 mr-4">
              <input
                type="text"
                placeholder="Email Address"
                color="#FFFFFF"
                className="h-[40px] bg-[#ffffff77] text-[#FFFFFF] w-full md:w-[200px] lg:w-[260px] pl-4 outline-0 border-1 border-white placeholder-black/50"
                style={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  fontFamily: "'Lato', sans-serif",
                  color: "#FFFFFF",
                  border: "1px solid #FFFFFF",
                  borderRadius: '4px'
                }}
              />
              <button className="btn-primary flex justify-center items-center md:justify-center md:items-center w-[120px] h-[40px] mt-5 xl:mt-0 xl:ml-7 rounded-[4px]" style={{ backgroundColor: '#FFFFFF', color: '#F26A5A', fontSize: '10px', lineHeight: '12px', fontWeight: '600', fontFamily: "'Lato', sans-serif" }}>SUBSCRIBE</button>
            </ul>
            <span className="mt-10" style={{ fontSize: '10px', lineHeight: '20px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF' }}>© Eznaah 2019</span>
          </div>
        </div>
      </div>
    </footer >

  );
}

export default Footer;
