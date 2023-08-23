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
            <p className='mt-4'>Whether your preference lies with the versatile Android system or the sleek and cohesive iOS environment, you have the autonomy to select the ecosystem that best aligns with and complements your unique business objectives. This pivotal decision empowers you to tailor your digital presence to the preferences of your target audience, ensuring a seamless and engaging user experience. By choosing the platform that resonates with your brand's identity and values, you're taking a deliberate step towards optimizing your business's reach and impact in the increasingly mobile-driven landscape.</p>
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
            <p className='mt-4'>We specialize in offering a diverse range of meticulously designed websites tailored to precisely match and enhance your unique business requirements. Our comprehensive selection of website options ensures that you'll find the perfect online platform to effectively showcase your products or services, engage your target audience, and achieve your strategic goals. Whether you're seeking an elegant and informative portfolio site or a dynamic e-commerce platform, we have the expertise to deliver a solution that not only meets but exceeds your expectations. Your business deserves nothing less than a digital presence that resonates with your vision, and that's exactly what we're here to provide.</p>
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
              Integrating seamlessly with your chosen platform, whether it's Android or iOS, our expertise extends beyond the frontend. With our proficiency in developing applications that synchronize flawlessly with backend systems such as Point of Sales (POS), Enterprise Resource Planning (ERP), and Customer Relationship Management (CRM), our team is fully equipped to craft specialized applications that cater precisely to your business needs.</p>
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
            <p className='mt-4'>By embracing a DMS, organizations can transcend the limitations of traditional document handling, ushering in a digital era where documents are effortlessly accessed, meticulously organized, and swiftly retrieved. This transformative approach significantly reduces the reliance on physical paper documents, leading to heightened efficiency, cost savings, and a greener footprint. Whether it's about facilitating collaboration, enhancing regulatory compliance, or simply embracing a future-oriented document management strategy, a DMS is a versatile tool that empowers businesses to thrive in the modern digital landscape.</p>
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