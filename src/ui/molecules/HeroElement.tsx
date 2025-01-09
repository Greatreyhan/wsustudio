import React from 'react'
import { Props1, Props2 } from '../../assets/images'

interface HeroElementProps {
    id: string
    title: string
    subtitle: string
    description: string
}
const HeroElement : React.FC<HeroElementProps> = ({id, title, subtitle, description}) => {
    return (
        <div id={id} className="w-full pt-16 pb-16 h-96 relative">
            <div className="w-10/12 mx-auto text-center">
                <h1 className="text-primary font-semibold">{title}</h1>
                <h2 className="text-4xl font-bold mt-2 w-7/12 mx-auto">{subtitle}</h2>
                <p className="text-slate-700 text-sm mt-4 w-7/12 mx-auto tracking-wide">{description}</p>
            </div>
            <img className="absolute -bottom-24 left-32 -z-10" src={Props1} />
            <img className="absolute top-0 right-10 -z-10" src={Props2} />
        </div>
    )
}

export default HeroElement