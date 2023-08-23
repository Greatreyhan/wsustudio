import React from 'react'

const Comporto = ({id, title, type, pict, link, desc}) => {
    return (
        <a href={link} className='flex flex-col md:w-5/12 w-8/12 m-8 shadow-lg rounded-xl px-8 py-16 bg-white' id={id}>
            <img className='object-cover w-full h-full' src={pict} />
            <p className='font-bold mt-4 text-xl'>{title}</p>
            <p>{type == "website" ? "Website" : type == "webapp" ? "Website & Mobile App" : "Mobile App"}</p>
            <p className='font-normal mt-4 text-xs tracking-wide leading-5'>{desc}</p>
        </a>
    )
}

export default Comporto