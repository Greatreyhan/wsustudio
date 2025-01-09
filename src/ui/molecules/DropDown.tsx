import React, {useState} from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

interface DropDownElement {
    question : string
    answer : string
}

const DropDown : React.FC<DropDownElement> = ({question, answer}) => {
    const [dropElement, setDropElemet] = useState<boolean>(false)
    return (
        <div>
            <div className="mt-4 py-2 bg-base-white rounded-full px-3 flex justify-between items-center">
                <p className="text-slate-800 font-medium px-4">{question}</p>
                <button onClick={()=>setDropElemet(!dropElement)}>
                    {dropElement ?
                    <FaMinus className="bg-base-dark p-1.5 text-4xl rounded-full cursor-pointer text-white" />
                    :
                    <FaPlus className="bg-base-dark p-1.5 text-4xl rounded-full cursor-pointer text-white" />
                    }
                </button>
            </div>
            <div className={`mt-2 py-2 bg-base-white rounded-xl px-3 ${dropElement ? "flex" : "hidden"} justify-between items-center`}>
                <p className="py-2 px-4 text-sm">{answer}</p>
            </div>
        </div>
    )
}

export default DropDown