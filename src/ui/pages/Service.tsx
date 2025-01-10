import { Agile } from "../../assets/images";
import { FaReact, FaAws, FaCss3Alt, FaFlutter, FaAndroid, FaPhp, FaAngular, FaSwift, FaPython, FaJava, FaVuejs } from "react-icons/fa6";
import { BiLogoPostgresql, BiLogoFirebase, BiLogoMongodb } from "react-icons/bi";
import SubService from "../molecules/SubService";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { onValue, ref as rtdbref } from "firebase/database";
import { FIREBASE_DB } from "../../config/firebaseinit";
import { useEffect, useState } from "react";

interface SubserviceItem {
  id: string;
  type: string;
  service: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  subservice: SubserviceItem[];
}

const transformData = (data: Record<string, any>): ServiceItem[] => {
  return Object.entries(data).map(([key, value]) => ({
    id: key,
    title: value.title,
    subtitle: value.subtitle,
    description: value.description,
    image: value.image,
    icon: value.icon,
    subservice: value.subservice
      ? Object.entries(value.subservice).map(([subKey, subValue]) => {
          const subService = subValue as SubserviceItem; // Explicitly type 'subValue'
          return {
            id: subKey,
            type: subService.type,
            service: value.title,
            title: subService.title,
            subtitle: subService.subtitle,
            description: subService.description,
            image: subService.image,
          };
        })
      : [],
  }));
};

const Service = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [selectedService, setSelectedService] = useState<string>("");
  const [serviceData, setServiceData] = useState<ServiceItem[]>([]);

  useEffect(() => {
    const serviceRef = rtdbref(FIREBASE_DB, "service");
    const unsubscribe = onValue(serviceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const transformedData = transformData(data);
        setServiceData(transformedData);
        setSelectedService(serviceId || transformedData[0]?.id || "");
      }
    });

    return () => unsubscribe();
  }, [serviceId]);

  const currentService = serviceData.find((service) => service.id === selectedService);

  return (
    <div>
      {/* Sub Service */}
      <div>
        {/* Scroll Menu */}
        <ul className="flex text-sm justify-center w-11/12 mx-auto py-4 pt-16 items-stretch">
          {serviceData.map((e) => (
            <li
              key={e.id}
              className={`flex-1 px-4 py-2 ${
                selectedService === e.id
                  ? "border-b-2 border-primary text-primary font-semibold"
                  : "border-b border-opacity-50 border-slate-600 text-slate-600"
              } flex justify-center items-center text-center`}
            >
              <Link to={`/service/${e.id}`} onClick={() => setSelectedService(e.id)}>
                {e.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Service Detail */}
        {currentService && (
          <SubService
            id={currentService.id}
            title={currentService.title}
            subtitle={currentService.subtitle}
            description={currentService.description}
            data={currentService.subservice}
          />
        )}
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
            <img src={Agile} alt="Scrum Agile Methodology" />
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="w-full text-center py-14 mt-8">
        <h2 className="text-4xl font-medium text-base-dark">Technology Stack</h2>
        <p className="text-sm font-light text-base-dark mt-2 w-4/12 mx-auto">
          Our Technology Stack utilizes the latest tools and platforms to deliver efficient, reliable, and scalable services. From front-end to back-end, we cover all your business needs.
        </p>

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
};

export default Service;
