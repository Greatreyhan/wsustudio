import { Link } from "react-router-dom";
import { LogoInverted } from "../../assets/icons";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full mx-auto bg-base-dark">
      <div className="flex flex-wrap md:w-10/12 w-full px-3 md:px-0 mx-auto justify-around items-start pt-4">
        <div className="md:w-4/12 w-full text-white text-normal p-3">
          <img className="w-24 mt-9" src={LogoInverted} />
          <h4 className="font-bold mt-4 text-xl">Widya Solusi Utama</h4>
          <address className="mt-3">
            <p className="font-semibold ">Semarang</p>
            Jl. Setia Budi No.192, Srondol Wetan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 20264
          </address>
          <address className="mt-3">
            <p className="font-semibold ">Depok</p>
            Jl. Margonda No.1 Lantai UG, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16424
          </address>

        </div>
        <div className="flex flex-col flex-1 mx-8">
          <div className="flex justify-end gap-3 mt-6">
            <a
              className="mt-3 text-primary w-10 h-10 p-2.5 bg-base-white rounded-full inline-block hover:text-white"
              target="_blank"
              href="https://www.instagram.com/abdurrahman.lawfirm/"
            >
              <BsInstagram className="w-full h-full" />
            </a>
            <a
              className="mt-3 text-primary w-10 h-10 p-2.5 bg-base-white rounded-full inline-block hover:text-white"
              target="_blank"
              href="mailto:abdurrahman.and.co@gmail.com"
            >
              <BiLogoGmail className="w-full h-full" />
            </a>
            <a
              className="mt-3 text-primary w-10 h-10 p-2.5 bg-base-white rounded-full inline-block hover:text-white"
              target="_blank"
              href="https://wa.me/6282210100098"
            >
              <BsWhatsapp className="w-full h-full" />
            </a>
            <a
              className="mt-3 text-primary w-10 h-10 p-2.5 bg-base-white rounded-full inline-block hover:text-white"
              target="_blank"
              href="https://www.linkedin.com/company/abdurrahman-co/"
            >
              <BiLogoLinkedin className="w-full h-full" />
            </a>
          </div>
          <div className="flex justify-around flex-1">
            <div className="md:flex-1 w-4/12 text-white flex flex-col p-2 mt-8 md:pl-10 pl-0">
              <h5 className="mt-1 font-bold text-xl">
                Navigation
              </h5>
              <Link className="mt-3 text-gray-300 hover:text-white" to="/">
                Home
              </Link>
              <Link
                className="mt-3 text-gray-300 hover:text-white"
                to="/service"
              >
                Our Services
              </Link>
              <Link
                className="mt-3 text-gray-300 hover:text-white"
                to="/portofolio"
              >
                Portofolios
              </Link>
              <Link className="mt-3 text-gray-300 hover:text-white" to="/about">
                About Us
              </Link>
              <Link
                className="mt-3 text-gray-300 hover:text-white"
                to="/blog"
              >
                Blogs
              </Link>
            </div>
            <div className="md:flex-1 w-4/12 text-white flex flex-col p-2 mt-8">
              <h5 className="mt-1 font-bold text-xl">
                Document
              </h5>
              <a
                className="mt-3 text-gray-300 hover:text-white"
                target="_blank"
                href="https://wa.me/6282210100098/?text=Halo%2C%20saya%20ingin%20bertanya%20terkait%20layanan%20di%20bidang%20Litigasi%20dari%20Abdurrahman%20%26%20Co."
              >
                Company Profile
              </a>
              <a
                className="mt-3 text-gray-300 hover:text-white"
                target="_blank"
                href="https://wa.me/6282210100098/?text=Halo%2C%20saya%20ingin%20bertanya%20terkait%20layanan%20di%20bidang%20Non%20Litigasi%20dari%20Abdurrahman%20%26%20Co."
              >
                Certification
              </a>
              <a
                className="mt-3 text-gray-300 hover:text-white"
                target="_blank"
                href="https://wa.me/6282210100098/?text=Halo%2C%20saya%20ingin%20bertanya%20terkait%20layanan%20di%20bidang%20Retainer%20dari%20Abdurrahman%20%26%20Co."
              >
                Izin Usaha
              </a>
            </div>
            <div className="md:flex-1 w-4/12 text-white flex flex-col p-2 mt-8 md:pl-10 pl-0">
              <h5 className="mt-1 font-bold text-xl">
                Services
              </h5>
              <a
                className="mt-3 text-gray-300 hover:text-white"
                target="_blank"
                href="https://www.instagram.com/abdurrahman.lawfirm/"
              >
                IT Solution
              </a>
              <a
                className="mt-3 text-gray-300 hover:text-white"
                target="_blank"
                href="mailto:abdurrahman.and.co@gmail.com"
              >
                IT Consultion
              </a>
              <a
                className="mt-3 text-gray-300 hover:text-white"
                target="_blank"
                href="https://wa.me/6282210100098"
              >
                License Procurement
              </a>
              <a
                className="mt-3 text-gray-300 hover:text-white"
                target="_blank"
                href="https://www.linkedin.com/company/abdurrahman-co/"
              >
                Digital Marketing
              </a>
            </div>
          </div>
        </div>

      </div>
      <p className="text-center mt-8 text-white text-sm">
        © PT Widya Solusi Utama
      </p>
    </div>
  );
};

export default Footer;
