import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Props3 } from '../../assets/images'

const Career = () => {
    return (
        <div className='bg-slate-50 pb-8 '>
            {/* Job Vacancy */}
            <div className="flex w-10/12 mx-auto relative items-center bg-none py-32">
                <div className="flex-1">
                    <h1 className="text-4xl font-medium text-slate-800">Opening Position</h1>
                    <p className="text-sm font-light text-slate-800 mt-2 w-8/12">
                        Our team includes skilled, certified engineers located throughout Indonesia. With deep expertise and extensive experience, we are ready to provide effective solutions for your IT challenges.
                    </p>
                </div>
                <div className="flex-1 flex flex-col gap-y-2">
                    {["WSU Studio Academy", "Design", "Engineering", "Finance & Legal"].map(
                        (label, idx) => (
                            <a
                                key={idx}
                                className="flex bg-white rounded-full px-6 py-3 items-center text-slate-800 cursor-pointer hover:text-white hover:bg-primary justify-between"
                            >
                                <span>{label}</span>
                                <MdArrowOutward className="text-xl" />
                            </a>
                        )
                    )}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-slate-800 w-10/12 mx-auto p-12 rounded-3xl">
                <h3 className="text-4xl text-white uppercase font-semibold">
                    Find the right position and apply
                </h3>
                <p className="text-sm font-light text-slate-100 mt-2 w-6/12">
                    Contact us now to get started!
                </p>
                <button className="bg-slate-50 text-slate-950 px-6 py-2 rounded-xl mt-5">
                    Send email
                </button>
            </div>
        </div>
    )
}

export default Career