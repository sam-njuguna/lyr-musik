import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
  <div className="mt-16 md:mt-10">
    {links.map((link) => (
      <NavLink
        to={link.to}
        key={link.name}
        className="flex gap-4 flex-row text-gray-200 hover:text-cyan-700 font-medium my-8"
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="text-[2rem]" />
        {link.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handelePage = () => {
    window.scroll(0, 0);
    setOpen(false);
  };

  return (
    <>
      <div className="md:flex hidden flex-col w-[24px p-6 sm:p-10 bg-[#0a0414] pt-6 ">
        <img
          src={logo}
          alt="logo"
          className="w-full h-16  object-contain mt-[10rem] md:pt-2 "
        />
        <NavLinks />
      </div>
      <div className="fixed md:hidden block top-6 right-3 z-50  ">
        {open ? (
          <RiCloseLine
            className="text-[1.5rem] text-white mr-4  cursor-pointer"
            onClick={() => setOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="text-[1.5rem] text-white mr-4  cursor-pointer"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-16  md:top-0 h-[80vh] md:h-[100vh] w-1/2 bg-gradient-to-tl  from-white/10 to-[#0c0635] backdrop-blur-[15px] z-10 px-6 pt-20 md:pt-6   md:hidden smooth-transition ${
          open ? "left-0" : "-left-full"
        } `}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={handelePage} />
      </div>
    </>
  );
};

export default Sidebar;
