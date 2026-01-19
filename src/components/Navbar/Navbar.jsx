import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItem = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];
  const singleNavItem = navItem.map((item, index) => (
    <NavLink
      key={index}
      className="md:mr-10 mb-2 text-black font-semibold"
      to={item.path}
    >
      {item.name}
    </NavLink>
  ));

  const btn = () => (
    <div className="border-amber-800">
      <NavLink
        className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] mr-5 px-5 py-2 rounded-lg"
        to={"https://github.com/al-bariul"}
      >
        <i class="fa-brands fa-github"></i>
        <span className="ml-2">Contribute</span>
      </NavLink>
    </div>
  );

  return (
    <div>
      <nav className="bg-white flex items-center justify-between max-w-[1200px] mx-auto h-16">
        <div className="logo">
          <div className="menu-bar flex items-center justify-center">
            <div onClick={() => setOpen(!open)} className="mt-1">
              {open ? (
                <X className="md:hidden text-black"></X>
              ) : (
                <Menu className="md:hidden text-black"></Menu>
              )}
            </div>

            <NavLink to={"/"} className={"flex items-center"}>
              <img className="max-w-12" src={Logo} alt="" />
              <p className="text-3xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </p>
            </NavLink>
          </div>
          <div
            className={`responsive md:hidden absolute  bg-white duration-300 ${
              open ? "top-16" : "-top-70"
            }`}
          >
            <ul className="flex flex-col items-center justify-center p-8">
              {singleNavItem}
            </ul>
            <div className="">{btn()}</div>
          </div>
        </div>

        <ul className="md:flex hidden">{singleNavItem}</ul>
        <div className="hidden md:inline-block">{btn()}</div>
      </nav>
    </div>
  );
};

export default Navbar;
