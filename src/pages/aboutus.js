import React from 'react'
import { Hero, M1, M2, M3, M4, M5 } from '../media'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsInstagram, BsTwitter, BsFacebook, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

const Aboutus = () => {
  return (
    <div className='overflow-x-hidden'>
      {/* Hero Image */}
      <div>
        <div className='w-10/12 mx-auto flex justify-center items-center'>
          <div className='flex-1'>
            <h1 className='text-7xl pt-32 font-bold'>All About <span className='text-red-700'>WSU</span> Studios</h1>
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

      {/* About WSU Studio */}
      <div className='w-10/12 mx-auto mt-20'>
        <p className='text-2xl font-bold px-60 mt-4'><span className='text-red-700 font-bold text-4xl'>WSU</span> is a software design and engineering team. treat our clients like they’re part of the family — because we love getting to be creative and work with awesome people, like you.</p>
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

      {/* WSU Approach */}
      <div className='w-10/12 mx-auto mt-20'>
        <h2 className='text-5xl font-bold'>Our <br /><span className='text-red-600'>Approach</span></h2>
        <p className='text-2xl font-bold mt-4'>Donec consequat nisl metus, ut luctus mi mollis nec. Ut molestie elit vel ante dapibus scelerisque. Nulla ut eros a nisl pellentesque commodo ac eget nunc.</p>
      </div>

      {/* WSU Step */}

      <div className="container p-6 px-6 mx-auto bg-white dark:bg-gray-800">
        <div className="flex flex-wrap justify-center my-12 dark:text-white">
          <div className="w-full p-8 md:w-1/2 lg:w-5/12">
            <div className="flex items-center mb-6">
              <span className='font-extrabold text-slate-900 text-3xl'>1.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
              ask
              </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            We start with a few simple questions. Through thoughtful consideration of your responses, Lorem ipsum dolor per sempre
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-5/12 lg">
            <div className="flex items-center mb-6">
              <span className='font-extrabold text-slate-900 text-3xl'>2.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
              think
              </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            We’re solution oriented people - In dictum tortor vel magna condimentum, non eleifend velit varius. Morbi non pretium orci. Nunc felis urna,
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-5/12 lg-0">
            <div className="flex items-center mb-6">
            <span className='font-extrabold text-slate-900 text-3xl'>3.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
              design
              </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            We make data-driven decisions about UX while innovating every step of the way. From mobile to tablet to full wall projections, our digital creations are designed to make an impact on any sized screen.
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-5/12 lg lg-0">
            <div className="flex items-center mb-6">
            <span className='font-extrabold text-slate-900 text-3xl'>4.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
              develop
              </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Our engineers are artists - they can breathe life into designs and make websites move in ways you never thought possible. The products and platforms we develop are modular, so they can easily evolve over time,
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 md-0 lg:w-5/12 lg-0">
            <div className="flex items-center mb-6">
            <span className='font-extrabold text-slate-900 text-3xl'>5.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
              deploy
              </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Our rigorous and thorough quality assurance process ensures that every product we deploy has been extensively road-tested and is ready to go.
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-5/12">
            <div className="flex items-center mb-6">
            <span className='font-extrabold text-slate-900 text-3xl'>6.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
              Support
              </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            We’re here to help you. Reach out to us anytime, for anything you need. Ongoing technical support is part of the deal, so you can focus on growing your business—worry-free.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Aboutus