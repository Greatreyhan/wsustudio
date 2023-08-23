import React, {useState} from 'react'
import { Logo } from '../media'
import { Link, useLocation } from 'react-router-dom'
const Navigation = () => {
    const [navbar, setNavbar] = useState(false)
    const nowLoc = useLocation();
    return (
        <div className='fixed w-full z-50'>
            <div>
                <nav className="bg-white ">
                    <div className="px-8 mx-auto max-w-7xl">
                        <div className="flex items-center justify-between h-16">
                            <div className="w-full justify-between flex items-center">
                                <Link className="flex-shrink-0" to="/">
                                    <img className="w-full h-8" src={Logo} alt="Workflow" />
                                </Link>
                                <div className="hidden md:block">
                                    <div className="flex items-baseline ml-10 space-x-4">
                                        <Link className={` ${nowLoc.pathname == "/" ? "text-gray-800 border-b-2 border-red-700" : "text-gray-300"} hover:text-red-700 block mx-3 my-2 text-base font-medium`} to="/">
                                            Home
                                        </Link>
                                        <Link className={` ${nowLoc.pathname == "/services" ? "text-gray-800 border-b-2 border-red-700" : "text-gray-300"} hover:text-red-700 block mx-3 my-2 text-base font-medium`} to="/services">
                                            Our Services
                                        </Link>
                                        <Link className={` ${nowLoc.pathname == "/portofolios" ? "text-gray-800 border-b-2 border-red-700" : "text-gray-300"} hover:text-red-700 block mx-3 my-2 text-base font-medium`} to="/portofolios">
                                            Portofolios
                                        </Link>
                                        <Link className={` ${nowLoc.pathname == "/aboutus" ? "text-gray-800 border-b-2 border-red-700" : "text-gray-300"} hover:text-red-700 block mx-3 my-2 text-base font-medium`} to="/aboutus">
                                            About Us
                                        </Link>
                                        <Link className={` ${nowLoc.pathname == "/career" ? "text-gray-800 border-b-2 border-red-700" : "text-gray-300"} hover:text-red-700 block mx-3 my-2 text-base font-medium`} to="/career">
                                            Career
                                        </Link>
                                        <a href="#socialmedia" className="text-gray-300  hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="flex items-center ml-4 md:ml-6">
                                </div>
                            </div>
                            <div onClick={()=>setNavbar(!navbar)} className="flex -mr-2 md:hidden cursor-pointer">
                                <a className="text-gray-800 hover:text-red-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                    <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {navbar ? 
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link onClick={()=>setNavbar(!navbar)} className={` ${nowLoc.pathname == "/" ? "text-white bg-red-700" : "text-gray-800"} hover:text-red-700 block px-3 py-2 text-base font-medium`} to="/">
                                Home
                            </Link>
                            <Link onClick={()=>setNavbar(!navbar)} className={`${nowLoc.pathname == "/services" ? "text-white bg-red-700" : "text-gray-800"} hover:text-red-700 block px-3 py-2 text-base font-medium`}  to="/services">
                            Our Services
                            </Link>
                            <Link onClick={()=>setNavbar(!navbar)} className={`${nowLoc.pathname == "/portofolios" ? "text-white bg-red-700" : "text-gray-800"} text-gray-800 hover:text-red-700 block px-3 py-2 text-base font-medium`}  to="/portofolios">
                            Portofolios
                            </Link>
                            <Link onClick={()=>setNavbar(!navbar)} className={`${nowLoc.pathname == "/aboutus" ? "text-white bg-red-700" : "text-gray-800"} text-gray-800 hover:text-red-700 block px-3 py-2 text-base font-medium`}  to="/aboutus">
                            About Us
                            </Link>
                            <Link onClick={()=>setNavbar(!navbar)} className={`${nowLoc.pathname == "/career" ? "text-white bg-red-700" : "text-gray-800"} text-gray-800 hover:text-red-700 block px-3 py-2 text-base font-medium`}  to="/career">
                            Career
                            </Link>
                            <a onClick={()=>setNavbar(!navbar)} className={`text-gray-800 hover:text-red-700 block px-3 py-2 rounded-md text-base font-medium`} href="#contact">
                            Contact Us
                            </a>
                        </div>
                    </div>
                    : null}
                </nav>
            </div>

        </div>
    )
}

export default Navigation