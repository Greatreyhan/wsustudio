import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

function Contactus() {
  return (
    <div className="pb-10 pt-0 overflow-x-hidden">
      <div className="relative w-full h-96 md:mt-0 mt-2">
        {/* <img className="w-full h-full object-cover" src={ContactHero} /> */}
        <div className="absolute bg-black bg-opacity-5 w-full h-full top-0"></div>
      </div>
      <h2 data-aos="fade-left" className="text-4xl text-center mt-6 font-bold text-blue-950">
        {'Page Contact Us Title'}
      </h2>
      <p data-aos="fade-right" className="text-center text-md text-blue-950 mt-6 md:mx-32 mx-8 ">
        {'Page Contact Us Text'}
      </p>
      <div data-aos="flip-left" className="flex justify-center gap-3 mt-6">
        <a
          className="mt-3 text-white w-12 h-12 p-2.5 bg-blue-950 rounded-full inline-block hover:text-amber-400"
          target="_blank"
          href="https://www.instagram.com/abdurrahman.lawfirm/"
        >
          <BsInstagram className="w-full h-full" />
        </a>
        <a
          className="mt-3 text-white w-12 h-12 p-2.5 bg-blue-950 rounded-full inline-block hover:text-amber-400"
          target="_blank"
          href="mailto:abdurrahman.and.co@gmail.com"
        >
          <BiLogoGmail className="w-full h-full" />
        </a>
        <a
          className="mt-3 text-white w-12 h-12 p-2.5 bg-blue-950 rounded-full inline-block hover:text-amber-400"
          target="_blank"
          href="https://wa.me/6282210100098"
        >
          <BsWhatsapp className="w-full h-full" />
        </a>
        <a
          className="mt-3 text-white w-12 h-12 p-2.5 bg-blue-950 rounded-full inline-block hover:text-amber-400"
          target="_blank"
          href="https://www.linkedin.com/company/abdurrahman-co/"
        >
          <BiLogoLinkedin className="w-full h-full" />
        </a>
      </div>
    </div>
  );
}

export default Contactus;
