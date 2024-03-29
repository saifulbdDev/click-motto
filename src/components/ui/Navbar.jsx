import logo from "/images/logo.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import Facebook from "/images/facebook.png";
import Twitter from "/images/twitter.png";
import Instagram from "/images/instagram.png";
import Pinterest from "/images/pinterest.png";
import Veddit from "/images/veddit.png";
import Meddit from "/images/meddit.png";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import { FaSortUp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {

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
          <Dropdown >
            <Dropdown.Button>
              <BiDotsHorizontalRounded   />
            </Dropdown.Button>
            <Dropdown.Content dropdownClass="bg-gray-900 ">
              <Dropdown.List>
              <FaSortUp className="text-gray-900 absolute -top-2.5 left-2 text-2xl" />
                <Dropdown.Item>About Click Motto</Dropdown.Item>
                <Dropdown.Item>Pricing</Dropdown.Item>
                <Dropdown.Item>License</Dropdown.Item>
                <Dropdown.Item>Partnerships</Dropdown.Item>
                <Dropdown.Item>Blog</Dropdown.Item>
                <Dropdown.Item>Help</Dropdown.Item>
                <Dropdown.Item>Join The Team</Dropdown.Item>
                <Dropdown.Item className='px-0 py-1.5'>
                  <ul className="flex justify-between space-x-3 items-center py-2 px-3 border-t border-gray-400">
                   
                    {socialIcons.map((item, index) => (
                      <li key={"nav-icons-" + index}>
                        <a href={item.link}>
                          <img src={item.icon} height={14} alt="Social Icons" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </Dropdown.Item>
              </Dropdown.List>
            </Dropdown.Content>
          </Dropdown>
        </li>
        <li className="lg:ml-6 px-2.5 py-1 lg:p-0">
          <button className="text-gray-600 border border-gray-600 rounded-md bg-transparent py-1.5 px-2.5 font-medium duration-500 hover:bg-gray-600 hover:text-white">
            Submit Photos
          </button>
        </li>
        <li className="lg:ml-6">
          <div className="lg:h-8 lg:w-[2px] lg:m-0 bg-gray-400 w-full h-[1px] mt-2.5 mb-1"></div>
        </li>
        <NavItem label="Login" />
        <li className="lg:ml-6 px-2.5 py-1 lg:p-0">
          <button className="text-white border border-orange-500 rounded-md bg-orange-500 py-1.5 px-2.5 font-medium duration-500 hover:bg-white hover:text-orange-500">
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
