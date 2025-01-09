import React from 'react'
import DropDown from '../molecules/DropDown'

const FAQ = () => {
  return (
    <div className="my-32 mt-8 flex items-start w-10/12 mx-auto">
        <div className="flex-1">
          <h2 className="font-medium text-4xl text-slate-800">FAQ</h2>
          <p className="mt-2 text-sm text-base-light w-8/12">Got questions? We've got answers.
            Find quick answers to common questions here.</p>
        </div>
        <div className="flex-1">
          <DropDown question='Do You Work With Money?' answer='Our team group of creative people, consisting of various backgrounds and specific abilities that are divided into several divisions.' />
          <DropDown question='Do You Work With Money?' answer='Our team group of creative people, consisting of various backgrounds and specific abilities that are divided into several divisions.' />
          <DropDown question='Do You Work With Money?' answer='Our team group of creative people, consisting of various backgrounds and specific abilities that are divided into several divisions.' />
        </div>
      </div>
  )
}

export default FAQ