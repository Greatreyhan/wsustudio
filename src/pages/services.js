import React from 'react'
import { Hero, S1, S2, S3, S4, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24 } from '../media'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsInstagram, BsTwitter, BsFacebook, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

const Services = () => {
  return (
    <div>
      {/* Hero Image */}
      <div>
        <div className='md:w-10/12 w-11/12 mx-auto flex md:flex-row flex-col justify-center items-center'>
          <div className='flex-1 md:order-1 order-2'>
            <h1 className='md:text-6xl text-5xl md:pt-32 pt-2 font-bold'>A word about  <span className='text-red-700'>our</span> services</h1>
            <p className='text-xl font-semibold md:mt-8 mt-4'>Our team group of creative
              people, consisting of various

              backgrounds and specific
              abilities that are divided
              into
              several divisions.
              Starting from Software
              architects, front
              end developers,
              back end programmers,
              Visual Designer,
              Project
              Manager, and QA.</p>
            <Link
              to="/aboutus"
              className="md:py-3 py-2 md:px-8 px-6 bg-red-600 text-white font-semibold md:text-xl text-lg rounded-lg md:mt-20 mt-8 inline-flex items-center"
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

      {/* Services */}
      <div className='w-full mx-auto md:mt-28 mt-16' id="moreservice">
        <div className='flex md:flex-row flex-col items-center justify-center'>
          <div className='md:w-5/12 w-10/12 flex items-center justify-center'>
            <img className='md:w-96 w-8/12' src={S1} />
          </div>
          <div className='md:w-5/12 w-10/12 md:pl-16 pl-0 md:mt-0 mt-8 pr-8'>
            <h2 className='font-bold text-3xl'>MOBILE APP DEV</h2>
            <p className='font-semibold'>(ios + Android)</p>
            <p className='mt-4'>Kami menyediakan pelayanan pembuatan mobile apps dengan pengalaman kami meliputi dari aplikasi finansial tech sampai kepada teknologi lainnya dengan memperhatikan fungsional fitur dan estetika dari aplikasi itu sendiri.</p>
            <p className='mt-4 text-red-700 font-bold'>What we do?</p>
            <ul className='font-semibold'>
              <li> + iOS</li>
              <li> + Android</li>
              <li> + React Native</li>
              <li> + Progressive Web Apps</li>
            </ul>
          </div>
        </div>

        <div className='flex md:flex-row flex-col items-center justify-center md:mt-28 mt-14'>
          <div className='md:w-5/12 w-10/12 md:pr-8 pr-0 md:pl-8 pl-0 md:order-1 order-2 md:mt-0 mt-4'>
            <h2 className='font-bold text-3xl'>WEB DEV</h2>
            <p className='mt-4'>Kami menyediakan layanan pengembangan web profesional yang mencakup seluruh spektrum kebutuhan bisnis Anda. Mulai dari desain web yang responsif dan user-friendly hingga pengembangan fitur-fitur khusus, tim kami menggunakan teknologi terbaru untuk memastikan website Anda tidak hanya terlihat menarik, tetapi juga berfungsi optimal di berbagai perangkat. Kami berkomitmen untuk menghadirkan solusi web yang inovatif, aman, dan dapat diandalkan untuk membantu meningkatkan visibilitas online dan efisiensi operasional bisnis Anda.</p>
            <p className='mt-4 text-red-700 font-bold'>What we do?</p>
            <ul className='font-semibold'>
              <li> + React, Next.js, Gatsby</li>
              <li> + GraphQL, React-Query, Redux</li>
              <li> + Ally, Jest, Storybook, Cypress</li>
              <li> + CSS-in-JS, Framer-Motion, Vercel, Netlify</li>
            </ul>
          </div>
          <div className='md:w-5/12 w-10/12 flex items-center justify-center md:order-2 order-1'>
            <img className='md:w-96 w-8/12' src={S2} />
          </div>
        </div>

        <div className='flex md:flex-row flex-col items-center justify-center md:mt-28 mt-16'>
          <div className='md:w-5/12 w-10/12 flex items-center justify-center'>
            <img className='md:w-96 w-8/12' src={S3} />
          </div>
          <div className='md:w-5/12 w-10/12 md:pl-16 pl-0 md:mt-0 mt-8 pr-8'>
            <h2 className='font-bold text-3xl'>BACKEND AND DEVOPS</h2>
            <p className='font-semibold'>(ios + Android)</p>
            <p className='mt-4'>
            Layanan backend dan DevOps kami dirancang untuk memastikan performa tinggi dan stabilitas aplikasi Anda. Tim kami mengelola infrastruktur server, basis data, dan integrasi API dengan keahlian dalam berbagai bahasa pemrograman dan framework seperti Node.js, Python, dan PHP. Kami juga menerapkan praktik terbaik dalam CI/CD (Continuous Integration/Continuous Deployment) untuk mempercepat proses pengembangan dan pengiriman kode. Dengan fokus pada otomatisasi, skalabilitas, dan keamanan, layanan DevOps kami membantu meminimalkan downtime dan memastikan bahwa aplikasi Anda selalu siap untuk menghadapi beban kerja yang tinggi.</p>
            <p className='mt-4 text-red-700 font-bold'>What we do?</p>
            <ul className='font-semibold'>
              <li> + Node.js, C#, Python, Golang</li>
              <li> + PostgreSQL, SQL Server</li>
              <li> + MongoDB, Firestore, Redis</li>
              <li> + Heroku, AWS, GCP, Azure</li>
            </ul>
          </div>
        </div>

        <div className='flex md:flex-row flex-col items-center justify-center md:mt-28 mt-14'>
          <div className='md:w-5/12 w-10/12 md:pr-8 pr-0 md:pl-8 pl-0 md:order-1 order-2 md:mt-0 mt-4'>
            <h2 className='font-bold text-3xl'>IT CONSULTING SERVICES</h2>
            <p className='mt-4'>Kami menawarkan layanan konsultasi IT yang komprehensif untuk membantu bisnis Anda merancang dan mengimplementasikan strategi teknologi yang efektif. Dengan pengetahuan mendalam dan pengalaman luas di berbagai industri, konsultan kami bekerja sama dengan Anda untuk memahami kebutuhan bisnis Anda dan memberikan solusi yang disesuaikan. Mulai dari analisis sistem, perencanaan teknologi, hingga implementasi dan pengelolaan proyek IT, kami memastikan bahwa setiap langkah yang diambil sejalan dengan tujuan bisnis Anda dan memberikan nilai tambah yang nyata.</p>
            <p className='mt-4 text-red-700 font-bold'>What we do?</p>
            <ul className='font-semibold'>
              <li> + React, Next.js, Gatsby</li>
              <li> + GraphQL, React-Query, Redux</li>
              <li> + Ally, Jest, Storybook, Cypress</li>
              <li> + CSS-in-JS, Framer-Motion, Vercel, Netlify</li>
            </ul>
          </div>
          <div className='md:w-5/12 w-10/12 flex items-center justify-center md:order-2 order-1'>
            <img className='md:w-96 w-8/12' src={S4} />
          </div>
        </div>

      </div>

      {/* Stack */}
      <div className='md:w-10/12 w-11/12 mx-auto mt-20'>
        <h2 className='text-5xl font-bold'>Technology <br /><span className='text-red-600'>Stack</span></h2>
        <div className='flex flex-wrap justify-around md:gap-9 gap-5 mt-8'>
          <img className='md:w-1/12 w-2/12' src={T1} />
          <img className='md:w-1/12 w-2/12' src={T2} />
          <img className='md:w-1/12 w-2/12' src={T3} />
          <img className='md:w-1/12 w-2/12' src={T4} />
          <img className='md:w-1/12 w-2/12' src={T5} />
          <img className='md:w-1/12 w-2/12' src={T6} />
          <img className='md:w-1/12 w-2/12' src={T7} />
          <img className='md:w-1/12 w-2/12' src={T8} />
          <img className='md:w-1/12 w-2/12' src={T9} />
          <img className='md:w-1/12 w-2/12' src={T10} />
          <img className='md:w-1/12 w-2/12' src={T11} />
          <img className='md:w-1/12 w-2/12' src={T12} />
          <img className='md:w-1/12 w-2/12' src={T13} />
          <img className='md:w-1/12 w-2/12' src={T14} />
          <img className='md:w-1/12 w-2/12' src={T15} />
          <img className='md:w-1/12 w-2/12' src={T16} />
          <img className='md:w-1/12 w-2/12' src={T17} />
          <img className='md:w-1/12 w-2/12' src={T18} />
          <img className='md:w-1/12 w-2/12' src={T19} />
          <img className='md:w-1/12 w-2/12' src={T20} />
          <img className='md:w-1/12 w-2/12' src={T21} />
          <img className='md:w-1/12 w-2/12' src={T22} />
          <img className='md:w-1/12 w-2/12' src={T23} />
          <img className='md:w-1/12 w-2/12' src={T24} />
        </div>
      </div>
    </div>
  )
}

export default Services