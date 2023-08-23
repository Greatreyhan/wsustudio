import React, { useState } from 'react'
import { Hero, BG_Hero, P1, P2, P3, P4, P5, P6, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, N1 } from '../media'
import { Link } from 'react-router-dom'
import { Comporto } from '../components'
import { BsArrowRight, BsInstagram, BsTwitter, BsFacebook, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

const Home = () => {
    const [data, setData] = useState([
        { id: 1, title: "Air Mineral Pelangi", type: "website", pict: P1, link: "#" },
        { id: 2, title: "Goal.com X Rexona", type: "website", pict: P2, link: "#" },
        { id: 3, title: "Andalan Finance", type: "webapp", pict: P3, link: "#" },
        { id: 4, title: "Zuna Sport", type: "website", pict: P4, link: "#" },
    ])
    return (
        <div className='w-full'>
            {/* Hero Image */}
            <div className='pb-7' style={{
                backgroundImage: `url(${BG_Hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className='md:w-10/12 w-11/12 mx-auto flex md:flex-row flex-col justify-center items-center'>
                    <div className='flex-1 md:order-1 order-2'>
                        <h1 className='md:text-6xl text-5xl md:pt-32 pt-2 font-bold'>Humanize Business <span className='text-red-700'>Through</span> Technology</h1>
                        <p className='text-xl font-semibold md:mt-8 mt-4'>Evolve Business By Holding Technology</p>
                        <Link
                            to="/portofolios"
                            className="md:py-3 py-2 md:px-8 px-6 bg-red-600 text-white font-semibold text-xl rounded-lg md:mt-20 mt-8 inline-flex items-center"
                        >
                            <span>See Our Portfolios</span>
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

            {/* Wise Word */}
            <div className='w-10/12 mx-auto md:py-28 py-14 md:px-32' id="morehome">
                <p className='text-4xl'>"<span className='text-red-600 font-bold text-6xl'>WSU</span> is dedicated and passionate about helping businesses thrive through technology. We are a local company with a global passion and mission"</p>
                <div className='flex'>
                    <Link
                        to="/aboutus"
                        className="md:py-3 py-1.5 md:px-8 px-6 bg-slate-800 text-white font-semibold md:text-xl text-md rounded-lg mt-8 mr-5 inline-flex items-center"
                    >
                        <span>About Us</span>
                        <BsArrowRight className="ml-2 font-semibold" />
                    </Link>
                    <Link
                        to="/services"
                        className="md:py-3 py-1.5 md:px-8 px-6 border-slate-800 border-2 text-slate-900 font-semibold md:text-xl text-md rounded-lg mt-8 mr-5 inline-flex items-center"
                    >
                        <span>Our Services</span>
                        <BsArrowRight className="ml-2 font-semibold" />
                    </Link>
                </div>
            </div>

            {/* Projects Peek */}
            <div className='md:w-10/12 w-11/12 mx-auto'>
                <h2 className='text-5xl font-bold'>Selected <br /><span className='text-red-600'>Project</span></h2>
                <div className='flex flex-wrap mt-8 justify-around'>
                    {data.map(element => {
                        return (
                            <Comporto key={element.id} id={element.id} title={element.title} type={element.type} pict={element.pict} link={element.link} />
                        )
                    })}
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <Link
                    to="/portofolios"
                    className="py-2 px-6 bg-slate-900 items-center text-white font-semibold text-lg rounded-lg mt-8 mr-5 inline-flex"
                >
                    <span>More Project</span>
                    <BsArrowRight className="ml-2 font-semibold" />
                </Link>
            </div>

            {/* Clients */}
            <div className='md:w-10/12 w-11/12 mx-auto mt-16'>
                <h2 className='text-5xl font-bold'>Our Esteemed <br /><span className='text-red-600'>Clients</span></h2>
                <div className='flex flex-wrap justify-around gap-x-5'>
                    <img className='md:w-2/12 w-4/12' src={C1} />
                    <img className='md:w-2/12 w-4/12' src={C2} />
                    <img className='md:w-2/12 w-4/12' src={C3} />
                    <img className='md:w-2/12 w-4/12' src={C4} />
                    <img className='md:w-2/12 w-4/12' src={C5} />
                    <img className='md:w-2/12 w-4/12' src={C6} />
                    <img className='md:w-2/12 w-4/12' src={C7} />
                    <img className='md:w-2/12 w-4/12' src={C8} />
                    <img className='md:w-2/12 w-4/12' src={C9} />
                    <img className='md:w-2/12 w-4/12' src={C10} />
                    <img className='md:w-2/12 w-4/12' src={C11} />
                    <img className='md:w-2/12 w-4/12' src={C12} />
                    <img className='md:w-2/12 w-4/12' src={C13} />
                    <img className='md:w-2/12 w-4/12' src={C14} />
                    <img className='md:w-2/12 w-4/12' src={C15} />
                    <img className='md:w-2/12 w-4/12' src={C16} />
                </div>
            </div>

            {/* News Update */}
            <div className='w-10/12 mx-auto mt-16'>
                <h2 className='text-5xl font-bold'>New <br /><span className='text-red-600'>Updates</span></h2>
                <div className='flex md:flex-nowrap flex-wrap justify-center gap-x-5 mt-8'>
                    <div className='md:w-4/12 mt-10 md:mt-0 w-8/12'>
                        <img src={N1} />
                        <div>
                            <p className='font-bold mt-4 text-xl'>“Enhancing….. Training” sambil menikmati suasana Bali!</p>
                            <p className='font-light mt-2 text-sm'>January 5, 2021</p>
                        </div>
                    </div>
                    <div className='md:w-4/12 mt-10 md:mt-0 w-8/12'>
                        <img src={N1} />
                        <div>
                            <p className='font-bold mt-4 text-xl'>“Enhancing….. Training” sambil menikmati suasana Bali!</p>
                            <p className='font-light mt-2 text-sm'>January 5, 2021</p>
                        </div>
                    </div>
                    <div className='md:w-4/12 mt-10 md:mt-0 w-8/12'>
                        <img src={N1} />
                        <div>
                            <p className='font-bold mt-4 text-xl'>“Enhancing….. Training” sambil menikmati suasana Bali!</p>
                            <p className='font-light mt-2 text-sm'>January 5, 2021</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <Link
                        to="/services"
                        className="py-1 px-4 border-slate-800 border-2 text-slate-900 font-semibold text-md rounded-lg mt-8 mr-5 inline-flex items-center"
                    >
                        <span>Our Services</span>
                        <BsArrowRight className="ml-2 font-semibold" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home