import React, { useState } from 'react'
import { Hero, P1, P2, P3, P4, P5, P6, P7, P8, P9, P11, P12, P13, P14, P15, P16, P17, P18, P19 } from '../media'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsInstagram, BsTwitter, BsFacebook, BsArrowDownShort } from "react-icons/bs"
import { Comporto } from '../components'

const Portofolios = () => {
  const [data, setData] = useState([
    { id: 1, title: "Air Mineral Pelangi", type: "website", pict: P1, link: "http://en.pelangi.love/", desc:"Pelangi Mineral is one of nation-wide leading companies in its field. Completed by its online shopping system, they\’ve made their way to  expand business out in nation.We create a website company profile that suits the person name brand Pelangi.And develop an online shopping system for the purchase of mineral water." },
    { id: 2, title: "Goal.com X Rexona", type: "website", pict: P2, link: "https://goal.com/id", desc: "Goal.com is one of the largest platforms in the world dedicated to football media. In collaboration with Rexona, we embarked on a project to enhance user engagement through an exciting website quiz. As part of this partnership, we undertook the redevelopment of the website features to better support the event." },
    { id: 3, title: "Andalan Finance", type: "webapp", pict: P3, link: "http://www.andalanfinance.com/", desc:"Andalan Finance Indonesia stands as a premier financial services company, revered as the top choice among both consumers and dealer partners. AFI proudly operates as a part of the Bintraco/Nasmoco Group, with a robust presence encompassing 43 branches across Indonesia. Our collaborative efforts include the creation of a dynamic progressive web app, aimed at elevating their brand presence. Additionally, we are diligently working on a cutting-edge mobile application, designed to seamlessly provide customers with effortless access to a comprehensive array of financial services." },
    { id: 4, title: "Zuna Sport", type: "website", pict: P4, link: "http://id.zunasports.com/", desc: "Zuna Sport stands out as a pioneer among sports equipment brands in Indonesia. Recognizing their position, they entrusted our team with the task of crafting their online store, leveraging our finest features, cutting-edge facilities, and impeccable visual designs. While their sales have thrived via social media channels, Zuna Sport has already established a significant market presence that spans across various regions in Indonesia." },
    { id: 5, title: "Lippo Insurance", type: "app", pict: P5, link: "#", desc:"Lippo stands as a prominent insurance company in Indonesia, acclaimed for its leadership in the industry. A remarkable feat of the company lies in its successful journey of elevating premium income from Rp 319 billion over 28 years to an impressive Rp 1 trillion in just 4 years. In line with this achievement, we were tasked with the development of the iOS version of the 'My Protection by Lippo' app. This initiative serves to enhance and complement their online service platform, further cementing their commitment to providing comprehensive and accessible services to their valued customers." },
    { id: 6, title: "Pasarku", type: "webapp", pict: P6, link: "#", desc: "Pasarku emerges as a promising new startup based in Jakarta, dedicated to revolutionizing traditional market grocery delivery to customers. Their visionary business model entails streamlining the process of delivering essential groceries to clientele. To fulfill this innovative concept, they required an app that could seamlessly process customer orders, provide prompt price updates, and facilitate efficient delivery of these groceries to their doorsteps." },
    { id: 7, title: "Jamu Jago", type: "website", pict: P7, link: "http://jago.co.id/", desc:"Jamu Jago stands as an iconic figure within Indonesia's herbal medicine landscape, boasting a legacy that spans nearly a century. With almost a century of history under their belt, they have embarked on a journey to invigorate their brand's communication strategy. This revitalization involves a twofold approach: a revamped company profile design and an enhanced online herbal shopping experience." },
    { id: 8, title: "PT GONDOWANGI", type: "website", pict: P8, link: "https://gondowangi.com/", desc: "Gondowangi received the Top 250 Brand Award from 2007 to 2014, bestowed by Majalah Marketing & Frontier Consulting Group in recognition of their brand, Natur. Gondowangi aims to expand the reach of their brand through digital marketing, and we contributed by leveraging our finest engineers and digital marketing team." },
    { id: 9, title: "PT Radana Bhaskara Finance Tbk", type: "backend", pict: P9, link: "#", desc:"Creating apps equipped with tools for marketing and potential investors to apply for financing facilities is our goal. These tools also have the objective of enhancing the efficiency of the credit application process. We are developing apps that function to facilitate the ongoing document digitization process at Radana Finance." },
    { id: 11, title: "Private PSE Re-engineering", type: "webapp", pict: P11, link: "#", des: "Every Electronic System Operator (PSE) must complete registration before users commence utilizing the electronic system. This PSE registration process is submitted to the Minister of Communication and Information ('Minister') through an electronically integrated business licensing service, in accordance with the legislative provisions." },
    { id: 12, title: "Biro Hukum Kementerian Komunikasi dan Informatika", type: "webapp", pict: P12, link: "#", desc: "Developing legal service applications and legal aid provisions within the Legal Bureau (Biro Hukum) of the Ministry of Communication and Informatics (Kementerian Komunikasi dan Informatika) serves a dual purpose. Not only do these applications and aids aid in streamlining the harmonization of regulations, but they also achieve this through seamless integration with all databases currently maintained by the Legal Bureau (Biro Hukum)." },
    { id: 13, title: "BP Batam", type: "backend", pict: P13, link: "#", desc: "The utilized services encompass system digitization and workflow management, spanning internal information handling, Document Management System (DMS), as well as Document Approval and Mail Approval systems. This system is implemented as documentation of budget preparation at BP Batam." },
    { id: 14, title: "Danamas", type: "webapp", pict: P14, link: "#", desc:"We are in the process of developing applications that offer marketing tools and aid prospective investors in applying for financing facilities. Additionally, these tools are designed with the aim of enhancing the overall efficiency of the credit approval process." },
    { id: 15, title: "Kementerian Agraria dan Tata Ruang", type: "webapp", pict: P15, link: "#", desc:"The Land Appraiser application (Aplikasi Penilaian Pertanahan) serves the purpose of simplifying the process of granting Land Appraiser licenses electronically. This application is systemized, automated, and integrated with a centralized, verified, and validated database. Additionally, it offers reporting, monitoring, and evaluation systems via a dashboard that delivers real-time information related to licensed appraisers and their assessed lands." },
    { id: 16, title: "Komisi Pemberantasan Korupsi Republik Indonesia", type: "webapp", pict: P16, link: "#", desc:"The +CLC Backoffice is a web-based application designed for the storage and processing of data pertaining to participants in anti-corruption studies organized by the KPK. This application has been developed to cater to administrators, event organizers, and resource personnel alike. Additionally, learning participants have the ability to create accounts and access archives of learning activities they have attended." },
    { id: 17, title: "Lembaga Sertifikasi Profesi(LSP) KPK", type: "webapp", pict: P17, link: "#", desc:"The Corruption Eradication Commission (Komisi Pemberantasan Korupsi (KPK)) Professional Certification Agency (Lembaga Sertifikasi Profesi (LSP)) is a professional certification institution that holds a license from the BNSP to conduct competency tests in the field of anti-corruption. The LSP KPK certification platform streamlines the certification process by maintaining comprehensive records. This platform accommodates all stages of certification, ranging from the initial certification application to participant registration, competency assessment, and the final graduation decision." },
    { id: 18, title: "Consolidation of RUP LKPP", type: "id", pict: P18, link: "#", desc:"LKPP (the National Public Procurement Agency) facilitates the submission of RUPs (Rencana Umum Pengadaan) from different agencies. Among the numerous RUPs, there are instances where RUPs within the same agency exhibit similarities. The consolidation of these RUPs leads to automatic savings in both costs and time. This application serves the purpose of offering suggestions to users regarding which RUPs can be effectively consolidated." },
    { id: 18, title: "Dinas Kelautan dan Perikanan Provinsi Kepulauan Riau", type: "id", pict: P19, link: "#", desc:"We have assisted the Department of Maritime Affairs and Fisheries of the Riau Islands Province (Dinas Kelautan dan Perikanan Provinsi Kepulauan Riau) in creating a fishery logistics information system. This application is designed to aid various stakeholders within the fisheries industry, including fishermen, cultivators, ice factories, cold storage facilities, marketers, and fish processors. The system facilitates the efficient distribution of catches and processed fish products among these stakeholders.." },
  ])
  const [dataType, setDataType] = useState('all');
  return (
    <div className='bg-slate-100'>
      {/* Hero Image */}
      <div>
        <div className='md:w-10/12 w-11/12 mx-auto flex md:flex-row flex-col justify-center items-center'>
          <div className='flex-1 md:order-1 order-2'>
            <h1 className='md:text-6xl text-5xl md:pt-32 pt-2 font-bold'><span className='text-red-700'>Our</span> Work and Partnership</h1>
            <p className='text-xl font-semibold md:mt-8 mt-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
            <Link
              to="/aboutus"
              className="py-2 px-5 bg-slate-900 text-white font-normal text-lg rounded-lg mt-8 inline-flex items-center"
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

      {/* Filter */}
      <div className='flex flex-wrap md:w-10/12 w-11/12 mx-auto justify-around mt-20 uppercase font-semibold text-slate-600' id="moreporto">
        <a onClick={() => setDataType('all')} className={`${dataType == "all" ? "bg-slate-900 text-white" : "cursor-pointer hover:text-red-800"} md:px-5 px-4 py-1 md:text-base md:mt-0 mt-2 text-sm rounded-lg`}>All</a>
        <a onClick={() => setDataType('app')} className={`${dataType == "app" ? "bg-slate-900 text-white" : "cursor-pointer hover:text-red-800"} md:px-5 px-4 py-1 md:text-base md:mt-0 mt-2 text-sm rounded-lg `}>Mobile App Dev</a>
        <a onClick={() => setDataType('website')} className={`${dataType == "website" ? "bg-slate-900 text-white" : "cursor-pointer hover:text-red-800"} md:px-5 px-4 py-1 md:text-base md:mt-0 mt-2 text-sm rounded-lg`}>Web Dev</a>
        <a onClick={() => setDataType('backend')} className={`${dataType == "backend" ? "bg-slate-900 text-white" : "cursor-pointer hover:text-red-800"} md:px-5 px-4 py-1 md:text-base md:mt-0 mt-2 text-sm rounded-lg`}>Backend & Devops</a>
        <a onClick={() => setDataType('it')} className={`${dataType == "it" ? "bg-slate-900 text-white" : "cursor-pointer hover:text-red-800"} md:px-5 px-4 py-1 md:text-base md:mt-0 mt-2 text-sm rounded-lg`}>IT Consulting Services</a>
        <a onClick={() => setDataType('webapp')} className={`${dataType == "webapp" ? "bg-slate-900 text-white" : "cursor-pointer hover:text-red-800"} md:px-5 px-4 py-1 md:text-base md:mt-0 mt-2 text-sm rounded-lg`}>Website & App Maintenance</a>
      </div>

      {/* Project Show */}
      <div className='w-10/12 mx-auto'>
        <div className='flex flex-wrap mt-8 justify-around'>
          {data.map(element => {
            if (dataType == 'all') {
              return (
                <Comporto key={element.id} id={element.id} title={element.title} type={element.type} pict={element.pict} desc={element.desc} link={element.link} />
              )
            }
            else if (dataType == 'app') {
              if (element.type == 'app') {
                return (
                  <Comporto key={element.id} id={element.id} title={element.title} type={element.type} pict={element.pict} desc={element.desc} link={element.link} />
                )
              }
            }
            else if (dataType == 'website') {
              if (element.type == 'website') {
                return (
                  <Comporto key={element.id} id={element.id} title={element.title} type={element.type} pict={element.pict} desc={element.desc} link={element.link} />
                )
              }
            }
            else if (dataType == 'backend') {
              if (element.type == 'backend') {
                return (
                  <Comporto key={element.id} id={element.id} title={element.title} type={element.type} pict={element.pict} desc={element.desc} link={element.link} />
                )
              }
            }
            else if (dataType == 'it') {
              if (element.type == 'it') {
                return (
                  <Comporto key={element.id} id={element.id} title={element.title} type={element.type} pict={element.pict} desc={element.desc} link={element.link} />
                )
              }
            }
            else if (dataType == 'webapp') {
              if (element.type == 'webapp') {
                return (
                  <Comporto key={element.id} id={element.id} title={element.title} type={element.type} pict={element.pict} desc={element.desc} link={element.link} />
                )
              }
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Portofolios