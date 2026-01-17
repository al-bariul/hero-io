import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItem = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];
  const singleNavItem = navItem.map((item, index) => (
    <NavLink key={index} className="md:mr-10 mb-2" to={item.path}>
      {item.name}
    </NavLink>
  ));

  const btn = () => (
    <div className="btn flex md:flex-row flex-col">
      <NavLink
        className="btn bg-green-500 text-white mr-5 px-5 py-2 rounded-lg"
        to={"https://github.com/al-bariul"}
      >
        Contribute
      </NavLink>
    </div>
  );

  return (
    <div>
      <nav className="bg-amber-300 flex items-center justify-between max-w-[1200px] mx-auto h-16">
        {/* Responsiveness */}
        <div className="logo">
          {/* Responsive Icons & Logo */}
          <div className="menu-bar flex items-center justify-center bg-red-400">
            {/* Responsive icons */}
            <div onClick={() => setOpen(!open)} className="mt-1">
              {open ? (
                <X className="md:hidden"></X>
              ) : (
                <Menu className="md:hidden"></Menu>
              )}
            </div>

            {/* Logo */}
            <NavLink to={"/"}>
              <p className="text-3xl font-bold">HERO.IO</p>
            </NavLink>
          </div>

          {/* Resonsive List & Responsive Buttons */}
          <div
            className={`responsive md:hidden absolute  bg-blue-500 duration-300 ${
              open ? "top-14" : "-top-70"
            }`}
          >
            {/* Responsive List */}
            <ul className="flex flex-col items-center justify-center p-8">
              {singleNavItem}
            </ul>

            {/* Responsive Button */}
            <div className="">{btn()}</div>
          </div>
        </div>

        {/* Big Screen Lists */}
        <ul className="md:flex hidden">{singleNavItem}</ul>

        {/* Big Screen Buttons */}
        <div className="hidden md:block">{btn()}</div>
      </nav>
    </div>
  );
};

export default Navbar;
