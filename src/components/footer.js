import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsInstagram, BsTwitter, BsFacebook, BsArrowUpShort } from "react-icons/bs"

const Footer = () => {
  return (
    <>
      {/* End of Page */}
      <div className='md:w-10/12 w-11/12 mx-auto mt-20'>
        <h2 className='text-5xl font-bold text-center'>Let's <span className='text-red-600'>Go</span></h2>
        <p className='text-2xl font-bold md:px-60 mt-4'>We treat our clients like they’re part of the family — because we love getting to be creative and work with awesome people, like you.</p>
        <div className='flex justify-center'>
          <Link
            to="/aboutus"
            className="py-2 px-6 bg-slate-800 text-white font-semibold text-md rounded-lg mt-8 mr-5 inline-flex items-center"
          >
            <span>Contact Us</span>
            <BsArrowRight className="ml-2 font-semibold" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className='md:w-10/12 w-11/12 mx-auto mt-20 flex justify-center items-center pb-5'>
        <p className='md:w-4/12 w-5/12 md:text-base text-xs'>© 2022 WSU Studio </p>
        <a href="#top" className='flex w-4/12 justify-center items-center'>
          <p className='uppercase text-slate-800 text-sm font-semibold'>Back to Top</p>
          <BsArrowUpShort className="ml-2 font-semibold text-red-800" />
        </a>
        {/* Social Media */}
        <div className='flex space-x-4 w-4/12 justify-end items-center' id="socialmedia">
          <a href="#"><BsInstagram className='text-2xl text-slate-800' /></a>
          <a href="#"><BsFacebook className='text-2xl text-slate-800' /></a>
          <a href="#"><BsTwitter className='text-2xl text-slate-800' /></a>
        </div>
      </div>
    </>
  )
}

export default Footer