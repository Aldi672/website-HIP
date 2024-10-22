import { IoMdMenu } from "react-icons/io";
import Logo from "../assets/img/WhatsApp_Image_2024-09-02_at_14.52.52-removebg.png";
import "../css/logo.css"
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [button, setButton] = useState(true);
  const [navbarBackground, setNavbarBackground] = useState('bg-transparent');

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBackground('bg-white shadow-md backdrop-blur-md bg-opacity-50');
    } else {
      setNavbarBackground('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 z-50 w-full ${navbarBackground} transition-all duration-500 md:px-7 px-5 py-4 flex justify-between items-center`}>
        <div className="flex items-center gap-1">
          <img src={Logo} id="Logo" alt="Logo" />


        </div>
        <div id="Navbar" className="md:flex hidden items-center font-signika">
          <ul className="flex space-x-3 text-[17px] text-black font-roboto font-bold">
            <a href="#beranda"><li className="inline-block px-2 py-1 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 ">
              Home page</li></a>
            <a href="#tentangkami"><li className="inline-block px-2 py-1 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 ">Introduction</li></a>
            <a href="#frame"><li className="inline-block px-2 py-1 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 ">Company</li></a>
            <a href="#fotofolio"><li className="inline-block px-2 py-1 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 ">Portofolio</li></a>
            <a href="#contact"><li className="inline-block px-2 py-1 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 ">Contact us</li></a>
          </ul>
        </div>
        <div onClick={() => setButton(!button)} className="md:hidden flex items-center cursor-pointer">
          <IoMdMenu size={25} color="white" />
        </div>
      </div>

      {/* Sidebar responsive */}
      <div
        className={`${button ? "-right-60" : "right-0"
          } w-60 md:hidden bg-sky-500 backdrop-blur-md fixed top-0 h-screen transition-all duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-row-reverse items-center justify-between p-7">
          <FaTimes onClick={() => setButton(!button)} color="white" size={25} className="cursor-pointer" />
          {/* <img src={Logo} className="w-20" alt="Logo" /> */}
        </div>
        <ul className="flex flex-col font-signika space-y-3 p-4 text-white">
          <a href="#beranda">
            <li className="p-2 cursor-pointer rounded-lg hover:bg-white hover:text-black">
              Home page</li>
          </a>
          <a href="#tentangkami">
            <li className="p-2 cursor-pointer rounded-lg hover:bg-white hover:text-black">Introduction</li>
          </a>
          <a href="#frame">
            <li className="p-2 cursor-pointer rounded-lg hover:bg-white hover:text-black">Company</li>
          </a>
          <a href="#fotofolio">
            <li className="p-2 cursor-pointer rounded-lg hover:bg-white hover:text-black">Portofolio</li>
          </a>
          <a href="#contact">
            <li className="p-2 cursor-pointer rounded-lg hover:bg-white hover:text-black">Contact us</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
