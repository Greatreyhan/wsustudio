import { Agile, Desc1,Desc2,Desc3,Desc4,Desc5,Desc6 } from "../../assets/images";
import DescriptionCard from "../organisms/DescriptionCard";
import { FaReact, FaAws, FaCss3Alt, FaFlutter, FaAndroid, FaPhp, FaAngular, FaSwift, FaPython, FaJava, FaVuejs } from "react-icons/fa6";
import { BiLogoPostgresql, BiLogoFirebase, BiLogoMongodb } from "react-icons/bi";

const Service = () => {
  return (
    <div className="">

      {/* Scroll Menu */}
      <ul className="flex text-sm justify-center w-11/12 mx-auto py-4 pt-16 items-stretch">
        <li className="flex-1 px-4 py-2 border-b-2 border-sky-800 text-sky-800 flex justify-center items-center text-center font-semibold"><a>Custom Software</a></li>
        <li className="flex-1 px-4 py-2 border-b border-opacity-50 border-slate-600 text-slate-600 flex justify-center items-center text-center"><a>Document Management System</a></li>
        <li className="flex-1 px-4 py-2 border-b border-opacity-50 border-slate-600 text-slate-600 flex justify-center items-center text-center"><a>IoT Installation</a></li>
        <li className="flex-1 px-4 py-2 border-b border-opacity-50 border-slate-600 text-slate-600 flex justify-center items-center text-center"><a>License Product Procurement</a></li>
        <li className="flex-1 px-4 py-2 border-b border-opacity-50 border-slate-600 text-slate-600 flex justify-center items-center text-center"><a>Digital Marketing</a></li>
        <li className="flex-1 px-4 py-2 border-b border-opacity-50 border-slate-600 text-slate-600 flex justify-center items-center text-center"><a>AI Implementation</a></li>
      </ul>

      {/* Hero Image */}
      <div className="w-full pt-32 pb-8 h-96">
        <div className="w-10/12 mx-auto text-center">
          <h1 className="text-sky-900 font-semibold">Custom Software</h1>
          <h1 className="text-4xl font-bold mt-2">Building Your Vision with <br />Expertise You Can Trust</h1>
          <p className="text-slate-700 text-sm mt-4 w-7/12 mx-auto tracking-wide">Work with PT Widya Solusi Utama's expert team of developers and designers to build custom web, mobile, and enterprise solutions. Powered by Agile methods and years of experience, we deliver quality software that evolves with your business needs.</p>
        </div>
      </div>

      {/* Service Detail */}
      <div className="w-10/12 mx-auto">
        {[
          {
            type: "left",
            title: "Web Application Development",
            subtitle: "Transform your business with dynamic, responsive, and user-friendly web applications.",
            description: "We create scalable and secure web solutions that adapt to your business needs, from robust enterprise platforms to intuitive client-facing portals. Using the latest web technologies, we ensure your web applications deliver excellent performance and seamless user experiences across devices.",
            image: Desc1,
          },
          {
            type: "right",
            title: "Mobile Application Development",
            subtitle: "Stay ahead in the digital era with custom mobile apps tailored to your audience.",
            description: "Our team develops native and cross-platform mobile applications designed to provide fast, engaging, and intuitive experiences. Whether for iOS, Android, or both, we ensure your apps run smoothly while meeting high standards for functionality, design, and user satisfaction.",
            image: Desc2,
          },
          {
            type: "left",
            title: "Integration Services",
            subtitle: "Seamless Integration, Simplified Solutions",
            description: "Streamline your operations with seamless system connectivity. Our integration solutions connect applications, platforms, and data sources, ensuring smooth workflows and real-time communication. From API integration to automating complex processes, we tailor strategies to unify your systems, reduce inefficiencies, and enhance decision-making—all while supporting your business goals.",
            image: Desc3,
          },
          {
            type: "right",
            title: "Enterprise System Development",
            subtitle: "Streamlining your business with tailored enterprise solutions",
            description: "Simplify and improve your business processes with systems designed just for you. Whether it's ERP (Enterprise Resource Planning) to streamline operations and manage resources, or CMS (Content Management Systems) to make handling content effortless, we create solutions that fit your needs. Our goal is to help your team work smarter, stay organized, and focus on what matters most.",
            image: Desc4,
          },
          {
            type: "left",
            title: "Dashboard Solutions",
            subtitle: "Make smarter decisions with powerful, interactive dashboards.",
            description: "We design visually impactful dashboards that consolidate your data into meaningful insights. Our solutions are tailored to your KPIs, enabling real-time analytics and reporting so you can track performance and make informed decisions effortlessly.",
            image: Desc5,
          },
          {
            type: "right",
            title: "Data Engineering",
            subtitle: "Unlock the power of data for your business.",
            description: "Transform raw data into actionable insights. Our data engineering solutions focus on building scalable data pipelines, optimizing data storage, and ensuring seamless integration across your systems. Empower your business with reliable, real-time data to make smarter decisions and drive growth.",
            image: Desc6,
          },
        ].map((item, index) => (
          <DescriptionCard
            key={index}
            type={item.type}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>


      <div className="bg-slate-800 w-10/12 mx-auto mt-16 p-14 rounded-3xl">

        <div className="flex justify-between">

          <div className="flex-1">
            <h3 className="text-3xl text-white font-semibold mb-8">
              Development Methodology
            </h3>
            <p className="text-md font-light text-slate-100 mt-2">
              We use <strong className="font-bold">Scrum Agile</strong>, a collaborative framework designed for:
            </p>
            <ul className="text-sm font-light text-slate-100 mt-2 list-disc ml-4">
              <li>Adaptive project planning and transparent communication.</li>
              <li>Regular iterations to meet your evolving needs.</li>
              <li>Faster delivery with continuous testing and feedback cycles.</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={Agile} />
          </div>
        </div>

      </div>

      {/* Technology Stack */}
      <div className="w-full text-center py-14 mt-8">
        <h2 className="text-4xl font-medium text-slate-900">Technology Stack</h2>
        <p className="text-sm font-light text-slate-800 mt-2 w-4/12 mx-auto">Our Technology Stack utilizes the latest tools and platforms to deliver efficient, reliable, and scalable services. From front-end to back-end, we cover all your business needs.</p>

        <div className="flex flex-wrap w-10/12 justify-around items-center gap-y-8 mx-auto mt-8">
          <FaReact className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <BiLogoPostgresql className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <FaAws className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <FaCss3Alt className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <FaFlutter className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <BiLogoFirebase className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <FaAndroid className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <FaPhp className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <FaAngular className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <FaSwift className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <FaPython className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <BiLogoMongodb className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <FaJava className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
          <FaVuejs className="text-sky-950 text-opacity-80 text-7xl w-36 font-bold" />
        </div>
      </div>

    </div>
  );
}

export default Service;
