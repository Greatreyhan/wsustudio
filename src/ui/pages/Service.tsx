import { Agile } from "../../assets/images";
import { FaReact, FaAws, FaCss3Alt, FaFlutter, FaAndroid, FaPhp, FaAngular, FaSwift, FaPython, FaJava, FaVuejs } from "react-icons/fa6";
import { BiLogoPostgresql, BiLogoFirebase, BiLogoMongodb } from "react-icons/bi";
import SubService from "../molecules/SubService";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { Desc1,Desc2,Desc3,Desc4,Desc5,Desc6 } from "../../assets/images";

const services = [
  { id: "1", 
    title: "Custom Software", 
    subtitle: "Building Your Vision with Expertise You Can Trust",
    description: "Work with PT Widya Solusi Utama's expert team of developers and designers to build custom web, mobile, and enterprise solutions. Powered by Agile methods and years of experience, we deliver quality software that evolves with your business needs.",
    icon : "test",
    image : "test"
  },
  { id: "2", 
    title: "Document Management System", 
    subtitle: "Building Your Vision with Expertise You Can Trust",
    description: "Work with PT Widya Solusi Utama's expert team of developers and designers to build custom web, mobile, and enterprise solutions. Powered by Agile methods and years of experience, we deliver quality software that evolves with your business needs.",
    icon : "test",
    image : "test"
  },
  { id: "3", 
    title: "IoT Installation", 
    subtitle: "Building Your Vision with Expertise You Can Trust",
    description: "Work with PT Widya Solusi Utama's expert team of developers and designers to build custom web, mobile, and enterprise solutions. Powered by Agile methods and years of experience, we deliver quality software that evolves with your business needs.",
    icon : "test",
    image : "test"
  },
  { id: "4", 
    title: "License Product Procurement", 
    subtitle: "Building Your Vision with Expertise You Can Trust",
    description: "Work with PT Widya Solusi Utama's expert team of developers and designers to build custom web, mobile, and enterprise solutions. Powered by Agile methods and years of experience, we deliver quality software that evolves with your business needs.",
    icon : "test",
    image : "test"
  },
  { id: "5", 
    title: "Digital Marketing", 
    subtitle: "Building Your Vision with Expertise You Can Trust",
    description: "Work with PT Widya Solusi Utama's expert team of developers and designers to build custom web, mobile, and enterprise solutions. Powered by Agile methods and years of experience, we deliver quality software that evolves with your business needs.",
    icon : "test",
    image : "test"
  },
  { id: "6", 
    title: "AI Implementation", 
    subtitle: "Building Your Vision with Expertise You Can Trust",
    description: "Work with PT Widya Solusi Utama's expert team of developers and designers to build custom web, mobile, and enterprise solutions. Powered by Agile methods and years of experience, we deliver quality software that evolves with your business needs.",
    icon : "test",
    image : "test"
  },
];

const subservice = {
  id: "1",
  title: "Custom Software",
  subtitle: "Building Your Vision with Expertise You Can Trust",
  description: "Work with PT Widya Solusi Utama's expert team of developers and designers to build custom web, mobile, and enterprise solutions. Powered by Agile methods and years of experience, we deliver quality software that evolves with your business needs.",
  data : [
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
  ]
}


const Service = () => {
  const {serviceId} = useParams();

  return (
    <div>

      {/* Sub Service */}
      <div>
        {/* Scroll Menu */}
        <ul className="flex text-sm justify-center w-11/12 mx-auto py-4 pt-16 items-stretch">
          {services.map((service) => (
            <li
              key={service.id}
              className={`flex-1 px-4 py-2 ${serviceId == service.id
                ? "border-b-2 border-primary text-primary font-semibold"
                : "border-b border-opacity-50 border-slate-600 text-slate-600"
                } flex justify-center items-center text-center`}
            >
              <Link to={`/service/${service.id}`}>{service.title}</Link>
            </li>
          ))}
        </ul>

        {/* Service Detail */}
        <SubService id={subservice.id} title={subservice.title} subtitle={subservice.subtitle} description={subservice.description} data={subservice.data} />
      </div>

      {/* Methodology */}
      <div className="bg-base-dark w-10/12 mx-auto mt-16 p-14 rounded-3xl">
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
        <h2 className="text-4xl font-medium text-base-dark">Technology Stack</h2>
        <p className="text-sm font-light text-base-dark mt-2 w-4/12 mx-auto">Our Technology Stack utilizes the latest tools and platforms to deliver efficient, reliable, and scalable services. From front-end to back-end, we cover all your business needs.</p>

        <div className="flex flex-wrap w-10/12 justify-around items-center gap-y-8 mx-auto mt-8">
          <FaReact className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <BiLogoPostgresql className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <FaAws className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <FaCss3Alt className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <FaFlutter className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <BiLogoFirebase className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <FaAndroid className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <FaPhp className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <FaAngular className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <FaSwift className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <FaPython className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <BiLogoMongodb className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <FaJava className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
          <FaVuejs className="text-primary-dark text-opacity-80 text-7xl w-36 font-bold" />
        </div>
      </div>

    </div>
  );
}

export default Service;
