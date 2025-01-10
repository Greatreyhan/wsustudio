import React from 'react'
import DescriptionCard from "../organisms/DescriptionCard";
import HeroElement from './HeroElement';
interface DescriptionCardParams {
    type: string
    title: string
    subtitle: string
    description: string
    image: string
}
interface SubServiceProps {
    id: string
    title: string
    subtitle: string
    description: string
    data: DescriptionCardParams[]
}
const SubService: React.FC<SubServiceProps> = ({ id, title, subtitle, description, data }) => {

    return (
        <>
            <HeroElement id={id} title={title} subtitle={subtitle} description={description} />
            <div className="w-10/12 mx-auto">

                {data?.map((item, index) => (
                    <DescriptionCard
                        key={index}
                        type={ index % 2 == 0 ? "left":"right"}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </>
    )
}

export default SubService