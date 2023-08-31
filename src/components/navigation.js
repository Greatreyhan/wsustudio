import React, { useState } from "react";
import { Logo } from "../media";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
const Navigation = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed w-full z-50">
      <div>
        <nav className="bg-white">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16">
              <div className="w-full justify-between flex items-center">
                <Link className="flex-shrink-0" to="/">
                  <img className="w-full h-8" src={Logo} alt="Workflow" />
                </Link>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    <Link
                      className="text-gray-800  hover:text-red-700 px-3 uppercase py-2 rounded-md text-sm font-medium"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="text-gray-300  hover:text-red-700 px-3 uppercase py-2 rounded-md text-sm font-medium"
                      to="/services"
                    >
                      Our Services
                    </Link>
                    <Link
                      className="text-gray-300  hover:text-red-700 px-3 uppercase py-2 rounded-md text-sm font-medium"
                      to="/portofolios"
                    >
                      Portofolios
                    </Link>
                    <Link
                      className="text-gray-300  hover:text-red-700 px-3 uppercase py-2 rounded-md text-sm font-medium"
                      to="/aboutus"
                    >
                      About Us
                    </Link>
                    <Link
                      className="text-gray-300  hover:text-red-700 px-3 uppercase py-2 rounded-md text-sm font-medium"
                      to="/career"
                    >
                      Career
                    </Link>
                    <a
                      className="text-gray-300  hover:text-red-700 px-3 uppercase py-2 rounded-md text-sm font-medium"
                      href="#contact"
                    >
                      Contact Us
                    </a>
    
                  </div>
                </div>
              </div>
              <div className="flex -mr-2 md:hidden" onClick={()=>setNav(!nav)}>
                <button className="text-gray-800 hover:text-gray-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {nav ? (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  onClick={()=>setNav(!nav)}
                  className="text-gray-800 hover:text-red-700 block px-3 py-2 rounded-md text-base font-medium"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  onClick={()=>setNav(!nav)}
                  className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                  to="/services"
                >
                  Our Services
                </Link>
                <Link
                  onClick={()=>setNav(!nav)}
                  className="text-gray-300 hover:text-red-700 block px-3 py-2 rounded-md text-base font-medium"
                  to="/portofolios"
                >
                  Portofolios
                </Link>
                <Link
                  onClick={()=>setNav(!nav)}
                  className="text-gray-300 hover:text-red-700 block px-3 py-2 rounded-md text-base font-medium"
                  to="/aboutus"
                >
                  About Us
                </Link>
                <Link
                  onClick={()=>setNav(!nav)}
                  className="text-gray-300 hover:text-red-700 block px-3 py-2 rounded-md text-base font-medium"
                  to="/career"
                >
                  Career
                </Link>
                <a
                  className="text-gray-300 hover:text-red-700 block px-3 py-2 rounded-md text-base font-medium"
                  href="#contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
