import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../../assets/icons';
import { MdMenu } from 'react-icons/md';

const Navigation: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const location = useLocation();

  const handleNav = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <nav className="mx-auto w-full py-2 fixed z-50 bg-white">
      <div className="md:w-11/12 w-full px-6 md:px-10 rounded-lg mx-auto flex justify-between items-center">
        <div className="flex md:w-1/12 w-20 h-full justify-center items-center">
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
              key={item.to}
              className={`ml-10 text-sm hover:text-primary text-slate-950 ${
                location.pathname === item.to ? 'font-bold' : ''
              }`}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mr-8 hidden md:block">
          <a
            href="#"
            className="text-primary border-primary border hover:bg-primary hover:text-white px-6 py-2 text-sm rounded-xl"
          >
            Contact Us
          </a>
        </div>
        <div onClick={handleNav} className="md:hidden flex items-center">
          <MdMenu className="text-3xl" />
        </div>
      </div>
      {navbar && (
        <div className="w-screen h-screen fixed bg-slate-50 bg-opacity-90 z-10">
          <div className="flex-col w-full h-full text-center pt-8 justify-around items-center text-xl tracking-wide text-slate-900">
            {[
              { to: '/', label: 'Home' },
              { to: '/service', label: 'Services' },
              { to: '/portofolio', label: 'Our Work' },
              { to: '/blog', label: 'Blog' },
              { to: '/career', label: 'Career' },
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Contact Us' },
            ].map((item) => (
              <Link
                key={item.to}
                onClick={handleNav}
                className={`py-3 block font-normal text-base hover:text-primary hover:underline ${
                  location.pathname === item.to
                    ? 'font-extrabold text-slate-900'
                    : ''
                }`}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
