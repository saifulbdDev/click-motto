import logo from "/images/logo.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaSortUp } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import Facebook from "/images/facebook.png";
import Twitter from "/images/twitter.png";
import Instagram from "/images/instagram.png";
import Pinterest from "/images/pinterest.png";
import Veddit from "/images/veddit.png";
import Meddit from "/images/meddit.png";
import NavItem from "./NavItem";


import DropdownItem from "./DropdownItem";

import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showFullNav, setShowFullNav] = useState(false);

  const socialIcons = [
    {
      icon: Facebook,
      link: "#"
    },
    {
      icon: Twitter,
      link: "#"
    },
    {
      icon: Instagram,
      link: "#"
    },
    {
      icon: Pinterest,
      link: "#"
    },
    {
      icon: Veddit,
      link: "#"
    },
    {
      icon: Meddit,
      link: "#"
    }
  ];

  const dropDownToggle = () => {
    setShowDropDown(!showDropDown);
  };
  const fullNavToggle = () => {
    setShowFullNav(!showFullNav);
  };
  return (
    <div className="h-16 w-full px-10 py-4 flex justify-between items-center bg-white fixed top-0 z-[99999]">
      <div className="w-[179.88px]">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <ul
        className={`lg:w-auto lg:flex lg:items-center lg:static lg:h-auto lg:border-none absolute bg-white top-16 w-[250px] h-screen lg:p-0 pt-1 border-l border-white duration-500 z-[9999] ${
          showFullNav ? "right-0" : "right-[-250px]"
        }`}>
        <NavItem label="Explore" active={true} />
        <NavItem label="Discover" />
        <NavItem label="For Professionals" />
        <li className="relative text-gray lg:ml-6 px-2.5 py-1 lg:p-0">
          <BiDotsHorizontalRounded
            className="text-2xl cursor-pointer"
            onClick={dropDownToggle}
          />
          <ul
            className={`absolute top-8 left-0 w-full lg:top-11 lg:-left-2 lg:w-[218px] bg-gray-900 pt-1 ${
              showDropDown ? "block" : "hidden"
            }`}>
            <DropdownItem label="About Click Motto" />
            <DropdownItem label="Pricing" />
            <DropdownItem label="License" />
            <DropdownItem label="Partnerships" />
            <DropdownItem label="Blog" />
            <DropdownItem label="Help" />
            <DropdownItem label="Join The Team" />
            <ul className="flex justify-between space-x-2 items-center py-2 px-3 border-t border-slate-400">
              <FaSortUp className="text-gray-900 absolute -top-2.5 left-2 text-2xl" />
              {socialIcons.map((item, index) => (
                <li key={"nav-icons-" + index}>
                  <a href={item.link}>
                    <img src={item.icon} height={18} alt="Social Icons" />
                  </a>
                </li>
              ))}
            </ul>
          </ul>
        </li>
        <li className="lg:ml-6 px-2.5 py-1 lg:p-0">
          <button className="text-gray-600 border border-gray-600 rounded-md bg-transparent py-2 px-2.5 font-medium duration-500 hover:bg-gray-600 hover:text-white">
            Submit Photos
          </button>
        </li>
        <li className="lg:ml-6">
          <div className="lg:h-8 lg:w-[2px] lg:m-0 bg-gray w-full h-[1px] mt-2.5 mb-1"></div>
        </li>
        <NavItem label="Login" />
        <li className="lg:ml-6 px-2.5 py-1 lg:p-0">
          <button className="text-white border border-orange rounded-md bg-orange-500 py-2 px-2.5 font-medium duration-500 hover:bg-white hover:text-orange-500">
            Join Free
          </button>
        </li>
      </ul>
      <div
        className="text-2xl cursor-pointer  lg:hidden"
        onClick={fullNavToggle}>
        {showFullNav ? <AiOutlineClose /> : <CiMenuFries />}
      </div>
    </div>
  );
};

export default Navbar;
