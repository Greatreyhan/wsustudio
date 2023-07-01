import React from 'react'
import { Hero, P1, P2, P3, P4, P5, P6 } from '../media'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsInstagram, BsTwitter, BsFacebook, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

const Portofolios = () => {
  return (
    <div>
      {/* Hero Image */}
      <div>
        <div className='w-10/12 mx-auto flex justify-center items-center'>
          <div className='flex-1'>
            <h1 className='text-7xl pt-32 font-bold'>A word about  <span className='text-red-700'>our</span> services</h1>
            <p className='text-xl font-semibold mt-8'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
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

      {/* Filter */}
      <div className='flex w-10/12 mx-auto justify-around mt-20 uppercase font-semibold text-slate-600'>
        <a className='px-5 py-1 rounded-lg cursor-not-allowed bg-slate-900 text-white'>All</a>
        <a className='hover:text-red-800 px-5 py-1 rounded-lg cursor-pointer'>Mobile App Dev</a>
        <a className='hover:text-red-800 px-5 py-1 rounded-lg cursor-pointer'>Web Dev</a>
        <a className='hover:text-red-800 px-5 py-1 rounded-lg cursor-pointer'>Backend & Devops</a>
        <a className='hover:text-red-800 px-5 py-1 rounded-lg cursor-pointer'>IT Consulting Services</a>
        <a className='hover:text-red-800 px-5 py-1 rounded-lg cursor-pointer'>Website & App Maintenance</a>
      </div>

      {/* Project Show */}
      <div className='w-10/12 mx-auto'>
        <div className='flex flex-wrap mt-8 justify-around'>
          <div className='flex flex-col w-5/12 m-8'>
            <img src={P1} />
            <p className='font-bold mt-4 text-xl'>Air Mineral Pelangi</p>
            <p>Website Dev</p>
          </div>
          <div className='flex flex-col w-5/12 m-8'>
            <img src={P2} />
            <p className='font-bold mt-4 text-xl'>Goal.com X Rexona</p>
            <p>Website Dev</p>
          </div>
          <div className='flex flex-col w-5/12 m-8'>
            <img src={P3} />
            <p className='font-bold mt-4 text-xl'>Andalan Finance</p>
            <p>Mobile Apps Dev, Website Dev</p>
          </div>
          <div className='flex flex-col w-5/12 m-8'>
            <img src={P4} />
            <p className='font-bold mt-4 text-xl'>Zuna Sport</p>
            <p>Website Dev</p>
          </div>
          <div className='flex flex-col w-5/12 m-8'>
            <img src={P5} />
            <p className='font-bold mt-4 text-xl'>Lippo Insurance</p>
            <p>Mobile Apps Dev</p>
          </div>
          <div className='flex flex-col w-5/12 m-8'>
            <img src={P6} />
            <p className='font-bold mt-4 text-xl'>Pasarku</p>
            <p>Mobile Apps Dev, Website Dev</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portofolios