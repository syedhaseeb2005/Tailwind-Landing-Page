import React, { useState } from "react";
import logo from "../assests/logo.png";
import { Close, Menu } from "@mui/icons-material";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="top-0 sticky z-50 py-3 backdrop-blur-lg border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">WorkFlow</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href=""
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handleMenu} className="ease-in-out duration-1000">
              {menuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
              <div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
                <ul className="text-center">
                  <li className="py-4">
                    <a href="">Features</a>
                  </li>
                  <li className="py-4">
                    <a href="">WorkFlow</a>
                  </li>
                  <li className="py-4">
                    <a href="">Pricing</a>
                  </li>
                  <li className="py-4">
                    <a href="">Testimonials</a>
                  </li>
                </ul>
                <div className="flex space-x-6">
                  <a href="#" className="py-2 px-3 border rounded-md">
                    Sign In
                  </a>
                  <a
                    href="#"
                    className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                  >
                    Create an Account
                  </a>
                </div>
              </div>
            )}
      </div>
    </nav>
  );
};

export default Navbar;
