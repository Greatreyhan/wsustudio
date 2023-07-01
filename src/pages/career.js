import React from 'react'
import { Hero, M1, M2, M3, M4, M5 } from '../media'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsInstagram, BsTwitter, BsFacebook, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

const Career = () => {
  return (
    <div>
      {/* Hero Image */}
      <div>
        <div className='w-10/12 mx-auto flex justify-center items-center'>
          <div className='flex-1'>
            <h1 className='text-7xl pt-32 font-bold'>Join <span className='text-red-700'>Our</span> Team</h1>
            <p className='text-xl font-semibold mt-8'>We’re a team that supports each other in pushing for the best, and we’re looking for people with the skills and character to make us even better.</p>
            <Link
              to="/aboutus"
              className="py-2 px-5 bg-slate-900 text-white font-normal text-lg rounded-lg mt-8 inline-flex items-center"
            >
              <span>Contact Us</span>
              <BsArrowRight className="ml-2 font-semibold" />
            </Link>
            {/* Social Media */}
            <div className='flex space-x-4 mt-32'>
              <a href="#"><BsInstagram className='text-2xl text-slate-800' /></a>
              <a href="#"><BsFacebook className='text-2xl text-slate-800' /></a>
              <a href="#"><BsTwitter className='text-2xl text-slate-800' /></a>
            </div>
          </div>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img className='w-1/2' src={Hero} />
            <div className='absolute bottom-5 right-5 inline-flex items-center'>
              <p className='uppercase text-slate-800 text-sm text-semibold'>Scroll for More</p>
              <BsArrowDownShort className="ml-2 font-semibold text-red-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Promotion */}
      <div className='w-10/12 mx-auto mt-20'>
        <h2 className='text-5xl font-bold'>Open <br /><span className='text-red-600'>Position?</span></h2>
        <div>
          <a className='text-2xl font-semibold py-3 px-6 flex justify-between items-center cursor-pointer my-2 hover:bg-slate-100 border-b border-slate-300'><span>WSU Studio Academy</span><span className='text-4xl'>+</span></a>
          <a className='text-2xl font-semibold py-3 px-6 flex justify-between items-center cursor-pointer my-2 hover:bg-slate-100 border-b border-slate-300'><span>Design</span><span className='text-4xl'>+</span></a>
          <a className='text-2xl font-semibold py-3 px-6 flex justify-between items-center cursor-pointer my-2 hover:bg-slate-100 border-b border-slate-300'><span>Engineering</span><span className='text-4xl'>+</span></a>
          <a className='text-2xl font-semibold py-3 px-6 flex justify-between items-center cursor-pointer my-2 hover:bg-slate-100 border-b border-slate-300'><span>People Operations</span><span className='text-4xl'>+</span></a>
          <a className='text-2xl font-semibold py-3 px-6 flex justify-between items-center cursor-pointer my-2 hover:bg-slate-100 border-b border-slate-300'><span>Finance & Legal</span><span className='text-4xl'>+</span></a>
        </div>
      </div>

      {/* Slide Show */}
      <div className='w-10/12 mx-auto mt-20'>
        <div className='flex justify-around gap-9 mt-8'>
          <img className='w-4/12' src={M1} />
          <img className='w-4/12' src={M2} />
          <img className='w-4/12' src={M3} />
          <img className='w-4/12' src={M4} />
          <img className='w-4/12' src={M5} />
        </div>
      </div>
    </div>
  )
}

export default Career