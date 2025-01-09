import { Cert1, Cert2, Cert3, Cert4, Cert5, Cert6, Cert7, Cert8, Cert9, Cert10, Cert11, Cert12, Cert13, Cert14, Cert15, Cert16, HeroAbout, } from "../../assets/images"
import { FaPlus } from "react-icons/fa6";


function Aboutus() {

  return (
    <div className="">

      {/* Hero Image */}
      <div className="w-full">
        <div className="w-10/12 mx-auto flex items-center">
          <div className="flex-1 flex justify-start relative pt-32">
            <div className="w-full h-full bg-slate-100 -z-10 absolute bottom-0 -left-28 rounded-3xl"></div>
            <img className="w-8/12" src={HeroAbout} />
          </div>
          <div className="flex-1">
            <p className="text-3xl text-slate-900">“<span className="font-medium text-primary">We are more than just a software house</span>. With over 10 years experience, we have been helping countless individuals bring their digital products to life.​”</p>
            <p className="mt-4 text-slate-700">We built a solid team from scratch to overcome our clients challenges, we take on every project with dedication and commitment. It's not always easy, but together with our clients, whom we consider family, we've made remarkable achievements.</p>
          </div>
        </div>
      </div>

      {/* Visi Misi */}
      <div className="mt-24 flex w-10/12 gap-x-10 mx-auto items-center">
        <h2 className="text-7xl font-semibold w-4/12 text-slate-800">Vision & Mission</h2>
        <div className="flex-1">
          <p className="text-slate-700 text-xl py-4"><span className="font-semibold">PT Widya Solusi Utama</span> is an IT company dedicated to providing custom-based digital solutions. We specialize in product development and IT goods and services procurement.</p>
          <p className="text-slate-700 text-xl py-4"><span className="font-semibold">We are more than just a digital solutions provider</span> we serve our customers based on their needs and our extensive company experience.</p>
        </div>
      </div>

      {/* Expertise */}
      <div className="text-center mt-32 mb-8 w-10/12 mx-auto">
        <h2 className="text-3xl font-medium text-slate-800">Our Expertise</h2>
        <p className="mt-4 text-sm text-slate-700 w-6/12 mx-auto">Our team includes skilled, certified engineers located throughout Indonesia. With deep expertise and extensive experience, we are ready to provide effective solutions for your IT challenges.</p>
        <div className="flex justify-around items-center flex-wrap mt-6">
          {[Cert1, Cert2, Cert3, Cert4, Cert5, Cert6, Cert7, Cert8, Cert9, Cert10, Cert11, Cert12, Cert13, Cert14, Cert15, Cert16].map(e => {
            return (<img className="w-32 h-auto p-4" src={e} />)
          })}
        </div>
      </div>

      {/* Map */}
      <div className="flex justify-between items-center w-10/12 mx-auto py-16">
        <div className="w-5/12 mr-8">
          <h3 className="text-3xl font-bold">Visit Us</h3>
          <p className="font-semibold mt-3">Semarang</p>
          <address className="text-sm">
            Jl. Setia Budi No.192, Srondol Wetan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 20264
          </address>
          <p className="font-semibold mt-3">Depok</p>
          <address className="text-sm"> 
            Jl. Margonda No.1 Lantai UG, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16424
          </address>
        </div>
        <iframe className="flex-1 rounded-lg" width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.%20Setia%20Budi%20No.192,%20Srondol%20Wetan,%20Kec.%20Banyumanik,%20Kota%20Semarang,%20Jawa%20Tengah%2020264+(WSU)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>

      {/* FAQ */}
      <div className="my-32 mt-8 flex items-start w-10/12 mx-auto">
        <div className="flex-1">
          <h2 className="font-medium text-4xl text-slate-800">FAQ</h2>
          <p className="mt-2 text-sm text-slate-700 w-8/12">Got questions? We've got answers.
            Find quick answers to common questions here.</p>
        </div>
        <div className="flex-1">
          <div className="mt-4 py-2 border-b-2 border-slate-800 text-slate-800 flex justify-between items-center">
            <p className="text-slate-800 font-medium">Do You Work With Money?</p>
            <FaPlus className="bg-slate-900 p-1.5 text-4xl rounded-full cursor-pointer text-white" />
          </div>
          <p className="py-2 border-b-2 border-slate-800 text-sm">Our team group of creative people, consisting of various backgrounds and specific abilities that are divided into several divisions.</p>

        </div>
      </div>
    </div>
  );
}

export default Aboutus;
