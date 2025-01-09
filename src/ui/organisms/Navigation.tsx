import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../../assets/icons';

const Navigation: React.FC = () => {
  //   const [handleDrop, setHandleDrop] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);

  const location = useLocation();

  //   const handleDropDown = () => {
  //     setHandleDrop((prev) => !prev);
  //   };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setNavbar((prev) => !prev);
  };

  if (location.pathname.includes('/admin')) return null;

  return (
    <nav className="mx-auto w-full fixed z-50 bg-white">
      <div className="md:w-11/12 w-full md:px-0 px-10 rounded-lg mx-auto flex justify-between items-center ">
        <div className="flex w-1/12 h-full justify-center items-center ml-8">
          <img className="w-full" src={Logo} alt="Logo" />
        </div>
        <div className="md:flex justify-around items-center px-8 py-2 hidden">

          {[
            { to: '/', label: 'Home' },
            { to: '/service', label: 'Services' },
            { to: '/portofolio', label: 'Our Work' },
            { to: '/blog', label: 'Blog' },
            { to: '/career', label: 'Career' },
            { to: '/about', label: 'About Us' },
          ].map((item) => (
              <Link
                className={`ml-10 text-sm hover:text-primary text-slate-950 ${location.pathname === item.to ? 'font-bold' : ''
                  }`}
                to={item.to}
              >
                {item.label}
              </Link>
          ))}
        </div>
        <div className="mr-8">
          <a
            href="#"
            className="text-primary border-primary border hover:bg-primary hover:text-white px-6 py-2 text-sm rounded-xl"
          >
            Contact Us
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <a href="#" onClick={handleNav}>
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-11 text-slate-50"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-11 text-slate-50"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </a>
        </div>
      </div>
      {navbar && (
        <div className="w-screen h-screen fixed bg-slate-50 bg-opacity-90">
          <div className="font-sans">
            <ul className="flex-col w-screen h-screen text-center pt-32 justify-around items-center text-xl tracking-wide text-white">
              {[
                { to: '/', label: 'Home' },
                { to: '/service', label: 'Services' },
                { to: '/portofolio', label: 'Our Work' },
                { to: '/blog', label: 'Blog' },
                { to: '/career', label: 'Career' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
              ].map((item) => (
                <li
                  key={item.to}
                  className="mr-8 py-3 font-normal text-blue-950 hover:text-blue-800 hover:underline"
                >
                  <Link
                    onClick={handleNav}
                    className={`ml-10 text-lg ${location.pathname === item.to ? 'font-extrabold text-blue-950' : ''
                      }`}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
