import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const Career = () => {
    return (
        <div className='bg-slate-50 pb-8 '>
            {/* Job Vacancy */}
            <div className="flex w-10/12 mx-auto relative items-center bg-none py-32">
                <div className="flex-1">
                    <h1 className="text-4xl font-medium text-base-dark">Opening Position</h1>
                    <p className="text-sm font-light text-base-dark mt-2 w-8/12">
                        Our team includes skilled, certified engineers located throughout Indonesia. With deep expertise and extensive experience, we are ready to provide effective solutions for your IT challenges.
                    </p>
                </div>
                <div className="flex-1 flex flex-col gap-y-2">
                    {[
                        { id: "1", title: "WSU Studio Academy", description: "lorem", link: "#" },
                        { id: "2", title: "Design", description: "lorem", link: "#" },
                        { id: "3", title: "Engineering", description: "lorem", link: "#" },
                        { id: "4", title: "Finance & Legal", description: "lorem", link: "#" }].map(
                            (e) => (
                                <a
                                    key={e.id}
                                    href={e.link}
                                    className="flex bg-white rounded-full px-6 py-3 items-center text-base-dark cursor-pointer hover:text-white hover:bg-primary justify-between"
                                >
                                    <span>{e.title}</span>
                                    <MdArrowOutward className="text-xl" />
                                </a>
                            )
                        )}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-base-dark w-10/12 mx-auto p-12 rounded-3xl">
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