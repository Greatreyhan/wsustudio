import React from 'react'
import { Hero, M1, M2, M3, M4, M5 } from '../media'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsInstagram, BsTwitter, BsFacebook, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

const Aboutus = () => {
  return (
    <div className='overflow-x-hidden w-full'>
      {/* Hero Image */}
      <div>
        <div className='md:w-10/12 w-11/12 mx-auto flex md:flex-row flex-col justify-center items-center'>
          <div className='flex-1 md:order-1 order-2'>
            <h1 className='md:text-6xl text-5xl md:pt-32 pt-2 font-bold'>PT <span className='text-red-700'>WIDYA SOLUSI UTAMA</span> </h1>
            <p className='text-xl font-semibold md:mt-8 mt-4'>The term “Software house” is probably not
              enough to describe
              PT Widya Solusi Utama as
              it also provides consultancy for clients. We
              offer the
              best solutions for your needs by
              giving analysis of risk and potentials
              in every
              option and range.


              Let us help you, to Evolve your business
              through technology!</p>
            <Link
              to="/aboutus"
              className="py-2 px-5 bg-slate-900 text-white font-normal text-lg rounded-lg mt-8 inline-flex items-center"
            >
              <span>Contact Us</span>
              <BsArrowRight className="ml-2 font-semibold" />
            </Link>
          </div>
          <div className='flex-1 md:order-2 order-1 flex justify-center items-center cursor-pointer md:pt-0 pt-20'>
            <img className='md:w-1/2 w-1/4' src={Hero} />
          </div>
        </div>
        {/* Social Media */}
        <div className='flex w-11/12 mx-auto justify-between items-center mt-16'>
          <div className='flex space-x-4'>
            <a href="#"><BsInstagram className='text-2xl text-slate-800' /></a>
            <a href="#"><BsFacebook className='text-2xl text-slate-800' /></a>
            <a href="#"><BsTwitter className='text-2xl text-slate-800' /></a>
          </div>
          <div className='inline-flex items-center'>
            <a href="#morehome" className='uppercase text-slate-800 text-sm text-semibold'>Scroll for More</a>
            <BsArrowDownShort className="ml-2 font-semibold text-red-800" />
          </div>
        </div>
      </div>

      {/* About WSU Studio */}
      <div className='md:w-10/12 w-11/12 mx-auto mt-20' id="moreabout">
        <p className='text-2xl font-bold md:px-60 mt-4'><span className='text-red-700 font-bold text-4xl'>WSU</span> is a software design and engineering team. treat our clients like they’re part of the family — because we love getting to be creative and work with awesome people, like you.</p>
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
        <p className='text-lg font-normal mt-6'><strong>PT Widya Solusi Utama</strong> is a company engaged in
          technology, especially <strong>website and application</strong>
          development. We are here with experts who have a
          high commitment in the field of technology.

          We realize that nowadays websites and applications
          are very <strong>important things for businesses</strong> to grow
          rapidly and capture a wider market. Seeing this, <strong>PT
          Widya Solusi Utama</strong> is committed to not only
          prioritizing system functionality but also
          emphasizing user comfort in carrying out activities
          on the website or application that we build.</p>
      </div>

      {/* WSU Step */}

      <div className="container p-6 px-6 mx-auto bg-white">
        <div className="flex flex-wrap justify-center md:my-12 my-8">
          <div className="w-full p-8 md:w-1/2 lg:w-5/12">
            <div className="flex items-center mb-6">
              <span className='font-extrabold text-slate-900 text-3xl'>1.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
                Ask
              </div>
            </div>
            <p className="leading-loose text-gray-500 text-md">
              We start with a few simple questions. Through thoughtful consideration of your responses, Lorem ipsum dolor per sempre
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-5/12 lg">
            <div className="flex items-center mb-6">
              <span className='font-extrabold text-slate-900 text-3xl'>2.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
                Think
              </div>
            </div>
            <p className="leading-loose text-gray-500 text-md">
              We’re solution oriented people - In dictum tortor vel magna condimentum, non eleifend velit varius. Morbi non pretium orci. Nunc felis urna,
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-5/12 lg-0">
            <div className="flex items-center mb-6">
              <span className='font-extrabold text-slate-900 text-3xl'>3.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
                Design
              </div>
            </div>
            <p className="leading-loose text-gray-500 text-md">
              We make data-driven decisions about UX while innovating every step of the way. From mobile to tablet to full wall projections, our digital creations are designed to make an impact on any sized screen.
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-5/12 lg lg-0">
            <div className="flex items-center mb-6">
              <span className='font-extrabold text-slate-900 text-3xl'>4.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
                Develop
              </div>
            </div>
            <p className="leading-loose text-gray-500 text-md">
              Our engineers are artists - they can breathe life into designs and make websites move in ways you never thought possible. The products and platforms we develop are modular, so they can easily evolve over time,
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 md-0 lg:w-5/12 lg-0">
            <div className="flex items-center mb-6">
              <span className='font-extrabold text-slate-900 text-3xl'>5.</span>
              <div className="ml-4 font-extrabold text-slate-900 text-3xl">
                Deploy
              </div>
            </div>
            <p className="leading-loose text-gray-500 text-md">
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
            <p className="leading-loose text-gray-500 text-md">
              We’re here to help you. Reach out to us anytime, for anything you need. Ongoing technical support is part of the deal, so you can focus on growing your business—worry-free.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Aboutus