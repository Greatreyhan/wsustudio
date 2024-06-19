import React from 'react'
import { Hero, BG_Hero, P1, P2, P3, P4, P5, P6, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, N1 } from '../media'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsInstagram, BsTwitter, BsFacebook, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"
const Home = () => {
    return (
        <div className='w-full'>
            {/* Hero Image */}
            <div className='pb-7' style={{
                backgroundImage: `url(${BG_Hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className='w-10/12 mx-auto flex justify-center items-center'>
                    <div className='flex-1'>
                        <h1 className='text-6xl pt-32 font-bold'>Humanize Business <span className='text-red-700'>Through</span> Technology</h1>
                        <p className='text-xl font-semibold mt-8'>Evolve Business By Holding Technology</p>
                        <a
                            href="https://www.canva.com/design/DAF0w-TY6dQ/9eAB5lS_jWkI6GQLmnM9Vw/view?utm_content=DAF0w-TY6dQ&utm_campaign=designshare&utm_medium=link&utm_source=editor "
                            className="py-3 px-8 bg-red-600 text-white font-semibold text-xl rounded-lg mt-20 inline-flex items-center"
                        >
                            <span>See Our Portfolios</span>
                            <BsArrowRight className="ml-2 font-semibold" />
                        </a>
                        {/* Social Media */}
                        <div className='flex space-x-4 mt-16'>
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

            {/* Wise Word */}
            <div className='w-10/12 mx-auto py-28 px-32'>
                <p className='text-4xl'>"<span className='text-red-600 font-bold text-6xl'>WSU</span> is dedicated and passionate about helping businesses thrive through technology. We are a local company with a global passion and mission"</p>
                <div>
                    <Link
                        to="/aboutus"
                        className="py-3 px-8 bg-slate-800 text-white font-semibold text-xl rounded-lg mt-8 mr-5 inline-flex items-center"
                    >
                        <span>About Us</span>
                        <BsArrowRight className="ml-2 font-semibold" />
                    </Link>
                    <Link
                        to="/services"
                        className="py-3 px-8 border-slate-800 border-2 text-slate-900 font-semibold text-xl rounded-lg mt-8 mr-5 inline-flex items-center"
                    >
                        <span>Our Services</span>
                        <BsArrowRight className="ml-2 font-semibold" />
                    </Link>
                </div>
            </div>

            {/* Projects Peek */}
            <div className='w-10/12 mx-auto'>
                <h2 className='text-5xl font-bold'>Selected <br /><span className='text-red-600'>Project</span></h2>
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
            <div className='w-10/12 mx-auto mt-16'>
                <h2 className='text-5xl font-bold'>Our Esteemed <br /><span className='text-red-600'>Clients</span></h2>
                <div className='flex flex-wrap justify-around gap-x-5'>
                    <img className='w-2/12' src={C1} />
                    <img className='w-2/12' src={C2} />
                    <img className='w-2/12' src={C3} />
                    <img className='w-2/12' src={C4} />
                    <img className='w-2/12' src={C5} />
                    <img className='w-2/12' src={C6} />
                    <img className='w-2/12' src={C7} />
                    <img className='w-2/12' src={C8} />
                    <img className='w-2/12' src={C9} />
                    <img className='w-2/12' src={C10} />
                    <img className='w-2/12' src={C11} />
                    <img className='w-2/12' src={C12} />
                    <img className='w-2/12' src={C13} />
                    <img className='w-2/12' src={C14} />
                    <img className='w-2/12' src={C15} />
                    <img className='w-2/12' src={C16} />
                </div>
            </div>

            {/* News Update */}
            {/* <div className='w-10/12 mx-auto mt-16'>
                <h2 className='text-5xl font-bold'>New <br /><span className='text-red-600'>Updates</span></h2>
                <div className='flex gap-x-5 mt-8'>
                    <div className='w-4/12'>
                        <img src={N1} />
                        <div>
                            <p className='font-bold mt-4 text-xl'>“Enhancing….. Training” sambil menikmati suasana Bali!</p>
                            <p className='font-light mt-2 text-sm'>January 5, 2021</p>
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <img src={N1} />
                        <div>
                            <p className='font-bold mt-4 text-xl'>“Enhancing….. Training” sambil menikmati suasana Bali!</p>
                            <p className='font-light mt-2 text-sm'>January 5, 2021</p>
                        </div>
                    </div>
                    <div className='w-4/12'>
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
            </div> */}

        </div>
    )
}

export default Home