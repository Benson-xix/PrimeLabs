import { useEffect, useState } from "react";
import Logo from "../assets/Image/image 1.png"
import GetStarted from "./GetStarted"
import { Link, useLocation } from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleItemClick = (index) => {
      setSelectedItem(index);
      setIsMobileMenuOpen(false);
    };

    useEffect(() => {
      const path = location.pathname;
      const newIndex = getIndexFromPath(path);
      setSelectedItem(newIndex);
    }, [location]);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };
  
    const getIndexFromPath = (path) => {
      switch (path) {
        case '/':
          return 0;
        case '/about':
          return 1;
        case '/services':
          return 2;
        case '/contact':
          return 3;
        default:
          return 0;
      }
    };
  
  return (
    <div className=" w-[100%] flex h-[80px]  justify-between gap-2 fixed bg-black bg-opacity-50 p-2 " style={{zIndex:"100"}}  >
    <div className="flex justify-start pl-8 "> 
    <Link to="/"> <img src={Logo} alt="Logo" className=" w-10 h-10  mt-2"/></Link>
    </div>
    <div className=" max-ms:flex md:hidden h-[50px]  xxs:pr-[3rem]">
      <button
        className="p-2 rounded-md bg-gray-200 text-gray-800 mt-3 "
        onClick={toggleMobileMenu}
      >
          {isMobileMenuOpen ? (
          <AiOutlineClose onClick={closeMobileMenu} className="w-5 h-5" />
        ) : (
          <BiMenuAltLeft onClick={closeMobileMenu} className="w-5 h-5" />
        )}
      </button> 
      {isMobileMenuOpen && (

        <div className="">
            <div className="bg-ash flex flex-col gap-7 p-3 fixed sm:w-[400px]  xxs:w-[300px] h-[520px]  mt-2 xxs:right-[20%] max-ms:top-[5rem] right-[20%]  rounded-[5px] animate-slide-in-left   " style={{zIndex:"200"}}>
    <ul className="mt-2 list-none flex font-sora flex-col text-word gap-[3rem] p-2 ">
          <li className="cursor-pointer font-sora hover-effect-box" onClick={() => handleItemClick(0)}>
            <Link to="/" className={`${selectedItem === 0 ? "font-bold border-b-2 border-Gold" : ""}`}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer font-sora hover-effect-box" onClick={() => handleItemClick(1)}>
            <Link to="/about" className={`${selectedItem === 1 ? "font-bold border-b-2 border-Gold" : ""}`}>
              About Us
            </Link>
          </li>
          <li className="cursor-pointer font-sora hover-effect-box" onClick={() => handleItemClick(2)}>
            <Link to="/services" className={`${selectedItem === 2 ? "font-bold border-b-2 border-Gold" : ""}`}>
              Services
            </Link>
          </li>
{/*           <li className="cursor-pointer font-sora hover-effect-box" onClick={() => handleItemClick(3)}>
            <Link to="/contact" className={`${selectedItem === 3 ? "font-bold border-b-2 border-Gold" : ""}`}>
              FAQs
            </Link>
          </li> */}
        </ul>
        <GetStarted />
        </div>
        </div>
      
        
      )}
     
    </div>
    <div className=" max-ms:hidden md:flex justify-end h-[48px] pr-[3rem]  gap-3 mt-2 text-word">
      <ul className="list-none font-sora flex justify-end lg:flex-row md:flex-row text-word lg:gap-10  sm:gap-5  w-[100% ]  mt-2 ">
        <li
          className={`cursor-pointer font-sora hover-effect-box ${
            selectedItem === 0 ? "border-b-2 border-Gold" : ""
          }`}
          onClick={() => handleItemClick(0)}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`cursor-pointer font-sora hover-effect-box ${
            selectedItem === 1 ? "border-b-2 border-Gold" : ""
          }`}
          onClick={() => handleItemClick(1)}
        >
          <Link to="/about">About Us</Link>
        </li>
        <li
          className={`cursor-pointer font-sora hover-effect-box ${
            selectedItem === 2 ? "border-b-2 border-Gold" : ""
          }`}
          onClick={() => handleItemClick(2)}
        >
          <Link to="/services">Services</Link>
        </li>
{/*         <li
          className={`cursor-pointer font-sora hover-effect-box ${
            selectedItem === 3 ? "border-b-2 border-Gold" : ""
          }`}
          onClick={() => handleItemClick(3)}
        >
          <Link to="/contact">FAQs</Link>
        </li> */}
      </ul>
      <GetStarted />
    </div>
    </div>
  )
}

export default Header
