import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";

// Define the type for the props
interface PortoCardProps {
  id: string; // or number, depending on your id format
  title: string;
  type: string;
  pict: string;
  desc: string;
}

const PortoCard: React.FC<PortoCardProps> = ({ id, title, type, pict, desc }) => {
  return (
    <Link
      to={`/portofolio/` + id}
      className="md:w-80 w-8/12 m-8 pb-8 bg-base-white rounded-lg"
      id={id.toString()}
    >
      <div className="w-full h-48 relative">
        <div className='p-1 inline-block absolute right-0 bg-slate-950 text-white rounded-full'><MdArrowOutward className='text-4xl p-1' /></div>
        <img className="object-cover w-full h-full rounded-t-lg" src={pict} alt={title} />
      </div>
      <p className="font-bold mt-4 text-xl mx-4">{title}</p>
      <p className="font-normal mt-4 mx-4 text-xs tracking-wide leading-5">
        {desc.length > 200 ? desc.substring(0, 200) + '...' : desc}
      </p>
      <span className="mt-2 mx-4 bg-primary-light bg-opacity-10 px-4 py-1.5 rounded-full text-primary font-medium text-sm inline-block">
        {type}
      </span>
    </Link>
  );
};

export default PortoCard;
