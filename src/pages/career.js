import React, { useState } from 'react'
import { Hero, M1, M2, M3, M4, M5 } from '../media'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsInstagram, BsTwitter, BsFacebook, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

const Career = () => {
  const [SA, setSA] = useState(false)
  const [design, setDesign] = useState(false)
  const [engineer, setEngineer] = useState(false)
  const [PO, setPO] = useState(false)
  const [FA, setFA] = useState(false)

  const handleClick = (e) => {
    if (e.target.id == "SA") {
      if (SA) {
        setSA(false)
      }
      else {
        setSA(true);
        setDesign(false);
        setEngineer(false);
        setPO(false);
        setFA(false);
      }
    }
    if (e.target.id == "design") {
      if (design) setDesign(false)
      else {
        setSA(false);
        setDesign(true);
        setEngineer(false);
        setPO(false);
        setFA(false);
      }
    }
    if (e.target.id == "engineer") {
      if (engineer) setEngineer(false)
      else {
        setSA(false);
        setDesign(false);
        setEngineer(true);
        setPO(false);
        setFA(false);
      }
    }
    if (e.target.id == "PO") {
      if (PO) setPO(false)
      else {
        setSA(false);
        setDesign(false);
        setEngineer(false);
        setPO(true);
        setFA(false);
      }
    }
    if (e.target.id == "FA") {
      if (FA) setFA(false)
      else {
        setSA(false);
        setDesign(false);
        setEngineer(false);
        setPO(false);
        setFA(true);
      }
    }
  }
  return (
    <div className='overflow-x-hidden w-full'>
      <div>
        {/* Hero Image */}
        <div>
          <div className='md:w-10/12 w-11/12 mx-auto flex md:flex-row flex-col justify-center items-center'>
            <div className='flex-1 md:order-1 order-2'>
              <h1 className='md:text-6xl text-5xl md:pt-32 pt-2 font-bold'>Join <span className='text-red-700'>Our</span> Team</h1>
              <p className='text-xl font-semibold md:mt-8 mt-4'>We’re a team that supports each other in pushing for the best, and we’re looking for people with the skills and character to make us even better.</p>
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

        {/* Promotion */}
        <div className='md:w-10/12 w-11/12 mx-auto mt-20' id="morecareer">
          <h2 className='text-5xl font-bold'>Open <br /><span className='text-red-600'>Position?</span></h2>
          <div>
            <div onClick={handleClick} id="SA" className='text-2xl font-semibold py-3 md:px-6 flex justify-between items-center cursor-pointer my-2 hover:bg-slate-100 border-b border-slate-300'><span onClick={handleClick} id="SA">WSU Studio Academy</span><span className='text-4xl' onClick={handleClick} id="SA"> {SA ? "-" : "+"}</span></div>
            {SA ?
              <>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>Android Dev</p> <p className='font-normal text-sm md:w-3/12 text-right'>Open <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>Front End Dev</p> <p className='font-normal text-sm md:w-3/12 text-right'>Coming Soon <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>UI / UX Designer</p> <p className='font-normal text-sm md:w-3/12 text-right'>Coming Soon <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
              </>
              : null}
            <div onClick={handleClick} id="design" className='text-2xl font-semibold py-3 md:px-6 flex justify-between items-center cursor-pointer my-2 hover:bg-slate-100 border-b border-slate-300'><span onClick={handleClick} id="design">Design</span><span className='text-4xl' onClick={handleClick} id="design">{design ? "-" : "+"}</span></div>
            {design ?
              <>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>UI Designer</p> <p className='font-normal text-sm md:w-3/12 text-right'>Fulltime <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>graphic Designer</p> <p className='font-normal text-sm md:w-3/12 text-right'>Freelance <span className='py-1 mx-1 px-2 border-l border-slate-300'>Jakarta</span></p> <p className='font-normal text-md'>See details</p></div>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>Product Designer</p> <p className='font-normal text-sm md:w-3/12 text-right'>Fulltime <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
              </>
              : null}
            <div onClick={handleClick} id="engineer" className='text-2xl font-semibold py-3 md:px-6 flex justify-between items-center cursor-pointer my-2 hover:bg-slate-100 border-b border-slate-300'><span onClick={handleClick} id="engineer">Engineering</span><span className='text-4xl' onClick={handleClick} id="engineer">{engineer ? "-" : "+"}</span></div>
            {engineer ?
              <>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>Junior Android Dev.</p> <p className='font-normal text-sm md:w-3/12 text-right'>Fulltime <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>Front End Developer</p> <p className='font-normal text-sm md:w-3/12 text-right'>Fulltime <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>Back end Developer</p> <p className='font-normal text-sm md:w-3/12 text-right'>Fulltime <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>IOS Developer</p> <p className='font-normal text-sm md:w-3/12 text-right'>Fulltime <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
              </>
              : null}
            <div onClick={handleClick} id="PO" className='text-2xl font-semibold py-3 md:px-6 flex justify-between items-center cursor-pointer my-2 hover:bg-slate-100 border-b border-slate-300'><span onClick={handleClick} id="PO">People Operations</span><span className='text-4xl' onClick={handleClick} id="PO">{PO ? "-" : "+"}</span></div>
            {PO ?
              <>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>Partnership officer</p> <p className='font-normal text-sm md:w-3/12 text-right'>Fulltime <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>Relationship Officer</p> <p className='font-normal text-sm md:w-3/12 text-right'>Fulltime <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
              </>
              : null}
            <div onClick={handleClick} id="FA" className='text-2xl font-semibold py-3 md:px-6 flex justify-between items-center cursor-pointer my-2 hover:bg-slate-100 border-b border-slate-300'><span onClick={handleClick} id="FA">Finance & Legal</span><span className='text-4xl' onClick={handleClick} id="FA">{FA ? "-" : "+"}</span></div>
            {FA ?
              <>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>Junior Accountant</p> <p className='font-normal text-sm md:w-3/12 text-right'>Fulltime <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
                <div className='flex flex-row justify-between md:ml-20 md:text-base text-sm items-center border-b py-3'><p className='font-bold text-md uppercase w-3/12'>Financial Specialist</p> <p className='font-normal text-sm md:w-3/12 text-right'>Fulltime <span className='py-1 mx-1 px-2 border-l border-slate-300'>Semarang</span></p> <p className='font-normal text-md'>See details</p></div>
              </>
              : null}
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
    </div>
  )
}

export default Career