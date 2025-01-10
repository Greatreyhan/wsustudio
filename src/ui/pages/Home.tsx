import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  IconService1,
  IconService2,
  IconService3,
  IconService4,
  IconService5,
  IconService6,
} from "../../assets/icons";
import { HeroHome, Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7, Partner8, Partner9, Partner10, Partner11, Partner12, Partner13, Partner14, Partner15, Partner16, Partner17, Partner18, Partner19, Partner20, Partner21, Service1, Service2, Service3, Service4, Service5, Service6 } from "../../assets/images";
import { ServiceCard } from "../organisms";
import { onValue, ref as rtdbref } from "firebase/database";
import { FIREBASE_DB } from "../../config/firebaseinit";
import Slider from 'react-infinite-logo-slider'
import MiniBlog from "../organisms/MiniBlog";

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

const Home: React.FC = () => {
  const [serviceData, setServiceData] = useState<ServiceItem[]>([]);

  useEffect(() => {
    const serviceRef = rtdbref(FIREBASE_DB, "service");
    const unsubscribe = onValue(serviceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const transformedData = transformData(data);
        setServiceData(transformedData);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Header Desktop */}
      <div className="bg-slate-50 text-center pt-28 pb-8">
        <h1 className="uppercase text-xl text-base-dark font-normal border border-slate-950 inline-block px-4 py-1 rounded-full">
          PT WIDYA SOLUSI UTAMA
        </h1>
        <h2 className="uppercase text-4xl text-base-dark font-bold mt-4">
          Humanize Business <br />Through Technology
        </h2>
        <p className="w-6/12 mx-auto mt-2 text-base-light">
          WSU is dedicated and passionate about helping businesses thrive
          through technology. We are a local company with a global passion and
          mission.
        </p>

        <div className="mt-6">
          <Link
            to="/contact"
            className="bg-primary text-white px-6 py-2.5 rounded-full mx-4"
          >
            Contact Us
          </Link>
          <button className="bg-slate-50 text-base-dark px-6 py-2 rounded-full mx-4">
            Learn More
          </button>
        </div>

        <div className="mt-8 w-10/12 h-96 mx-auto">
          <img
            className="w-full h-full object-contain"
            src={HeroHome}
            alt="Hero"
          />
        </div>
      </div>

      {/* Achievements */}
      <div className="w-full bg-white">
        <h2 className="text-center text-3xl font-normal uppercase text-base-dark pt-24">
          Clients We Work With
        </h2>

        {/* Clients */}
        <hr className="w-8/12 mx-auto mt-8" />
        <div className="w-full mx-auto flex items-center justify-around">
          <Slider
            width="200px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
          >
            {[Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7, Partner8, Partner9, Partner10, Partner11, Partner12, Partner13, Partner14, Partner15, Partner16, Partner17, Partner18, Partner19, Partner20, Partner21].map(e => {
              return (<Slider.Slide>
                <div className="flex justify-center items-center h-full w-full px-12 mt-8">
                  <img src={e} className="max-w-full max-h-full object-contain" alt={e} />
                </div>
              </Slider.Slide>)
            })}
          </Slider>
        </div>

      </div>

      {/* Services */}
      <div className="w-11/12 mx-auto rounded-lg px-12 py-8">
        <h2 className="text-center text-3xl font-normal uppercase text-base-dark pt-24">
          Integrated Solutions for Your Digital Needs
        </h2>
        <p className="mx-auto w-5/12 text-center text-base-light mt-4 text-sm">
          From software development to AI implementation,<br />
          our solutions are designed to address the challenges of modern business
        </p>
        <hr className="w-8/12 mx-auto mt-8" />

        <div className="flex flex-wrap">
          {serviceData?.map((e,i) => {
            return (<ServiceCard type={i%2==0?"right":"left"} title={e.title} description={e.description} to={`service/${e.id}`} image={e.image} icon={e.icon} />)
          })}

        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-base-dark w-10/12 mx-auto p-14 rounded-3xl">
        <h3 className="text-4xl text-white uppercase font-semibold">
          Got an Idea?
        </h3>
        <p className="text-sm font-light text-slate-100 mt-2 w-6/12">
          Share your vision with us, whether it's a groundbreaking concept or a small improvement. Let's make it happen!
        </p>
        <button className="bg-slate-50 text-base-dark px-6 py-2 rounded-xl mt-5">
          Learn More
        </button>
      </div>

      {/* Articles */}
      <div className="w-full py-8">
        <h2 className="text-center text-3xl font-normal uppercase text-base-dark pt-24">
          WHAT'S NEW?
        </h2>
        <p className="mx-auto w-5/12 text-center text-base-light mt-4 text-sm">
          Discover the latest insights and updates. From industry trends to company news, <br />
          our blog keeps you informed and inspired.
        </p>
        <div className="flex flex-wrap justify-between w-10/12 mx-auto">
        <MiniBlog />
        </div>
      </div>
    </div>
  );
};

export default Home;
